---
title: "smb-vuln-ms17-010"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Attempts to detect if a Microsoft SMBv1 server is vulnerable to a remote code\n execution vulnerability (ms17-010, a.k.a. EternalBlue).\n The vulnerability is actively exploited by WannaCry and Petya ransomware and other malware."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p445 --script smb-vuln-ms17-010 <target>"
outputPreview:
  - "Host script results:"
  - "| smb-vuln-ms17-010:"
  - "|   VULNERABLE:"
  - "|   Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2017-0143"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-ms17-010.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-ms17-010.html"
---

Attempts to detect if a Microsoft SMBv1 server is vulnerable to a remote code
 execution vulnerability (ms17-010, a.k.a. EternalBlue).
 The vulnerability is actively exploited by WannaCry and Petya ransomware and other malware.
The script connects to the $IPC tree, executes a transaction on FID 0 and
 checks if the error "STATUS_INSUFF_SERVER_RESOURCES" is returned to
 determine if the target is not patched against ms17-010. Additionally it checks
 for known error codes returned by patched systems.
Tested on Windows XP, 2003, 7, 8, 8.1, 10, 2008, 2012 and 2016.
