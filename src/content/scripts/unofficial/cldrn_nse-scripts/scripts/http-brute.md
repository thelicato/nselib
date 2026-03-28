---
title: "http-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against http basic authentication."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-brute -p 80 <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "80/tcp   open  http    syn-ack"
  - "| http-brute:"
  - "|   Accounts"
  - "|     Patrik Karlsson:secret => Valid credentials"
  - "|   Statistics"
author: "Patrik Karlsson (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-brute.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Performs brute force password auditing against http basic authentication.
