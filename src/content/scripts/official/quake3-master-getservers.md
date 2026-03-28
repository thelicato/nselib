---
title: "quake3-master-getservers"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Queries Quake3-style master servers for game servers (many games other than Quake 3 use this same protocol)."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
  - "postrule"
scriptTypes:
  - "portrule"
  - "postrule"
protocols: []
ports: []
usage: "nmap -sU -p 27950 --script=quake3-master-getservers <target>"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "27950/udp open  quake3-master"
  - "| quake3-master-getservers:"
  - "|     192.0.2.22:26002 Xonotic (Xonotic 3)"
  - "|     203.0.113.37:26000 Nexuiz (Nexuiz 3)"
  - "|_    Only 2 shown. Use --script-args quake3-master-getservers.outputlimit=-1 to see all."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/quake3-master-getservers.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/quake3-master-getservers.html"
---

Queries Quake3-style master servers for game servers (many games other than Quake 3 use this same protocol).
