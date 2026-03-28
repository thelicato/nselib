---
title: "citrix-enum-servers"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Extracts a list of Citrix servers from the ICA Browser service."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "sudo ./nmap -sU --script=citrix-enum-servers -p 1604"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1604/udp open  unknown"
  - "| citrix-enum-servers:"
  - "|   CITRIXSRV01"
  - "|_  CITRIXSRV02"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/citrix-enum-servers.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/citrix-enum-servers.html"
---

Extracts a list of Citrix servers from the ICA Browser service.
