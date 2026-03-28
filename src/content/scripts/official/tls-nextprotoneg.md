---
title: "tls-nextprotoneg"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "Enumerates a TLS server's supported protocols by using the next protocol\nnegotiation extension."
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
usage: "nmap --script=tls-nextprotoneg <targets>"
outputPreview:
  - "443/tcp open  https"
  - "| tls-nextprotoneg:"
  - "|   spdy/3"
  - "|   spdy/2"
  - "|_  http/1.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tls-nextprotoneg.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tls-nextprotoneg.html"
---

Enumerates a TLS server's supported protocols by using the next protocol
negotiation extension.
This works by adding the next protocol negotiation extension in the client
hello packet and parsing the returned server hello's NPN extension data.
