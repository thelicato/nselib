---
title: "iec-identify"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Attempts to identify IEC 60870-5-104 ICS protocol."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=iec-identify <target>"
outputPreview:
  - "| iec-identify:"
  - "|   ASDU address: 105"
  - "|_  Information objects: 30"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/iec-identify.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/iec-identify.html"
---

Attempts to identify IEC 60870-5-104 ICS protocol.
After probing with a TESTFR (test frame) message, a STARTDT (start data
transfer) message is sent and general interrogation is used to gather the list
of information object addresses stored.
