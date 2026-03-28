---
title: "clock-skew"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Analyzes the clock skew between the scanner and various services that report timestamps."
risk: safe
tags:
  - "default"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "Host script results:"
  - "|_clock-skew: mean: -13s, deviation: 12s, median: -6s"
  - "Post-scan script results:"
  - "| clock-skew:"
  - "|  -6s: Majority of systems scanned"
  - "|  3s:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/clock-skew.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/clock-skew.html"
---

Analyzes the clock skew between the scanner and various services that report timestamps.
At the end of the scan, it will show groups of systems that have similar median
clock skew among their services. This can be used to identify targets with
similar configurations, such as those that share a common time server.
You must run at least 1 of the following scripts to collect clock data:
*
