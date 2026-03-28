---
title: "cups-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Lists printers managed by the CUPS printing service."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 631 <ip> --script cups-info"
outputPreview:
  - "PORT    STATE SERVICE"
  - "631/tcp open  ipp"
  - "| cups-info:"
  - "|   Generic-PostScript-Printer"
  - "|     DNS-SD Name: Lexmark S300-S400 Series @ ubu1110"
  - "|     Location:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cups-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cups-info.html"
---

Lists printers managed by the CUPS printing service.
