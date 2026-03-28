---
title: "smb-vuln-conficker"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
shortDescription: "Detects Microsoft Windows systems infected by the Conficker worm. This check is dangerous and\nit may crash systems."
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script smb-vuln-conficker.nse -p445 <host>\nnmap -sU --script smb-vuln-conficker.nse -p T:139 <host>"
outputPreview:
  - "| smb-vuln-conficker:"
  - "|   VULNERABLE:"
  - "|   Microsoft Windows system infected by Conficker"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:2008-4250"
  - "|       This system shows signs of being infected by a variant of the worm Conficker."
author: "Ron Bowes, Jiayi Ye, Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/smb-vuln-conficker.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Detects Microsoft Windows systems infected by the Conficker worm. This check is dangerous and
it may crash systems.
Based loosely on the Simple Conficker Scanner, found here:
-- http://iv.cs.uni-bonn.de/wg/cs/applications/containing-conficker/
This check was previously part of smb-check-vulns.
