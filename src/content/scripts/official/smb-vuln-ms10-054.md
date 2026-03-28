---
title: "smb-vuln-ms10-054"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "dos"
shortDescription: "Tests whether target machines are vulnerable to the ms10-054 SMB remote memory\ncorruption vulnerability."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "dos"
  - "hostrule"
scriptTypes:
  - "hostrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-ms10-054.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-ms10-054.html"
---

Tests whether target machines are vulnerable to the ms10-054 SMB remote memory
corruption vulnerability.
The vulnerable machine will crash with BSOD.
The script requires at least READ access right to a share on a remote machine.
Either with guest credentials or with specified username/password.
