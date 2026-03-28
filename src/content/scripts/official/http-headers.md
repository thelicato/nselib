---
title: "http-headers"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Performs a HEAD request for the root folder (\"/\") of a web server and displays the HTTP headers returned."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=http-headers <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-headers:"
  - "|   Date: Fri, 25 Jan 2013 17:39:08 GMT"
  - "|   Server: Apache/2.2.14 (Ubuntu)"
  - "|   Accept-Ranges: bytes"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-headers.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-headers.html"
---

Performs a HEAD request for the root folder ("/") of a web server and displays the HTTP headers returned.
