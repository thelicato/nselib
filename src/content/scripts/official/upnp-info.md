---
title: "upnp-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to extract system information from the UPnP service."
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
usage: "nmap -sU -p 1900 --script=upnp-info <target>"
outputPreview:
  - "|  upnp-info:  System/1.0 UPnP/1.0 IGD/1.0"
  - "|_ Location: http://192.168.1.1:80/UPnP/IGD.xml"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/upnp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/upnp-info.html"
---

Attempts to extract system information from the UPnP service.
