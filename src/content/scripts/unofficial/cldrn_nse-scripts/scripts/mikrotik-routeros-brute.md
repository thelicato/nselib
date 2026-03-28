---
title: "mikrotik-routeros-brute"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "brute"
shortDescription: "Performs brute force password auditing against Mikrotik RouterOS devices with the API RouterOS interface enabled."
risk: intrusive
tags:
  - "discovery"
  - "brute"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p8728 --script mikrotik-routeros-brute <target>"
outputPreview: []
author: "Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/mikrotik-routeros-brute.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Performs brute force password auditing against Mikrotik RouterOS devices with the API RouterOS interface enabled.
Additional information:
* http://wiki.mikrotik.com/wiki/API
* http://wiki.mikrotik.com/wiki/API_in_C
* https://github.com/mkbrutusproject/MKBRUTUS
