---
title: "knx-gateway-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Identifies a KNX gateway on UDP port 3671 by sending a KNX Description Request."
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
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/knx-gateway-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/knx-gateway-info.html"
---

Identifies a KNX gateway on UDP port 3671 by sending a KNX Description Request.
Further information:
 * DIN EN 13321-2
 * http://www.knx.org/
