---
title: "iscsi-info"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
shortDescription: "Collects and displays information from remote iSCSI targets."
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "3260/tcp open  iscsi"
  - "| iscsi-info:"
  - "|   iqn.2006-01.com.openfiler:tsn.c8c08cad469d"
  - "|     Address: 192.168.56.5:3260,1"
  - "|     Authentication: NOT required"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/iscsi-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/iscsi-info.html"
---

Collects and displays information from remote iSCSI targets.
