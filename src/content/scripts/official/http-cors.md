---
title: "http-cors"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Tests an http server for Cross-Origin Resource Sharing (CORS), a way\nfor domains to explicitly opt in to having certain methods invoked by\nanother domain."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 80 --script http-cors <target>"
outputPreview:
  - "80/tcp open"
  - "|_cors.nse: GET POST OPTIONS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-cors.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-cors.html"
---

Tests an http server for Cross-Origin Resource Sharing (CORS), a way
for domains to explicitly opt in to having certain methods invoked by
another domain.
The script works by setting the Access-Control-Request-Method header
field for certain enumerated methods in OPTIONS requests, and checking
the responses.
