---
title: "asn-query"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Maps IP addresses to autonomous system (AS) numbers."
risk: safe
tags:
  - "discovery"
  - "external"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script asn-query [--script-args dns=<DNS server>] <target>"
outputPreview:
  - "Host script results:"
  - "|  asn-query:"
  - "|  BGP: 64.13.128.0/21 | Country: US"
  - "|    Origin AS: 10565 SVCOLO-AS - Silicon Valley Colocation, Inc."
  - "|      Peer AS: 3561 6461"
  - "|  BGP: 64.13.128.0/18 | Country: US"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/asn-query.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/asn-query.html"
---

Maps IP addresses to autonomous system (AS) numbers.
The script works by sending DNS TXT queries to a DNS server which in
turn queries a third-party service provided by Team Cymru
( https://www.team-cymru.org/Services/ip-to-asn.html ) using an in-addr.arpa
style zone set up especially for
use by Nmap. The responses to these queries contain both Origin and Peer
ASNs and their descriptions, displayed along with the BGP Prefix and
Country Code. The script caches results to reduce the number of queries
and should perform a single query for all scanned targets in a BGP
Prefix present in Team Cymru's database.
Be aware that any targets against which this script is run will be sent
to and potentially recorded by one or more DNS servers and Team Cymru.
In addition your IP address will be sent along with the ASN to a DNS
server (your default DNS server, or whichever one you specified with the
 dns script argument).
