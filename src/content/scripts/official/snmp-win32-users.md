---
title: "snmp-win32-users"
source: official
category: "Default"
categories:
  - "default"
  - "auth"
  - "safe"
shortDescription: "Attempts to enumerate Windows user accounts through SNMP"
risk: safe
tags:
  - "default"
  - "auth"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 161 --script=snmp-win32-users <target>"
outputPreview:
  - "| snmp-win32-users:"
  - "|   Administrator"
  - "|   Guest"
  - "|   IUSR_EDUSRV011"
  - "|   IWAM_EDUSRV011"
  - "|   SUPPORT_388945a0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-win32-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-win32-users.html"
---

Attempts to enumerate Windows user accounts through SNMP
