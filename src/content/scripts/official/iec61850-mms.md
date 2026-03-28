---
title: "iec61850-mms"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
  - "version"
shortDescription: "Queries a IEC 61850-8-1 MMS server. Sends Initate-Request, Identify-Request and Read-Request to LN0 and LPHD."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script iec61850-mms.nse -p 102 <target>"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/iec61850-mms.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/iec61850-mms.html"
---

Queries a IEC 61850-8-1 MMS server. Sends Initate-Request, Identify-Request and Read-Request to LN0 and LPHD.
Output contains following attributes:
