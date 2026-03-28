---
title: "http-custom-title"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Shows the title of the default page of a web server.\nIf customtitle argument is give the script searches and only titles matching the provided argument.\nThe script also writes matched output if outputfile argument is provided."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "psc4re/nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "Nmap scan report for scanme.nmap.org (45.33.32.156)"
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "|_http-title: Go ahead and ScanMe!"
author: "Modified script by @psc4re for custom title search. Original script by Diman Todorov http-title.nse (upstream: psc4re/NSE-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/psc4re/NSE-scripts/blob/master/http-custom-title.nse"
---

Imported from the upstream repository [psc4re/NSE-scripts](https://github.com/psc4re/NSE-scripts).
Shows the title of the default page of a web server.
If customtitle argument is give the script searches and only titles matching the provided argument.
The script also writes matched output if outputfile argument is provided.
The script will follow up to 5 HTTP redirects, using the default rules in the
http library.
