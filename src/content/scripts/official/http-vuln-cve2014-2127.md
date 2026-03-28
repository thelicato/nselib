---
title: "http-vuln-cve2014-2127"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects whether the Cisco ASA appliance is vulnerable to the Cisco ASA SSL VPN\nPrivilege Escalation Vulnerability (CVE-2014-2127)."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script http-vuln-cve2014-2127 <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp open  https"
  - "| http-vuln-cve2014-2127:"
  - "|   VULNERABLE:"
  - "|   Cisco ASA SSL VPN Privilege Escalation Vulnerability"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2014-2127.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2014-2127.html"
---

Detects whether the Cisco ASA appliance is vulnerable to the Cisco ASA SSL VPN
Privilege Escalation Vulnerability (CVE-2014-2127).
