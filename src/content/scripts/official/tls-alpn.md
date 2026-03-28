---
title: "tls-alpn"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "Enumerates a TLS server's supported application-layer protocols using the ALPN protocol."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=tls-alpn <targets>"
outputPreview:
  - "443/tcp open  https"
  - "| tls-alpn:"
  - "|   h2"
  - "|   spdy/3"
  - "|_  http/1.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tls-alpn.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tls-alpn.html"
---

Enumerates a TLS server's supported application-layer protocols using the ALPN protocol.
Repeated queries are sent to determine which of the registered protocols are supported.
