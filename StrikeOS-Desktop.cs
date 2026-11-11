using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace StrikeOS
{
    class Program
    {
        static string BaseDir;

        [STAThread]
        static void Main(string[] args)
        {
            BaseDir = AppDomain.CurrentDomain.BaseDirectory;

            // Start embedded loopback HTTP server on an ephemeral port (no admin rights required,
            // and provides http://localhost:<port> secure context for Web Bluetooth Polar HR!)
            TcpListener listener = new TcpListener(IPAddress.Loopback, 0);
            listener.Start();
            int port = ((IPEndPoint)listener.LocalEndpoint).Port;
            string url = "http://localhost:" + port + "/index.html";

            Thread serverThread = new Thread(() => ServeLoop(listener));
            serverThread.IsBackground = true;
            serverThread.Start();

            Process appProc = LaunchStandaloneWindow(url);
            if (appProc != null)
            {
                // Keep server alive until standalone window closes or for 12 hours
                Thread.Sleep(TimeSpan.FromHours(12));
            }
        }

        static Process LaunchStandaloneWindow(string url)
        {
            string[] candidates = new string[]
            {
                @"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
                @"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
                @"C:\Program Files\Google\Chrome\Application\chrome.exe",
                @"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
            };

            foreach (string browserPath in candidates)
            {
                if (File.Exists(browserPath))
                {
                    ProcessStartInfo psi = new ProcessStartInfo
                    {
                        FileName = browserPath,
                        Arguments = "--app=" + url + " --window-size=1440,920 --enable-features=WebBluetooth",
                        UseShellExecute = false
                    };
                    return Process.Start(psi);
                }
            }

            return Process.Start(new ProcessStartInfo(url) { UseShellExecute = true });
        }

        static void ServeLoop(TcpListener listener)
        {
            while (true)
            {
                try
                {
                    TcpClient client = listener.AcceptTcpClient();
                    ThreadPool.QueueUserWorkItem(_ => HandleClient(client));
                }
                catch
                {
                    break;
                }
            }
        }

        static void HandleClient(TcpClient client)
        {
            using (client)
            using (NetworkStream stream = client.GetStream())
            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
            {
                try
                {
                    string requestLine = reader.ReadLine();
                    if (string.IsNullOrEmpty(requestLine)) return;

                    string[] parts = requestLine.Split(' ');
                    string rawPath = parts.Length > 1 ? parts[1] : "/index.html";
                    int qIdx = rawPath.IndexOf('?');
                    if (qIdx >= 0) rawPath = rawPath.Substring(0, qIdx);
                    if (rawPath == "/" || string.IsNullOrEmpty(rawPath)) rawPath = "/index.html";

                    string safeName = Path.GetFileName(rawPath.TrimStart('/'));
                    string filePath = Path.Combine(BaseDir, safeName);

                    if (!File.Exists(filePath))
                    {
                        byte[] notFound = Encoding.UTF8.GetBytes("HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\nConnection: close\r\n\r\n");
                        stream.Write(notFound, 0, notFound.Length);
                        return;
                    }

                    byte[] body = File.ReadAllBytes(filePath);
                    string mime = GetMimeType(filePath);
                    string header =
                        "HTTP/1.1 200 OK\r\n" +
                        "Content-Type: " + mime + "\r\n" +
                        "Content-Length: " + body.Length + "\r\n" +
                        "Cache-Control: no-cache\r\n" +
                        "Connection: close\r\n\r\n";
                    byte[] headerBytes = Encoding.UTF8.GetBytes(header);
                    stream.Write(headerBytes, 0, headerBytes.Length);
                    stream.Write(body, 0, body.Length);
                }
                catch
                {
                }
            }
        }

        static string GetMimeType(string path)
        {
            string ext = Path.GetExtension(path).ToLowerInvariant();
            switch (ext)
            {
                case ".html": return "text/html; charset=utf-8";
                case ".css": return "text/css; charset=utf-8";
                case ".js": return "application/javascript; charset=utf-8";
                case ".json": return "application/json; charset=utf-8";
                case ".svg": return "image/svg+xml";
                default: return "application/octet-stream";
            }
        }
    }
}
