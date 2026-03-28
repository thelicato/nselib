---
title: "http-open-proxy"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Checks if an HTTP proxy is open."
risk: safe
tags:
  - "default"
  - "discovery"
  - "external"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-open-proxy.nse \\\n     --script-args proxy.url=<url>,proxy.pattern=<pattern>"
outputPreview:
  - "Interesting ports on scanme.nmap.org (64.13.134.52):"
  - "PORT     STATE SERVICE"
  - "8080/tcp open  http-proxy"
  - "|  proxy-open-http: Potentially OPEN proxy."
  - "|_ Methods successfully tested: GET HEAD CONNECT"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-open-proxy.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-open-proxy.html"
---

Checks if an HTTP proxy is open.
The script attempts to connect to www.google.com through the proxy and
checks for a valid HTTP response code. Valid HTTP response codes are
200, 301, and 302. If the target is an open proxy, this script causes
the target to retrieve a web page from www.google.com.
