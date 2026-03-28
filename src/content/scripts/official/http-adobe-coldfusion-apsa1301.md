---
title: "http-adobe-coldfusion-apsa1301"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Attempts to exploit an authentication bypass vulnerability in Adobe Coldfusion\nservers to retrieve a valid administrator's session cookie."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-adobe-coldfusion-apsa1301 <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-adobe-coldfusion-apsa1301:"
  - "|_  admin_cookie: aW50ZXJhY3RpdmUNQUEyNTFGRDU2NzM1OEYxNkI3REUzRjNCMjJERTgxOTNBNzUxN0NEMA1jZmFkbWlu"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-adobe-coldfusion-apsa1301.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-adobe-coldfusion-apsa1301.html"
---

Attempts to exploit an authentication bypass vulnerability in Adobe Coldfusion
servers to retrieve a valid administrator's session cookie.
