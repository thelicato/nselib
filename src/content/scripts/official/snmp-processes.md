---
title: "snmp-processes"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to enumerate running processes through SNMP."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 161 --script=snmp-processes <target>"
outputPreview:
  - "| snmp-processes:"
  - "|   1:"
  - "|     Name: System Idle Process"
  - "|   4:"
  - "|     Name: System"
  - "|   256:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-processes.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-processes.html"
---

Attempts to enumerate running processes through SNMP.
