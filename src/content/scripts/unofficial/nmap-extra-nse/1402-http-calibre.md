---
title: "1402-http-calibre"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Checks for presence of Calibre e-book web server. It will check if Calibre requires authentication and will attempt to enumerate how many books are available."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-calibre.nse <ip>"
outputPreview:
  - "80/tcp open  http    syn-ack ttl 47"
  - "| http-calibre:"
  - "|   version:"
  - "|     calibre 3.21.0"
  - "|   authentication:"
  - "|     false"
author: "Chris Bonk (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1402-http-calibre.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Checks for presence of Calibre e-book web server. It will check if Calibre requires authentication and will attempt to enumerate how many books are available.
References: https://calibre-ebook.com/
