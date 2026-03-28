---
title: "smb-vuln-cve2009-3103"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
shortDescription: "Detects Microsoft Windows systems vulnerable to denial of service (CVE-2009-3103).\nThis script will crash the service if it is vulnerable."
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
usage: "nmap --script smb-vuln-cve2009-3103.nse -p445 <host>\nnmap -sU --script smb-vuln-cve2009-3103.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "| smb-vuln-cve2009-3103:"
  - "|   VULNERABLE:"
  - "|   SMBv2 exploit (CVE-2009-3103, Microsoft Security Advisory 975497)"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2009-3103"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-cve2009-3103.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-cve2009-3103.html"
---

Detects Microsoft Windows systems vulnerable to denial of service (CVE-2009-3103).
This script will crash the service if it is vulnerable.
The script performs a denial-of-service against the vulnerability disclosed in
CVE-2009-3103. This works against Windows Vista and some versions of Windows 7,
and causes a bluescreen if successful. The proof-of-concept code at
 http://seclists.org/fulldisclosure/2009/Sep/39 was used, with one small change.
This check was previously part of smb-check-vulns.
