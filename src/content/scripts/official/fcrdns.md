---
title: "fcrdns"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Performs a Forward-confirmed Reverse DNS lookup and reports anomalous results."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -sn -Pn --script fcrdns <target>"
outputPreview:
  - "Host script results:"
  - "|_fcrdns: FAIL (12.19.29.17, 12.19.20.14, 23.10.13.25)"
  - "Host script results:"
  - "|_fcrdns: PASS (37.58.100.86-static.reverse.softlayer.com)"
  - "Host script results:"
  - "| fcrdns:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/fcrdns.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/fcrdns.html"
---

Performs a Forward-confirmed Reverse DNS lookup and reports anomalous results.
