---
title: "quake1-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Extracts information from Quake game servers and other game servers\nwhich use the same protocol."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -n -sU -Pn --script quake1-info -pU:26000-26004 -- <target>"
outputPreview:
  - "PORT      STATE SERVICE"
  - "26000/udp open  quake"
  - "| quake1-info:"
  - "|   server info exchange payload amplification: 59/12=4.916667"
  - "|   listen address: 10.200.200.10:26000"
  - "|   server name: An anonymous Debian server"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/quake1-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/quake1-info.html"
---

Extracts information from Quake game servers and other game servers
which use the same protocol.
Quake uses UDP packets, which because of source spoofing can be used to amplify
a denial-of-service attack. For each request, the script reports the payload
amplification as a ratio. The format used is
 response_bytes/request_bytes=ratio
http://www.gamers.org/dEngine/quake/QDP/qnp.html
