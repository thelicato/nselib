---
title: "dns-zone-transfer"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "discovery"
shortDescription: "Requests a zone transfer (AXFR) from a DNS server."
risk: intrusive
tags:
  - "intrusive"
  - "discovery"
  - "prerule"
  - "portrule"
scriptTypes:
  - "prerule"
  - "portrule"
protocols: []
ports: []
usage: "nmap --script dns-zone-transfer.nse \\\n     --script-args dns-zone-transfer.domain=<domain>"
outputPreview:
  - "53/tcp   open     domain"
  - "|  dns-zone-transfer:"
  - "|  foo.com.            SOA     ns2.foo.com. piou.foo.com."
  - "|  foo.com.            TXT"
  - "|  foo.com.            NS      ns1.foo.com."
  - "|  foo.com.            NS      ns2.foo.com."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-zone-transfer.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-zone-transfer.html"
---

Requests a zone transfer (AXFR) from a DNS server.
The script sends an AXFR query to a DNS server. The domain to query is
determined by examining the name given on the command line, the DNS
server's hostname, or it can be specified with the
 dns-zone-transfer.domain script argument. If the query is
successful all domains and domain types are returned along with common
type specific data (SOA/MX/NS/PTR/A).
