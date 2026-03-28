---
title: "hostmap-robtex"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Discovers hostnames that resolve to the target's IP address by querying the online Robtex service at http://ip.robtex.com/ ."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
  - "prerule"
  - "hostrule"
scriptTypes:
  - "prerule"
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script hostmap-robtex -sn -Pn scanme.nmap.org"
outputPreview:
  - "| hostmap-robtex:"
  - "|   hosts:"
  - "|_    scanme.nmap.org"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hostmap-robtex.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hostmap-robtex.html"
---

Discovers hostnames that resolve to the target's IP address by querying the online Robtex service at http://ip.robtex.com/ .
*TEMPORARILY DISABLED* due to changes in Robtex's API. See https://www.robtex.com/api/
