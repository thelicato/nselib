---
title: "whois-domain"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Attempts to retrieve information about the domain name of the target"
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
usage: "nmap --script whois-domain.nse <target>\n\nThis script starts by querying the whois.iana.org (which is the root of the\nwhois servers). Using some patterns the script can determine if the response\nrepresents a referral to a record hosted elsewhere. If that's the case it will\nquery that referral. The script keeps repeating this until the response don't\nmatch with any of the patterns, meaning that there are no other referrals and\nprints the output."
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| whois-domain:"
  - "| whois3: Record found at whois.arin.net"
  - "| netrange: 199.19.112.0 - 199.19.119.255"
  - "| netname: WEBRULON-NETWORK"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/whois-domain.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/whois-domain.html"
---

Attempts to retrieve information about the domain name of the target
