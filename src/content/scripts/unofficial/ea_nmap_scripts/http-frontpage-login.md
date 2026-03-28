---
title: "http-frontpage-login"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Check if target machines are vulnerable to anonymous Frontpage login."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "ea/nmap-scripts"
scriptTypes: []
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
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/http-frontpage-login.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Check if target machines are vulnerable to anonymous Frontpage login.
Older, default configurations of Frontpage extensions allow
remote user to login anonymously which may lead to server compromise.
