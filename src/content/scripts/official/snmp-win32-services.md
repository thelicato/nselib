---
title: "snmp-win32-services"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to enumerate Windows services through SNMP."
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
usage: "nmap -sU -p 161 --script=snmp-win32-services <target>"
outputPreview:
  - "| snmp-win32-services:"
  - "|   Apache Tomcat"
  - "|   Application Experience Lookup Service"
  - "|   Application Layer Gateway Service"
  - "|   Automatic Updates"
  - "|   COM+ Event System"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-win32-services.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-win32-services.html"
---

Attempts to enumerate Windows services through SNMP.
