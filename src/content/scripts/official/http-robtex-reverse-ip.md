---
title: "http-robtex-reverse-ip"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Obtains up to 100 forward DNS names for a target IP address by querying the Robtex service ( https://www.robtex.com/ip-lookup/ )."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script http-robtex-reverse-ip --script-args http-robtex-reverse-ip.host='<ip>'"
outputPreview:
  - "Pre-scan script results:"
  - "| http-robtex-reverse-ip:"
  - "|   *.insecure.org"
  - "|   *.nmap.com"
  - "|   *.nmap.org"
  - "|   *.seclists.org"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-robtex-reverse-ip.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-robtex-reverse-ip.html"
---

Obtains up to 100 forward DNS names for a target IP address by querying the Robtex service ( https://www.robtex.com/ip-lookup/ ).
*TEMPORARILY DISABLED* due to changes in Robtex's API. See https://www.robtex.com/api/
