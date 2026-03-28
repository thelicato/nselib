---
title: "sniffer-detect"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Checks if a target on a local Ethernet has its network card in promiscuous mode."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -sV --script=sniffer-detect <target>"
outputPreview:
  - "Host script results:"
  - "|_ sniffer-detect: Likely in promiscuous mode (tests: \"11111111\")"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sniffer-detect.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sniffer-detect.html"
---

Checks if a target on a local Ethernet has its network card in promiscuous mode.
The techniques used are described at
 http://www.securityfriday.com/promiscuous_detection_01.pdf .
