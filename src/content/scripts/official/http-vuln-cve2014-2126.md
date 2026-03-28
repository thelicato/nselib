---
title: "http-vuln-cve2014-2126"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects whether the Cisco ASA appliance is vulnerable to the Cisco ASA ASDM\nPrivilege Escalation Vulnerability (CVE-2014-2126)."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script http-vuln-cve2014-2126 <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp open  https"
  - "| http-vuln-cve2014-2126:"
  - "|   VULNERABLE:"
  - "|   Cisco ASA ASDM Privilege Escalation Vulnerability"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2014-2126.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2014-2126.html"
---

Detects whether the Cisco ASA appliance is vulnerable to the Cisco ASA ASDM
Privilege Escalation Vulnerability (CVE-2014-2126).
