---
title: "779-http-asuswrt-xss"
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
usage: "nmap --script http-asuswrt-xss <ip>"
outputPreview:
  - "PORT   STATE  SERVICE"
  - "80/tcp open   http"
  - "|  http-asuswrt-xss"
  - "|    VULNERABLE:"
  - "|    XSS"
  - "|      State: VULNERABLE (Exploitable)"
author: "Rewanth Cool (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/779-http-asuswrt-xss.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
ASUSWRT is a wireless router operating system that powers many routers produced by ASUS.
Cross-site scripting (XSS) vulnerability in httpd in ASUS ASUSWRT
on RT-AC53 3.0.0.4.380.6038 devices allows remote attackersto inject arbitrary
JavaScript by requesting filenames longer than 50 characters.
Attackers can exploit these issues to execute arbitrary code in the context
of the user running the affected application or steal cookie-based authentication
credentials and gain unauthorized access.
Failed exploit attempts will likely cause denial-of-service conditions.
NOTE: This vulnerability is yet to be patched by the vendors.
