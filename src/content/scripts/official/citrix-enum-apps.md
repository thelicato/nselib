---
title: "citrix-enum-apps"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Extracts a list of published applications from the ICA Browser service."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "sudo ./nmap -sU --script=citrix-enum-apps -p 1604 <host>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1604/udp open  unknown"
  - "1604/udp open  unknown"
  - "| citrix-enum-apps:"
  - "|   Notepad"
  - "|   iexplorer"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/citrix-enum-apps.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/citrix-enum-apps.html"
---

Extracts a list of published applications from the ICA Browser service.
