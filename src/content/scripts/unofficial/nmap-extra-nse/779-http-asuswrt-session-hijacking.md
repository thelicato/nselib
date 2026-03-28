---
title: "779-http-asuswrt-session-hijacking"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "dos"
shortDescription: "ASUSWRT is a wireless router operating system that powers many routers produced by ASUS."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "dos"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-asuswrt-session-hijacking <ip>"
outputPreview:
  - "PORT   STATE  SERVICE"
  - "80/tcp open   http"
  - "|  http-asuswrt-session-hijacking"
  - "|    VULNERABLE:"
  - "|    XSS"
  - "|      State: VULNERABLE (Exploitable)"
author: "Rewanth Cool (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/779-http-asuswrt-session-hijacking.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
ASUSWRT is a wireless router operating system that powers many routers produced by ASUS.
Session hijack vulnerability in httpd in ASUS ASUSWRT on RT-AC53 3.0.0.4.380.6038 devices
allows remote attackers to steal any active admin session by sending cgi_logout
and asusrouter-Windows-IFTTT-1.0 in certain HTTP headers.
If an attacker sets his cookie value to cgi_logout and puts
asusrouter-Windows-IFTTT-1.0 into his User-Agent header he will be treated
as signed-in if any other administrator session is active.
NOTE: This vulnerability is yet to be patched by the vendors.
