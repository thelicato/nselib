---
title: "maxdb-info"
source: official
category: "Default"
categories:
  - "default"
  - "version"
  - "safe"
shortDescription: "Retrieves version and database information from a SAP Max DB database."
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
usage: "nmap -p 7210 --script maxdb-info <ip>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "7210/tcp open  maxdb   syn-ack"
  - "| maxdb-info:"
  - "|   Version: 7.8.02"
  - "|   Build: DBMServer 7.8.02   Build 021-121-242-175"
  - "|   OS: UNIX"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/maxdb-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/maxdb-info.html"
---

Retrieves version and database information from a SAP Max DB database.
