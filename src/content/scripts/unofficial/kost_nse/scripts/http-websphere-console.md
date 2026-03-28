---
title: "http-websphere-console"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "default"
shortDescription: "This script identifies IBM Websphere consoles."
risk: informational
tags:
  - "discovery"
  - "default"
  - "kost/nmap-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-websphere-console <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8080/tcp open  http-proxy"
  - "| http-websphere-console:"
  - "|   consoles:"
  - "|_    WebSphere at /console/portal/0/Welcome"
  - "-"
author: "Vlatko Kosturjak <kost@linux.hr> (upstream: kost/nmap-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/kost/nmap-nse/blob/master/scripts/http-websphere-console.nse"
---

Imported from the upstream repository [kost/nmap-nse](https://github.com/kost/nmap-nse).
This script identifies IBM Websphere consoles.
