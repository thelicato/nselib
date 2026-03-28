---
title: "vnc-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Queries a VNC server for its protocol version and supported security types."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "5900/tcp open  vnc"
  - "| vnc-info:"
  - "|   Protocol version: 3.889"
  - "|   Security types:"
  - "|     Mac OS X security type (30)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/vnc-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/vnc-info.html"
---

Queries a VNC server for its protocol version and supported security types.
