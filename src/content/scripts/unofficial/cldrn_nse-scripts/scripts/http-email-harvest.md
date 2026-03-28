---
title: "http-email-harvest"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Spiders a web site and collects e-mail addresses."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-email-harvest <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-email-harvest:"
  - "| Spidering limited to: maxdepth=3; maxpagecount=20"
  - "|   root@examplec.com"
  - "|_  postmaster@example.com"
author: "Patrik Karlsson (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-email-harvest.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Spiders a web site and collects e-mail addresses.
