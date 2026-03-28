---
title: "http-vuln-cve2017-5638"
source: official
category: "Vuln"
categories:
  - "vuln"
shortDescription: "Detects whether the specified URL is vulnerable to the Apache Struts\nRemote Code Execution Vulnerability (CVE-2017-5638)."
risk: informational
tags:
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p <port> --script http-vuln-cve2017-5638 <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "80/tcp  open  http"
  - "| http-vuln-cve2017-5638:"
  - "|   VULNERABLE"
  - "|   Apache Struts Remote Code Execution Vulnerability"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2017-5638.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2017-5638.html"
---

Detects whether the specified URL is vulnerable to the Apache Struts
Remote Code Execution Vulnerability (CVE-2017-5638).
