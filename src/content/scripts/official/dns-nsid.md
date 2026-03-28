---
title: "dns-nsid"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "default"
  - "safe"
shortDescription: "Retrieves information from a DNS nameserver by requesting\nits nameserver ID (nsid) and asking for its id.server and\nversion.bind values. This script performs the same queries as the following\ntwo dig commands:\n - dig CH TXT bind.version @target\n - dig +nsid CH TXT id.server @target"
risk: safe
tags:
  - "discovery"
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sSU -p 53 --script dns-nsid <target>"
outputPreview:
  - "53/udp open  domain  udp-response"
  - "| dns-nsid:"
  - "|   NSID dns.example.com (646E732E6578616D706C652E636F6D)"
  - "|   id.server: dns.example.com"
  - "|_  bind.version: 9.7.3-P3"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-nsid.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-nsid.html"
---

Retrieves information from a DNS nameserver by requesting
its nameserver ID (nsid) and asking for its id.server and
version.bind values. This script performs the same queries as the following
two dig commands:
 - dig CH TXT bind.version @target
 - dig +nsid CH TXT id.server @target
References:
[1] http://www.ietf.org/rfc/rfc5001.txt
[2] http://www.ietf.org/rfc/rfc4892.txt
