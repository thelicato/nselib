---
title: "smb-vuln-ms10-054"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "dos"
shortDescription: "Checks if target machines are vulnerable to the ms10-054 SMB remote memory\ncorruption vulnerability."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "dos"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap  -p 445 <target> --script=smb-vuln-ms10-054 --script-args unsafe"
outputPreview:
  - "Host script results:"
  - "| smb-vuln-ms10-054:"
  - "|   VULNERABLE:"
  - "|   SMB remote memory corruption vulnerability"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2010-2550"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/smb-vuln-ms10-054.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Checks if target machines are vulnerable to the ms10-054 SMB remote memory
corruption vulnerability.
The vulnerable machine will crash with BSOD.
The script requires at least READ access right to a share on a remote machine.
Either with guest credentials or with specified username/password.
