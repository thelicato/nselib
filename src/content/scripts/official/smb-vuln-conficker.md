---
title: "smb-vuln-conficker"
source: official
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
  - "hostrule"
scriptTypes:
  - "hostrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-conficker.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-conficker.html"
---

Detects Microsoft Windows systems infected by the Conficker worm. This check is dangerous and
it may crash systems.
Based loosely on the Simple Conficker Scanner, found here:
-- http://iv.cs.uni-bonn.de/wg/cs/applications/containing-conficker/
This check was previously part of smb-check-vulns.
