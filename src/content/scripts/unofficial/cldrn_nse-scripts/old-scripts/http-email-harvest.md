---
title: "http-email-harvest"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
shortDescription: "http-email-harvest returns a list of email accounts found in the body text of all URIs found in the web server."
risk: informational
tags:
  - "discovery"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-email-harvest <target>\nnmap -sV --script http-email-harvest --script-args http.useragent=Mozilla,httpspider.ignoreParams <target>"
outputPreview: []
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-email-harvest.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
http-email-harvest returns a list of email accounts found in the body text of all URIs found in the web server.
