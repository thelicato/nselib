---
title: "metasploit-info"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "safe"
shortDescription: "Gathers info from the Metasploit rpc service. It requires a valid login pair.\nAfter authentication it tries to determine Metasploit version and deduce the OS\ntype. Then it creates a new console and executes few commands to get\nadditional info."
risk: safe
tags:
  - "intrusive"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap <target> --script=metasploit-info --script-args username=root,password=root"
outputPreview:
  - "55553/tcp open  metasploit-msgrpc syn-ack"
  - "| metasploit-info:"
  - "|   Metasploit version: 4.4.0-dev Ruby version: 1.9.3 i386-mingw32 2012-02-16 API version: 1.0"
  - "|   Additional info:"
  - "|   Host Name:                 WIN"
  - "|   OS Name:                   Microsoft Windows XP Professional"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/metasploit-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/metasploit-info.html"
---

Gathers info from the Metasploit rpc service. It requires a valid login pair.
After authentication it tries to determine Metasploit version and deduce the OS
type. Then it creates a new console and executes few commands to get
additional info.
