---
title: "targets-xml"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "Loads addresses from an Nmap XML output file for scanning."
risk: safe
tags:
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script targets-xml --script-args newtargets,iX=oldscan.xml"
outputPreview:
  - "Pre-scan script results:"
  - "|_targets-xml: Added 16 ipv4 addresses"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-xml.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-xml.html"
---

Loads addresses from an Nmap XML output file for scanning.
Address type (IPv4 or IPv6) is determined according to whether -6 is specified to nmap.
