---
title: "http-vuln-cve2011-3192"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects a denial of service vulnerability in the way the Apache web server\nhandles requests for multiple overlapping/simple ranges of a page."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vuln-cve2011-3192.nse [--script-args http-vuln-cve2011-3192.hostname=nmap.scanme.org] -pT:80,443 <host>"
outputPreview:
  - "Host script results:"
  - "| http-vuln-cve2011-3192:"
  - "|   VULNERABLE:"
  - "|   Apache byterange filter DoS"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2011-3192  BID:49303"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2011-3192.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2011-3192.html"
---

Detects a denial of service vulnerability in the way the Apache web server
handles requests for multiple overlapping/simple ranges of a page.
