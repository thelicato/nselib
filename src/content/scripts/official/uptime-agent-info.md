---
title: "uptime-agent-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "default"
shortDescription: "Gets system information from an Idera Uptime Infrastructure Monitor agent."
risk: safe
tags:
  - "safe"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script uptime-agent-info -p 9998 <target>"
outputPreview:
  - "9998/tcp open  uptime-agent syn-ack"
  - "| uptime-agent-info: SYSNAME=system123"
  - "| DOMAIN=(none)"
  - "| ARCH=\"Linux system123 3.12.51-60.20-default #1 SMP Fri Dec 11 12:01:38 UTC 2015 (1ca22d2) x86_64 x86_64 x86_64 GNU/Linux\""
  - "| OSVER=\"SUSE Linux Enterprise Server 12 (x86_64)  1 # This file is deprecated and will be removed in a future service pack or release. # Please check /etc/os-release for details about this release. ( 3.12.51-60.20-default x86_64)\""
  - "| NUMCPUS=2"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/uptime-agent-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/uptime-agent-info.html"
---

Gets system information from an Idera Uptime Infrastructure Monitor agent.
