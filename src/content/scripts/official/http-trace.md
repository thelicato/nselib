---
title: "http-trace"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "discovery"
  - "safe"
shortDescription: "Sends an HTTP TRACE request and shows if the method TRACE is enabled. If debug\nis enabled, it returns the header fields that were modified in the response."
risk: safe
tags:
  - "vuln"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-trace.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-trace.html"
---

Sends an HTTP TRACE request and shows if the method TRACE is enabled. If debug
is enabled, it returns the header fields that were modified in the response.
