---
title: "hddtemp-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Reads hard disk information (such as brand, model, and sometimes temperature) from a listening hddtemp service."
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
usage: "nmap -p 7634 -sV -sC <target>"
outputPreview:
  - "7634/tcp open  hddtemp"
  - "| hddtemp-info:"
  - "|_  /dev/sda: WDC WD2500JS-60MHB1: 38 C"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hddtemp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hddtemp-info.html"
---

Reads hard disk information (such as brand, model, and sometimes temperature) from a listening hddtemp service.
