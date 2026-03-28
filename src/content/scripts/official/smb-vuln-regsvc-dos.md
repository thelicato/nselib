---
title: "smb-vuln-regsvc-dos"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
shortDescription: "Checks if a Microsoft Windows 2000 system is vulnerable to a crash in regsvc caused by a null pointer\ndereference. This check will crash the service if it is vulnerable and requires a guest account or\nhigher to work."
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
usage: "nmap --script smb-vuln-regsvc-dos.nse -p445 <host>\nnmap -sU --script smb-vuln-regsvc-dos.nse -p U:137,T:139 <host>"
outputPreview:
  - "| smb-vuln-regsvc-dos:"
  - "|   VULNERABLE:"
  - "|   Service regsvc in Microsoft Windows systems vulnerable to denial of service"
  - "|     State: VULNERABLE"
  - "|       The service regsvc in Microsoft Windows 2000 systems is vulnerable to denial of service caused by a null deference"
  - "|       pointer. This script will crash the service if it is vulnerable. This vulnerability was discovered by Ron Bowes"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-regsvc-dos.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-regsvc-dos.html"
---

Checks if a Microsoft Windows 2000 system is vulnerable to a crash in regsvc caused by a null pointer
dereference. This check will crash the service if it is vulnerable and requires a guest account or
higher to work.
The vulnerability was discovered by Ron Bowes while working on smb-enum-sessions and
was reported to Microsoft (Case #MSRC8742).
This check was previously part of smb-check-vulns.
