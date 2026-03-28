---
title: "951-winrm-auth-methods"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Returns authentication methods a winrm server supports."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script winrm-auth-methods -p 5985 <target>"
outputPreview:
  - "5985/tcp open  wsman"
  - "| winrm-auth-methods:"
  - "|   Accepted Authentication Methods:"
  - "|     Negotiate"
  - "|     Basic"
  - "|     Kerberos"
author: "Evangelos Deirmentzoglou (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/951-winrm-auth-methods.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Returns authentication methods a winrm server supports.
