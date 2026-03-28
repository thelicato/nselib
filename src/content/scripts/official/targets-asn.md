---
title: "targets-asn"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Produces a list of IP prefixes for a given routing AS number (ASN)."
risk: safe
tags:
  - "discovery"
  - "external"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script targets-asn --script-args targets-asn.asn=32"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-asn:"
  - "|   32"
  - "|     128.12.0.0/16"
  - "|_    171.64.0.0/14"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-asn.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-asn.html"
---

Produces a list of IP prefixes for a given routing AS number (ASN).
This script uses a whois server database operated by the Shadowserver
Foundation. We thank them for granting us permission to use this in
Nmap.
Output is in CIDR notation.
http://www.shadowserver.org/wiki/pmwiki.php/Services/IP-BGP
