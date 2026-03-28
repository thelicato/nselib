---
title: "smb-vuln-ms17-010"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Attempts to detect if a Microsoft SMBv1 server is vulnerable to a remote code\n execution vulnerability (ms17-010, a.k.a. EternalBlue).\n The vulnerability is actively exploited by WannaCry and Petya ransomware and other malware."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
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
author: "Paulino Calderon <paulino()calderonpale.com> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/smb-vuln-ms17-010.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to detect if a Microsoft SMBv1 server is vulnerable to a remote code
 execution vulnerability (ms17-010, a.k.a. EternalBlue).
 The vulnerability is actively exploited by WannaCry and Petya ransomware and other malware.
The script connects to the $IPC tree, executes a transaction on FID 0 and
 checks if the error "STATUS_INSUFF_SERVER_RESOURCES" is returned to
 determine if the target is not patched against ms17-010. Additionally it checks
 for known error codes returned by patched systems.
Tested on Windows XP, 2003, 7, 8, 8.1, 10, 2008, 2012 and 2016.
References:
* https://technet.microsoft.com/en-us/library/security/ms17-010.aspx
* https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/
* https://msdn.microsoft.com/en-us/library/ee441489.aspx
* https://github.com/rapid7/metasploit-framework/blob/master/modules/auxiliary/scanner/smb/smb_ms17_010.rb
* https://github.com/cldrn/nmap-nse-scripts/wiki/Notes-about-smb-vuln-ms17-010
