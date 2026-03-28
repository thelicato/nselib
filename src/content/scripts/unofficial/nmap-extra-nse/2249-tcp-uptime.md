---
title: "2249-tcp-uptime"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieve system boot-time via TCP-options.\nThis information would be used for detecting NAT, balancing or other information."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script tcp-uptime.nse -p <port> <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "25/tcp open  smtp"
  - "| tcp-uptime:"
  - "|_  uptime: 21.12.2012 13:37:00"
author: "Andrey Zhukov from USSC (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/2249-tcp-uptime.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Retrieve system boot-time via TCP-options.
This information would be used for detecting NAT, balancing or other information.
