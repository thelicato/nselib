---
title: "tor-consensus-checker"
source: official
category: "External"
categories:
  - "external"
  - "safe"
shortDescription: "Checks if a target is a known Tor node."
risk: safe
tags:
  - "external"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script=tor-consensus-checker <host>"
outputPreview:
  - "Host script results:"
  - "| tor-consensus-checker:"
  - "|_  127.0.0.1 is a Tor node"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tor-consensus-checker.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tor-consensus-checker.html"
---

Checks if a target is a known Tor node.
The script works by querying the Tor directory authorities. Initially,
the script stores all IPs of Tor nodes in a lookup table to reduce the
number of requests and make lookups quicker.
