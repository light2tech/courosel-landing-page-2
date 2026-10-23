#!/usr/bin/env python3
"""
Highland Tea Gembu Carousel - Python Web Server
A lightweight, dependency-free Python 3 HTTP server to run the Highland Tea landing page.
Compatible with local environments, Render, Railway, Fly.io, and Docker.
Usage: python3 app.py [PORT]
"""
import http.server
import socketserver
import sys
import os

# Read PORT from environment variable (Render, Railway, Cloud Run) or command-line arg, default to 3000
raw_port = os.environ.get('PORT')
if raw_port:
    port = int(raw_port)
elif len(sys.argv) > 1:
    port = int(sys.argv[1])
else:
    port = 3000

# Serve from root directory where index.html, /src, and /images are located
static_dir = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=static_dir, **kwargs)

    def log_message(self, format, *args):
        sys.stdout.write(f"[Highland Tea Server] {self.address_string()} - {format % args}\n")

def main():
    print("=" * 60)
    print(" Highland Tea Gembu - Mambilla Plateau Landing Page ")
    print(" Pure Python 3 + HTML5 + CSS3 (Zero TypeScript) ")
    print("=" * 60)
    print(f" Serving root files from: {static_dir}")
    print(f" Listening on: 0.0.0.0:{port}")
    print(" Press Ctrl+C to stop.")
    print("=" * 60)

    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("0.0.0.0", port), CustomHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[Highland Tea Server] Stopped.")
        sys.exit(0)

if __name__ == '__main__':
    main()
