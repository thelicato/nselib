---
title: "smb2-vuln-uptime"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Attempts to detect missing patches in Windows systems by checking the\nuptime returned during the SMB2 protocol negotiation."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -O --script smb2-vuln-uptime <target>"
outputPreview:
  - "| smb2-vuln-uptime:"
  - "|   VULNERABLE:"
  - "|   MS17-010: Security update for Windows SMB Server"
  - "|     State: LIKELY VULNERABLE"
  - "|     IDs:  ms:ms17-010  CVE:2017-0147"
  - "|       This system is missing a security update that resolves vulnerabilities in"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb2-vuln-uptime.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb2-vuln-uptime.html"
---

Attempts to detect missing patches in Windows systems by checking the
uptime returned during the SMB2 protocol negotiation.
SMB2 protocol negotiation response returns the system boot time
 pre-authentication. This information can be used to determine
 if a system is missing critical patches without triggering IDS/IPS/AVs.
Remember that a rebooted system may still be vulnerable. This check
only reveals unpatched systems based on the uptime, no additional probes are sent.
