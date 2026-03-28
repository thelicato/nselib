---
title: "http-rompager-xss"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "URL redirection and reflected XSS vulnerability in Allegro RomPager Web server"
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "kost/nmap-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-rompager-xss <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-rompager-xss:"
  - "|   VULNERABLE:"
  - "|   URL redirection and reflected XSS vulnerability in Allegro RomPager Web server"
  - "|     State: VULNERABLE (Exploitable)"
author: "Vlatko Kosturjak <kost@linux.hr> (upstream: kost/nmap-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/kost/nmap-nse/blob/master/scripts/http-rompager-xss.nse"
---

Imported from the upstream repository [kost/nmap-nse](https://github.com/kost/nmap-nse).
URL redirection and reflected XSS vulnerability in Allegro RomPager Web server
