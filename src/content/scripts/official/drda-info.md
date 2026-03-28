---
title: "drda-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "version"
shortDescription: "Attempts to extract information from database servers supporting the DRDA\nprotocol. The script sends a DRDA EXCSAT (exchange server attributes)\ncommand packet and parses the response."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT      STATE SERVICE"
  - "50000/tcp open  drda"
  - "|  drda-info: DB2 Version: 8.02.9"
  - "|  Server Platform: QDB2/SUN"
  - "|  Instance Name:   db2inst1"
  - "|_ External Name:   db2inst1db2agent00002B430"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/drda-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/drda-info.html"
---

Attempts to extract information from database servers supporting the DRDA
protocol. The script sends a DRDA EXCSAT (exchange server attributes)
command packet and parses the response.
