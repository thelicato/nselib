---
title: "http-adobe-coldfusion-apsa1301"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Attempts to exploit an authentication bypass vulnerability (apsa13-01) to retrieve the administrator's session cookie of Adobe Coldfusion servers."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-adobe-coldfusion-apsa1301 <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-adobe-coldfusion-apsa1301:"
  - "|_  admin_cookie: aW50ZXJhY3RpdmUNQUEyNTFGRDU2NzM1OEYxNkI3REUzRjNCMjJERTgxOTNBNzUxN0NEMA1jZmFkbWlu"
author: "Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-adobe-coldfusion-apsa1301.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to exploit an authentication bypass vulnerability (apsa13-01) to retrieve the administrator's session cookie of Adobe Coldfusion servers.
