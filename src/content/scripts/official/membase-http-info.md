---
title: "membase-http-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves information (hostname, OS, uptime, etc.) from the CouchBase\nWeb Administration port. The information retrieved by this script\ndoes not require any credentials."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8091 <ip> --script membase-http-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8091/tcp open  unknown"
  - "| membase-http-info:"
  - "|   Hostname           192.168.0.5:8091"
  - "|   OS                 x86_64-unknown-linux-gnu"
  - "|   Version            1.7.2r-20-g6604356"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/membase-http-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/membase-http-info.html"
---

Retrieves information (hostname, OS, uptime, etc.) from the CouchBase
Web Administration port. The information retrieved by this script
does not require any credentials.
