---
title: "snmp-win32-software"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to enumerate installed software through SNMP."
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
usage: "nmap -sU -p 161 --script=snmp-win32-software <target>"
outputPreview:
  - "| snmp-win32-software:"
  - "|   Apache Tomcat 5.5 (remove only); 2007-09-15T15:13:18"
  - "|   Microsoft Internationalized Domain Names Mitigation APIs; 2007-09-15T15:13:18"
  - "|   Security Update for Windows Media Player (KB911564); 2007-09-15T15:13:18"
  - "|   Security Update for Windows Server 2003 (KB924667-v2); 2007-09-15T15:13:18"
  - "|   Security Update for Windows Media Player 6.4 (KB925398); 2007-09-15T15:13:18"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-win32-software.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-win32-software.html"
---

Attempts to enumerate installed software through SNMP.
