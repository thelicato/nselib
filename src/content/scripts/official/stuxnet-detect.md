---
title: "stuxnet-detect"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Detects whether a host is infected with the Stuxnet worm ( http://en.wikipedia.org/wiki/Stuxnet )."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script stuxnet-detect -p 445 <host>"
outputPreview:
  - "PORT    STATE SERVICE      REASON"
  - "445/tcp open  microsoft-ds syn-ack"
  - "Host script results:"
  - "|_stuxnet-detect: INFECTED (version 4c:04:00:00:01:00:00:00)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/stuxnet-detect.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/stuxnet-detect.html"
---

Detects whether a host is infected with the Stuxnet worm ( http://en.wikipedia.org/wiki/Stuxnet ).
An executable version of the Stuxnet infection will be downloaded if a format
for the filename is given on the command line.
