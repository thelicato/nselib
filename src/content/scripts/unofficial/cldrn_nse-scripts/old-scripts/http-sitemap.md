---
title: "http-sitemap"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
shortDescription: "Returns a list of all web pages and files found in the web server."
risk: informational
tags:
  - "discovery"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-sitemap --script-args http.useragent=Mozilla,httpspider.ignoreParams <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http"
  - "| http-sitemap: URIs found:"
  - "|_http://scanme.nmap.org/"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-sitemap.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Returns a list of all web pages and files found in the web server.
