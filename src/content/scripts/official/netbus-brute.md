---
title: "netbus-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against the Netbus backdoor (\"remote administration\") service."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 12345 --script netbus-brute <target>"
outputPreview:
  - "12345/tcp open  netbus"
  - "|_netbus-brute: password123"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/netbus-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/netbus-brute.html"
---

Performs brute force password auditing against the Netbus backdoor ("remote administration") service.
