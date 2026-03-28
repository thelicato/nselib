---
title: "ipmi-cipher-zero"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "IPMI 2.0 Cipher Zero Authentication Bypass Scanner. This module identifies IPMI 2.0\n compatible systems that are vulnerable to an authentication bypass vulnerability\n through the use of cipher zero."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU --script ipmi-cipher-zero -p 623 <host>"
outputPreview:
  - "PORT      STATE         SERVICE REASON"
  - "623/udp open|filtered unknown no-response"
  - "| ipmi-cipher-zero:"
  - "|   VULNERABLE:"
  - "|   IPMI 2.0 RAKP Cipher Zero Authentication Bypass"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ipmi-cipher-zero.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ipmi-cipher-zero.html"
---

IPMI 2.0 Cipher Zero Authentication Bypass Scanner. This module identifies IPMI 2.0
 compatible systems that are vulnerable to an authentication bypass vulnerability
 through the use of cipher zero.
