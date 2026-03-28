---
title: "eppc-enum-processes"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to enumerate process info over the Apple Remote Event protocol.\nWhen accessing an application over the Apple Remote Event protocol the\nservice responds with the uid and pid of the application, if it is running,\nprior to requesting authentication."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 3031 <ip> --script eppc-enum-processes"
outputPreview:
  - "PORT     STATE SERVICE"
  - "3031/tcp open  eppc"
  - "| eppc-enum-processes:"
  - "| application       uid  pid"
  - "| Address Book      501  269"
  - "| Facetime          501  495"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/eppc-enum-processes.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/eppc-enum-processes.html"
---

Attempts to enumerate process info over the Apple Remote Event protocol.
When accessing an application over the Apple Remote Event protocol the
service responds with the uid and pid of the application, if it is running,
prior to requesting authentication.
