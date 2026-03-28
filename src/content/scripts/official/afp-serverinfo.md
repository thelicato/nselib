---
title: "afp-serverinfo"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Shows AFP server information. This information includes the server's\nhostname, IPv4 and IPv6 addresses, and hardware type (for example\n Macmini or MacBookPro )."
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
outputPreview:
  - "PORT    STATE SERVICE"
  - "548/tcp open  afp"
  - "| afp-serverinfo:"
  - "|   Server Flags:"
  - "|     Flags hex: 0x837d"
  - "|     Super Client: true"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/afp-serverinfo.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/afp-serverinfo.html"
---

Shows AFP server information. This information includes the server's
hostname, IPv4 and IPv6 addresses, and hardware type (for example
 Macmini or MacBookPro ).
