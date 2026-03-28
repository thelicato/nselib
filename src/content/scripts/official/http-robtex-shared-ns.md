---
title: "http-robtex-shared-ns"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Finds up to 100 domain names which use the same name server as the target by querying the Robtex service at http://www.robtex.com/dns/ ."
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
usage: "nmap --script http-robtex-shared-ns"
outputPreview:
  - "Host script results:"
  - "| http-robtex-shared-ns:"
  - "|   example.edu"
  - "|   example.net"
  - "|   example.edu"
  - "|_  example.net"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-robtex-shared-ns.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-robtex-shared-ns.html"
---

Finds up to 100 domain names which use the same name server as the target by querying the Robtex service at http://www.robtex.com/dns/ .
The target must be specified by DNS name, not IP address.
*TEMPORARILY DISABLED* due to changes in Robtex's API. See https://www.robtex.com/api/
