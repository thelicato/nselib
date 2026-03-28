---
title: "http-vuln-cve2015-1635"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Checks for a remote code execution vulnerability (MS15-034) in Microsoft Windows systems (CVE2015-2015-1635)."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script vuln <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-cve2015-1635:"
  - "|   VULNERABLE:"
  - "|   Remote Code Execution in HTTP.sys (MS15-034)"
  - "|     State: VULNERABLE (Exploitable)"
author: "Kl0nEz, Paulino <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-vuln-cve2015-1635.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Checks for a remote code execution vulnerability (MS15-034) in Microsoft Windows systems (CVE2015-2015-1635).
The script sends a specially crafted HTTP request with no impact on the system to detect this vulnerability.
The affected versions are Windows 7, Windows Server 2008 R2, Windows 8, Windows Server 2012, Windows 8.1,
and Windows Server 2012 R2.
References:
* https://technet.microsoft.com/library/security/MS15-034
