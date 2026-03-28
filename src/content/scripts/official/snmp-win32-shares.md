---
title: "snmp-win32-shares"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to enumerate Windows Shares through SNMP."
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
usage: "nmap -sU -p 161 --script=snmp-win32-shares <target>"
outputPreview:
  - "| snmp-win32-shares:"
  - "|   SYSVOL: C:\\WINDOWS\\sysvol\\sysvol"
  - "|   NETLOGON: C:\\WINDOWS\\sysvol\\sysvol\\inspectit-labb.local\\SCRIPTS"
  - "|_  Webapps: C:\\Program Files\\Apache Software Foundation\\Tomcat 5.5\\webapps\\ROOT"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-win32-shares.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-win32-shares.html"
---

Attempts to enumerate Windows Shares through SNMP.
