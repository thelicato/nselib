---
title: "snmp-netstat"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to query SNMP for a netstat like output. The script can be used to\nidentify and automatically add new targets to the scan by supplying the\nnewtargets script argument."
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
usage: "nmap -sU -p 161 --script=snmp-netstat <target>"
outputPreview:
  - "| snmp-netstat:"
  - "|   TCP  0.0.0.0:21           0.0.0.0:2256"
  - "|   TCP  0.0.0.0:80           0.0.0.0:8218"
  - "|   TCP  0.0.0.0:135          0.0.0.0:53285"
  - "|   TCP  0.0.0.0:389          0.0.0.0:38990"
  - "|   TCP  0.0.0.0:445          0.0.0.0:49158"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-netstat.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-netstat.html"
---

Attempts to query SNMP for a netstat like output. The script can be used to
identify and automatically add new targets to the scan by supplying the
newtargets script argument.
