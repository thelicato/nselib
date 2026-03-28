---
title: "http-sitemap-dump"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "This script will crawl a web server and display a list of all the files found. This script is useful to determine all the possible file-targets/attack-surface when auditing web applications."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-sitemap-dump <host/ip>"
outputPreview:
  - "-"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-sitemap-dump.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
This script will crawl a web server and display a list of all the files found. This script is useful to determine all the possible file-targets/attack-surface when auditing web applications.
