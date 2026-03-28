---
title: "proxyshell"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Script by @psc4re for checking against Outlook Exchange Server ProxyShell Vulnerability CVE-2021-34473\nCredits: https://twitter.com/bad_packets/status/1426968952278708225 & https://github.com/dinosn/proxyshell for packet info"
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "psc4re/nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script proxyshell.nse -p443 <host>"
outputPreview:
  - "| proxyshell:"
  - "|_  Exchange ProxyShell: Vulnerable to ProxyShell Vulnerability CVE-2021-34473!"
  - "--------------------------------------------------------"
author: "psc4re (upstream: psc4re/NSE-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/psc4re/NSE-scripts/blob/master/proxyshell.nse"
---

Imported from the upstream repository [psc4re/NSE-scripts](https://github.com/psc4re/NSE-scripts).
Script by @psc4re for checking against Outlook Exchange Server ProxyShell Vulnerability CVE-2021-34473
Credits: https://twitter.com/bad_packets/status/1426968952278708225 & https://github.com/dinosn/proxyshell for packet info
