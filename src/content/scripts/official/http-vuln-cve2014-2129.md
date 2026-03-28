---
title: "http-vuln-cve2014-2129"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects whether the Cisco ASA appliance is vulnerable to the Cisco ASA SIP\nDenial of Service Vulnerability (CVE-2014-2129)."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script http-vuln-cve2014-2129 <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp open  https"
  - "| http-vuln-cve2014-2129:"
  - "|   VULNERABLE:"
  - "|   Cisco ASA SIP Denial of Service Vulnerability"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2014-2129.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2014-2129.html"
---

Detects whether the Cisco ASA appliance is vulnerable to the Cisco ASA SIP
Denial of Service Vulnerability (CVE-2014-2129).
