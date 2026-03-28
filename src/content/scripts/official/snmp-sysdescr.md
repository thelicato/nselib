---
title: "snmp-sysdescr"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to extract system information from an SNMP service."
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
usage: "nmap -sU -p 161 --script snmp-sysdescr <target>"
outputPreview:
  - "|  snmp-sysdescr: HP ETHERNET MULTI-ENVIRONMENT,ROM A.25.80,JETDIRECT,JD117,EEPROM V.28.22,CIDATE 08/09/2006"
  - "|_   System uptime: 28 days, 17:18:59 (248153900 timeticks)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-sysdescr.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-sysdescr.html"
---

Attempts to extract system information from an SNMP service.
