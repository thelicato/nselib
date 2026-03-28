---
title: "snmp-info"
source: official
category: "Default"
categories:
  - "default"
  - "version"
  - "safe"
shortDescription: "Extracts basic information from an SNMPv3 GET request. The same probe is used\nhere as in the service version detection scan."
risk: safe
tags:
  - "default"
  - "version"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "161/udp open  snmp    udp-response ttl 244   ciscoSystems SNMPv3 server (public)"
  - "| snmp-info:"
  - "|   enterprise: ciscoSystems"
  - "|   engineIDFormat: mac"
  - "|   engineIDData: 00:d4:8c:00:11:22"
  - "|   snmpEngineBoots: 6"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-info.html"
---

Extracts basic information from an SNMPv3 GET request. The same probe is used
here as in the service version detection scan.
