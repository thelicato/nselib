---
title: "http-vuln-cve2015-1635"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Checks for a remote code execution vulnerability (MS15-034) in Microsoft Windows systems (CVE2015-2015-1635)."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2015-1635.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2015-1635.html"
---

Checks for a remote code execution vulnerability (MS15-034) in Microsoft Windows systems (CVE2015-2015-1635).
The script sends a specially crafted HTTP request with no impact on the system to detect this vulnerability.
The affected versions are Windows 7, Windows Server 2008 R2, Windows 8, Windows Server 2012, Windows 8.1,
and Windows Server 2012 R2.
