---
title: "dns-client-subnet-scan"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Performs a domain lookup using the edns-client-subnet option which\nallows clients to specify the subnet that queries supposedly originate\nfrom. The script uses this option to supply a number of\ngeographically distributed locations in an attempt to enumerate as\nmany different address records as possible. The script also supports\nrequests using a given subnet."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "prerule"
  - "portrule"
scriptTypes:
  - "prerule"
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 53 --script dns-client-subnet-scan  --script-args \\\n    'dns-client-subnet-scan.domain=www.example.com, \\\n    dns-client-subnet-scan.address=192.168.0.1 \\\n    [,dns-client-subnet-scan.nameserver=8.8.8.8] \\\n    [,dns-client-subnet-scan.mask=24]' <target>\n  nmap --script dns-client-subnet-scan --script-args \\\n    'dns-client-subnet-scan.domain=www.example.com, \\\n    dns-client-subnet-scan.address=192.168.0.1 \\\n    dns-client-subnet-scan.nameserver=8.8.8.8, \\\n    [,dns-client-subnet-scan.mask=24]'"
outputPreview:
  - "53/udp open  domain  udp-response"
  - "| dns-client-subnet-scan:"
  - "| www.google.com"
  - "|   1.2.3.4"
  - "|   5.6.7.8"
  - "|   9.10.11.12"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-client-subnet-scan.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-client-subnet-scan.html"
---

Performs a domain lookup using the edns-client-subnet option which
allows clients to specify the subnet that queries supposedly originate
from. The script uses this option to supply a number of
geographically distributed locations in an attempt to enumerate as
many different address records as possible. The script also supports
requests using a given subnet.
