---
title: "http-rompager-rom0"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "This exploits /rom-0 information disclosure present in RomPager Embedded Web Server\nAffected devices include ZTE, TP-Link, ZynOS, Huawei and many others."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "kost/nmap-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-rompager-rom0 <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-rompager-rom0:"
  - "|   VULNERABLE:"
  - "|   /rom-0 information disclosure present in ZTE, TP-Link, ZynOS, Huawei"
  - "|     State: VULNERABLE (Exploitable)"
author: "Vlatko Kosturjak <kost@linux.hr> (upstream: kost/nmap-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/kost/nmap-nse/blob/master/scripts/http-rompager-rom0.nse"
---

Imported from the upstream repository [kost/nmap-nse](https://github.com/kost/nmap-nse).
This exploits /rom-0 information disclosure present in RomPager Embedded Web Server
Affected devices include ZTE, TP-Link, ZynOS, Huawei and many others.
