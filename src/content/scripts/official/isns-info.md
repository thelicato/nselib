---
title: "isns-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Lists portals and iSCSI nodes registered with the Internet Storage Name\nService (iSNS)."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 3205 <ip> --script isns-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "3205/tcp open  unknown"
  - "| isns-info:"
  - "|   Portal"
  - "|     ip             port"
  - "|     192.168.0.1    3260/tcp"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/isns-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/isns-info.html"
---

Lists portals and iSCSI nodes registered with the Internet Storage Name
Service (iSNS).
