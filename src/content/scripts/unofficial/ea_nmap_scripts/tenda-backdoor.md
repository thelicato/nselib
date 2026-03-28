---
title: "tenda-backdoor"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Detects a firmware backdoor on some Tenda routers by connecting to a UDP port\n7329 and executing a command. By default, it executes /bin/ls and checks\nfor the expected output."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sU -p 7329 --script tenda-backdoor <target>"
outputPreview:
  - "PORT     STATE         SERVICE REASON"
  - "7329/udp open|filtered swx     no-response"
  - "| tenda-backdoor:"
  - "|   VULNERABLE:"
  - "|   Firmware backdoor in some models of Tenda routers allow for remote command execution"
  - "|     State: VULNERABLE"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/tenda-backdoor.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Detects a firmware backdoor on some Tenda routers by connecting to a UDP port
7329 and executing a command. By default, it executes /bin/ls and checks
for the expected output.
Some of the vulnerable routers are W302R and  W330R as well as re-branded models,
such as the Medialink MWN-WAPR150N. They all use the same �w302r_mfg� magic
packet string.
Other Tenda routers are possibly affected.
Discovered by Craig of /dev/ttyS0 (http://www.devttys0.com/).
Reference: http://www.devttys0.com/2013/10/from-china-with-love/
List of other possibly affected firmware versions:
http://ea.github.io/blog/2013/10/18/tenda-backdoor/
