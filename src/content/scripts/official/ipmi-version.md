---
title: "ipmi-version"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Performs IPMI Information Discovery through Channel Auth probes."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU --script ipmi-version -p 623 <host>"
outputPreview:
  - "PORT     STATE SERVICE  REASON"
  - "623/udp  open|filtered  unknown"
  - "| ipmi-version:"
  - "|   Version: IPMI-2.0"
  - "|   UserAuth: password, md5, md2"
  - "|   PassAuth: null_user"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ipmi-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ipmi-version.html"
---

Performs IPMI Information Discovery through Channel Auth probes.
