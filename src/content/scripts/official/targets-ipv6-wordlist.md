---
title: "targets-ipv6-wordlist"
source: official
category: "Discovery"
categories:
  - "discovery"
shortDescription: "Adds IPv6 addresses to the scan queue using a wordlist of hexadecimal \"words\"\nthat form addresses in a given subnet."
risk: informational
tags:
  - "discovery"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -6 -p 80 --script targets-ipv6-wordlist --script-args newtargets,targets-ipv6-subnet={2001:db8:c0ca::/64}"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-ipv6-wordlist:"
  - "|_  node count: 1254"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-ipv6-wordlist.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-ipv6-wordlist.html"
---

Adds IPv6 addresses to the scan queue using a wordlist of hexadecimal "words"
that form addresses in a given subnet.
