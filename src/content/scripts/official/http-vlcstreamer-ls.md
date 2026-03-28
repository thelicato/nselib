---
title: "http-vlcstreamer-ls"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Connects to a VLC Streamer helper service and lists directory contents. The\nVLC Streamer helper service is used by the iOS VLC Streamer application to\nenable streaming of multimedia content from the remote server to the device."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 54340 --script http-vlcstreamer-ls <ip>"
outputPreview:
  - "PORT      STATE SERVICE"
  - "54340/tcp open  unknown"
  - "| http-vlcstreamer-ls:"
  - "|   /Applications"
  - "|   /Developer"
  - "|   /Library"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vlcstreamer-ls.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vlcstreamer-ls.html"
---

Connects to a VLC Streamer helper service and lists directory contents. The
VLC Streamer helper service is used by the iOS VLC Streamer application to
enable streaming of multimedia content from the remote server to the device.
