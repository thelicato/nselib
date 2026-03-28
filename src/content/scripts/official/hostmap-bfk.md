---
title: "hostmap-bfk"
source: official
category: "External"
categories:
  - "external"
  - "discovery"
shortDescription: "Discovers hostnames that resolve to the target's IP address by querying the online database at http://www.bfk.de/bfk_dnslogger.html ."
risk: informational
tags:
  - "external"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script hostmap-bfk --script-args hostmap-bfk.prefix=hostmap- <targets>"
outputPreview:
  - "Host script results:"
  - "| hostmap-bfk:"
  - "|   hosts:"
  - "|     insecure.org"
  - "|     173.255.243.189"
  - "|     images.insecure.org"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hostmap-bfk.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hostmap-bfk.html"
---

Discovers hostnames that resolve to the target's IP address by querying the online database at http://www.bfk.de/bfk_dnslogger.html .
The script is in the "external" category because it sends target IPs to a third party in order to query their database.
This script was formerly (until April 2012) known as hostmap.nse.
