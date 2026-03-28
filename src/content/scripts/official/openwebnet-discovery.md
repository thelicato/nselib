---
title: "openwebnet-discovery"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "OpenWebNet is a communications protocol developed by Bticino since 2000.\nRetrieves device identifying information and number of connected devices."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script openwebnet-discovery"
outputPreview:
  - "| openwebnet-discover:"
  - "|   IP Address: 192.168.200.35"
  - "|   Net Mask: 255.255.255.0"
  - "|   MAC Address: 00:03:50:01:d3:11"
  - "|   Device Type: F453AV"
  - "|   Firmware Version: 3.0.14"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/openwebnet-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/openwebnet-discovery.html"
---

OpenWebNet is a communications protocol developed by Bticino since 2000.
Retrieves device identifying information and number of connected devices.
