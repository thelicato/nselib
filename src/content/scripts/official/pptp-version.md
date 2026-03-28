---
title: "pptp-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Attempts to extract system information from the point-to-point tunneling protocol (PPTP) service."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "1723/tcp open  pptp    YAMAHA Corporation (Firmware: 32838)"
  - "Service Info: Host: RT57i"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pptp-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pptp-version.html"
---

Attempts to extract system information from the point-to-point tunneling protocol (PPTP) service.
