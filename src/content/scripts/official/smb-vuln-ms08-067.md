---
title: "smb-vuln-ms08-067"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
shortDescription: "Detects Microsoft Windows systems vulnerable to the remote code execution vulnerability\nknown as MS08-067. This check is dangerous and it may crash systems."
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-vuln-ms08-067.nse -p445 <host>\nnmap -sU --script smb-vuln-ms08-067.nse -p U:137 <host>"
outputPreview:
  - "| smb-vuln-ms08-067:"
  - "|   VULNERABLE:"
  - "|   Microsoft Windows system vulnerable to remote code execution (MS08-067)"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2008-4250"
  - "|           The Server service in Microsoft Windows 2000 SP4, XP SP2 and SP3, Server 2003 SP1 and SP2,"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-ms08-067.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-ms08-067.html"
---

Detects Microsoft Windows systems vulnerable to the remote code execution vulnerability
known as MS08-067. This check is dangerous and it may crash systems.
On a fairly wide scan conducted by Brandon Enright, we determined
that on average, a vulnerable system is more likely to crash than to survive
the check. Out of 82 vulnerable systems, 52 crashed.
Please consider this before running the script.
This check was previously part of smb-check-vulns.nse.
