---
title: "http-vuln-misfortune-cookie"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Detects the RomPager 4.07 Misfortune Cookie vulnerability by safely exploiting it."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap <target> -p 7547 --script=http-vuln-misfortune-cookie"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "7547/tcp open  unknown syn-ack"
  - "| http-vuln-misfortune-cookie:"
  - "|   VULNERABLE:"
  - "|   RomPager 4.07 Misfortune Cookie"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-misfortune-cookie.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-misfortune-cookie.html"
---

Detects the RomPager 4.07 Misfortune Cookie vulnerability by safely exploiting it.
