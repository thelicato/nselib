---
title: "dns-blacklist"
source: official
category: "External"
categories:
  - "external"
  - "safe"
shortDescription: "Checks target IP addresses against multiple DNS anti-spam and open\nproxy blacklists and returns a list of services for which an IP has been flagged. Checks may be limited by service category (eg: SPAM,\nPROXY) or to a specific service name."
risk: safe
tags:
  - "external"
  - "safe"
  - "prerule"
  - "hostrule"
scriptTypes:
  - "prerule"
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script dns-blacklist --script-args='dns-blacklist.ip=<ip>'\nor\nnmap -sn <ip> --script dns-blacklist"
outputPreview:
  - "Pre-scan script results:"
  - "| dns-blacklist:"
  - "| 1.2.3.4"
  - "|   PROXY"
  - "|     dnsbl.tornevall.org - PROXY"
  - "|       IP marked as \"abusive host\"."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-blacklist.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-blacklist.html"
---

Checks target IP addresses against multiple DNS anti-spam and open
proxy blacklists and returns a list of services for which an IP has been flagged. Checks may be limited by service category (eg: SPAM,
PROXY) or to a specific service name.
