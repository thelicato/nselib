---
title: "http-hp-ilo-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Attempts to extract information from HP iLO boards including versions and addresses."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script hp-ilo-info -p 80 <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| ilo-info:"
  - "|   ServerType: ProLiant MicroServer Gen8"
  - "|   ProductID: XXXXXX-XXX"
  - "|   UUID: XXXXXXXXXXXXXXXX"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-hp-ilo-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-hp-ilo-info.html"
---

Attempts to extract information from HP iLO boards including versions and addresses.
HP iLO boards have an unauthenticated info disclosure at <ip>/xmldata?item=all.
It lists board informations such as server model, firmware version,
MAC addresses, IP addresses, etc. This script uses the slaxml library
to parse the iLO xml file and display the info.
