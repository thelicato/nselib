---
title: "1994-http-draytek-rce"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects Drayteks devices vulnerable to CVE-2020-8515\nThis script uses a safe check to confirm the vulnerability\nThen dumps the device's /etc/passwd  file\nReferences:\n* https://www.draytek.com/about/security-advisory/vigor3900-/-vigor2960-/-vigor300b-router-web-management-page-vulnerability-(cve-2020-8515)/,\n* https://blog.netlab.360.com/two-zero-days-are-targeting-draytek-broadband-cpe-devices/,\n* https://github.com/imjdl/CVE-2020-8515-PoC"
risk: safe
tags:
  - "vuln"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p <port> --script http-draytek-rce <ip>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "80/tcp  open  http"
  - "| http-draytek-rce:"
  - "|   VULNERABLE:"
  - "|   Draytek PreAuth RCE (CVE-2020-8515)"
  - "|     State: VULNERABLE (Exploitable)"
author: "truerand0m (twitter.com/truerand0m) (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1994-http-draytek-rce.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Detects Drayteks devices vulnerable to CVE-2020-8515
This script uses a safe check to confirm the vulnerability
Then dumps the device's /etc/passwd  file
References:
* https://www.draytek.com/about/security-advisory/vigor3900-/-vigor2960-/-vigor300b-router-web-management-page-vulnerability-(cve-2020-8515)/,
* https://blog.netlab.360.com/two-zero-days-are-targeting-draytek-broadband-cpe-devices/,
* https://github.com/imjdl/CVE-2020-8515-PoC
