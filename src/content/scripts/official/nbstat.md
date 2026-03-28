---
title: "nbstat"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to retrieve the target's NetBIOS names and MAC address."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "sudo nmap -sU --script nbstat.nse -p137 <host>"
outputPreview:
  - "Host script results:"
  - "|_ nbstat: NetBIOS name: WINDOWS2003, NetBIOS user: <unknown>, NetBIOS MAC: 00:0c:29:c6:da:f5 (VMware)"
  - "Host script results:"
  - "|  nbstat: NetBIOS name: WINDOWS2003, NetBIOS user: <unknown>, NetBIOS MAC: 00:0c:29:c6:da:f5 (VMware)"
  - "|  Names:"
  - "|    WINDOWS2003<00>      Flags: <unique><active>"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nbstat.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nbstat.html"
---

Attempts to retrieve the target's NetBIOS names and MAC address.
By default, the script displays the name of the computer and the logged-in
user; if the verbosity is turned up, it displays all names the system thinks it
owns.
