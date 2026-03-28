---
title: "http-trace"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "discovery"
  - "safe"
shortDescription: "Sends an HTTP TRACE request and shows if the method TRACE is enabled. If debug is enabled, it returns the header fields that were modified in the response."
risk: safe
tags:
  - "vuln"
  - "discovery"
  - "safe"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-trace -d <ip>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "| http-trace: TRACE is enabled"
  - "| Headers:"
  - "| Date: Tue, 14 Jun 2011 04:41:28 GMT"
  - "| Server: Apache"
  - "| Connection: close"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-trace.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Sends an HTTP TRACE request and shows if the method TRACE is enabled. If debug is enabled, it returns the header fields that were modified in the response.
