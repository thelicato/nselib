---
title: "dns-ip6-arpa-scan"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "discovery"
shortDescription: "Performs a quick reverse DNS lookup of an IPv6 network using a technique\nwhich analyzes DNS server response codes to dramatically reduce the number of queries needed to enumerate large networks."
risk: intrusive
tags:
  - "intrusive"
  - "discovery"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script dns-ip6-arpa-scan --script-args='prefix=2001:0DB8::/48'"
outputPreview:
  - "Pre-scan script results:"
  - "| dns-ip6-arpa-scan:"
  - "| ip                                 ptr"
  - "| 2001:0DB8:0:0:0:0:0:2              resolver1.example.com"
  - "|_2001:0DB8:0:0:0:0:0:3              resolver2.example.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-ip6-arpa-scan.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-ip6-arpa-scan.html"
---

Performs a quick reverse DNS lookup of an IPv6 network using a technique
which analyzes DNS server response codes to dramatically reduce the number of queries needed to enumerate large networks.
The technique essentially works by adding an octet to a given IPv6 prefix
and resolving it. If the added octet is correct, the server will return
NOERROR, if not a NXDOMAIN result is received.
The technique is described in detail on Peter's blog:
 http://7bits.nl/blog/2012/03/26/finding-v6-hosts-by-efficiently-mapping-ip6-arpa
