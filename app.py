#!/usr/bin/env python3
"""
Foxico Travel Carousel - Python Web Server
A lightweight, dependency-free Python 3 HTTP server to run the carousel landing page.
Usage: python3 app.py [PORT]
"""
import http.server
import socketserver
import sys
import os

DEFAULT_PORT = 8000
port = int(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PORT

# Determine static serving directory (prefer python_app if standalone, else current directory)
current_dir = os.path.dirname(os.path.abspath(__file__))
static_dir = os.path.join(current_dir, 'python_app') if os.path.exists(os.path.join(current_dir, 'python_app')) else current_dir

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=static_dir, **kwargs)

    def log_message(self, format, *args):
        # Clean formatted logging
        sys.stdout.write(f"[Foxico Server] {self.address_string()} - {format % args}\n")

def main():
    print("=" * 60)
    print(" Foxico Travel Destination Carousel Landing Page ")
    print(" Pure Python 3 + HTML5 + CSS3 Architecture ")
    print("=" * 60)
    print(f" Serving files from: {static_dir}")
    print(f" Starting server at: http://localhost:{port}")
    print(" Press Ctrl+C to terminate.")
    print("=" * 60)

    # Enable socket reuse to prevent Address Already In Use errors
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", port), CustomHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[Foxico Server] Server shutting down gracefully.")
        sys.exit(0)

if __name__ == '__main__':
    main()
