---
title: "snmp-ios-config"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Attempts to downloads Cisco router IOS configuration files using SNMP RW (v1) and display or save them."
risk: intrusive
tags:
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 161 --script snmp-ios-config --script-args creds.snmp=:<community> <target>"
outputPreview:
  - "| snmp-ios-config:"
  - "| !"
  - "| version 12.3"
  - "| service timestamps debug datetime msec"
  - "| service timestamps log datetime msec"
  - "| no service password-encryption"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-ios-config.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-ios-config.html"
---

Attempts to downloads Cisco router IOS configuration files using SNMP RW (v1) and display or save them.
