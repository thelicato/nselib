---
title: "dns-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "discovery"
shortDescription: "Attempts to enumerate DNS hostnames by brute force guessing of common\nsubdomains. With the dns-brute.srv argument, dns-brute will also\ntry to enumerate common DNS SRV records."
risk: intrusive
tags:
  - "intrusive"
  - "discovery"
  - "prerule"
  - "hostrule"
scriptTypes:
  - "prerule"
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script dns-brute --script-args dns-brute.domain=foo.com,dns-brute.threads=6,dns-brute.hostlist=./hostfile.txt,newtargets -sS -p 80\nnmap --script dns-brute www.foo.com"
outputPreview:
  - "Pre-scan script results:"
  - "| dns-brute:"
  - "|   DNS Brute-force hostnames"
  - "|     www.foo.com - 127.0.0.1"
  - "|     mail.foo.com - 127.0.0.2"
  - "|     blog.foo.com - 127.0.1.3"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-brute.html"
---

Attempts to enumerate DNS hostnames by brute force guessing of common
subdomains. With the dns-brute.srv argument, dns-brute will also
try to enumerate common DNS SRV records.
Wildcard records are listed as "*A" and "*AAAA" for IPv4 and IPv6 respectively.
