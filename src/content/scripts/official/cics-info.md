---
title: "cics-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Using the CICS transaction CEMT, this script attempts to gather information\nabout the current CICS transaction server region. It gathers OS information,\nDatasets (files), transactions and user ids. Based on CICSpwn script by\nAyoub ELAASSAL."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=cics-info -p 23 <targets>\n\nnmap --script=cics-info --script-args cics-info.commands='logon applid(coolcics)',\ncics-info.user=test,cics-info.pass=test,cics-info.cemt='ZEMT',\ncics-info.trans=CICA -p 23 <targets>"
outputPreview:
  - "PORT   STATE SERVICE VERSION"
  - "23/tcp open  tn3270  IBM Telnet TN3270 (TN3270E)"
  - "| cics-info:"
  - "|   Security: Disabled"
  - "|   System:"
  - "|     z/OS Version: 02.01.00"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cics-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cics-info.html"
---

Using the CICS transaction CEMT, this script attempts to gather information
about the current CICS transaction server region. It gathers OS information,
Datasets (files), transactions and user ids. Based on CICSpwn script by
Ayoub ELAASSAL.
