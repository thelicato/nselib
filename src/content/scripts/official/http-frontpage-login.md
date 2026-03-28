---
title: "http-frontpage-login"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Checks whether target machines are vulnerable to anonymous Frontpage login."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap <target> -p 80 --script=http-frontpage-login"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-frontpage-login:"
  - "|   VULNERABLE:"
  - "|   Frontpage extension anonymous login"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-frontpage-login.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-frontpage-login.html"
---

Checks whether target machines are vulnerable to anonymous Frontpage login.
Older, default configurations of Frontpage extensions allow
remote user to login anonymously which may lead to server compromise.
