---
title: "http-auth-finder"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Spiders a web site to find web pages requiring form-based or HTTP-based authentication. The results are returned in a table with each url and the\ndetected method."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 80 --script http-auth-finder <ip>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-auth-finder:"
  - "|   url                                   method"
  - "|   http://192.168.1.162/auth1/index.html  HTTP: Basic, Digest, Negotiate"
  - "|_  http://192.168.1.162/auth2/index.html  FORM"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-auth-finder.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-auth-finder.html"
---

Spiders a web site to find web pages requiring form-based or HTTP-based authentication. The results are returned in a table with each url and the
detected method.
