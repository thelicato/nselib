---
title: "vnc-title"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "discovery"
shortDescription: "Tries to log into a VNC server and get its desktop name. Uses credentials\ndiscovered by vnc-brute, or None authentication types. If\n realvnc-auth-bypass was run and returned VULNERABLE, this script\nwill use that vulnerability to bypass authentication."
risk: intrusive
tags:
  - "intrusive"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=vnc-title <target>"
outputPreview:
  - "| vnc-title:"
  - "|   name: LibVNCServer"
  - "|   geometry: 800 x 600"
  - "|_  color_depth: 24"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/vnc-title.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/vnc-title.html"
---

Tries to log into a VNC server and get its desktop name. Uses credentials
discovered by vnc-brute, or None authentication types. If
 realvnc-auth-bypass was run and returned VULNERABLE, this script
will use that vulnerability to bypass authentication.
