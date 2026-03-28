---
title: "smb-vuln-regsvc-dos"
source: unofficial
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
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
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
author: "Ron Bowes, Jiayi Ye, Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/smb-vuln-regsvc-dos.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Checks if a Microsoft Windows 2000 system is vulnerable to a crash in regsvc caused by a null pointer
dereference. This check will crash the service if it is vulnerable and requires a guest account or
higher to work.
The vulnerability was discovered by Ron Bowes while working on <code>smb-enum-sessions</code> and
was reported to Microsoft (Case #MSRC8742).
