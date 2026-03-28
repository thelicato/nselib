---
title: "reverse-index"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "Creates a reverse index at the end of scan output showing which hosts run a\nparticular service. This is in addition to Nmap's normal output listing the\nservices on each host."
risk: safe
tags:
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script reverse-index <hosts/networks>"
outputPreview:
  - "Post-scan script results:"
  - "| reverse-index:"
  - "|   22/tcp: 192.168.0.60"
  - "|   23/tcp: 192.168.0.100"
  - "|   80/tcp: 192.168.0.70"
  - "|   445/tcp: 192.168.0.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/reverse-index.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/reverse-index.html"
---

Creates a reverse index at the end of scan output showing which hosts run a
particular service. This is in addition to Nmap's normal output listing the
services on each host.
