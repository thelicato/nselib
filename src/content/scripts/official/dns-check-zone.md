---
title: "dns-check-zone"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Checks DNS zone configuration against best practices, including RFC 1912.\nThe configuration checks are divided into categories which each have a number\nof different tests."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -sn -Pn ns1.example.com --script dns-check-zone --script-args='dns-check-zone.domain=example.com'"
outputPreview:
  - "| dns-check-zone:"
  - "| DNS check results for domain: example.com"
  - "|   SOA"
  - "|     PASS - SOA REFRESH"
  - "|       SOA REFRESH was within recommended range (7200s)"
  - "|     PASS - SOA RETRY"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-check-zone.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-check-zone.html"
---

Checks DNS zone configuration against best practices, including RFC 1912.
The configuration checks are divided into categories which each have a number
of different tests.
