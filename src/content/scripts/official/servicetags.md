---
title: "servicetags"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to extract system information (OS, hardware, etc.) from the Sun Service Tags service agent (UDP port 6481)."
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
usage: "nmap -sU -p 6481 --script=servicetags <target>"
outputPreview:
  - "| servicetags:"
  - "|   URN: urn:st:3bf76681-5e68-415b-f980-abcdef123456"
  - "|   System: SunOS"
  - "|   Release: 5.10"
  - "|   Hostname: myhost"
  - "|   Architecture: sparc"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/servicetags.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/servicetags.html"
---

Attempts to extract system information (OS, hardware, etc.) from the Sun Service Tags service agent (UDP port 6481).
Based on protocol specs from
 http://arc.opensolaris.org/caselog/PSARC/2006/638/stdiscover_protocolv2.pdf
 http://arc.opensolaris.org/caselog/PSARC/2006/638/stlisten_protocolv2.pdf
 http://arc.opensolaris.org/caselog/PSARC/2006/638/ServiceTag_API_CLI_v07.pdf
