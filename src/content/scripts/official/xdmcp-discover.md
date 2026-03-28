---
title: "xdmcp-discover"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Requests an XDMCP (X display manager control protocol) session and lists supported authentication and authorization mechanisms."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 177 --script xdmcp-discover <ip>"
outputPreview:
  - "PORT    STATE         SERVICE"
  - "177/udp open|filtered xdmcp"
  - "| xdmcp-discover:"
  - "|   Session id: 0x0000703E"
  - "|   Authorization name: MIT-MAGIC-COOKIE-1"
  - "|_  Authorization data: c282137c9bf8e2af88879e6eaa922326"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/xdmcp-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/xdmcp-discover.html"
---

Requests an XDMCP (X display manager control protocol) session and lists supported authentication and authorization mechanisms.
