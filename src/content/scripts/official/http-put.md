---
title: "http-put"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Uploads a local file to a remote web server using the HTTP PUT method. You must specify the filename and URL path with NSE arguments."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 80 <ip> --script http-put --script-args http-put.url='/uploads/rootme.php',http-put.file='/tmp/rootme.php'"
outputPreview:
  - "PORT     STATE SERVICE"
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "|_http-put: /uploads/rootme.php was successfully created"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-put.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-put.html"
---

Uploads a local file to a remote web server using the HTTP PUT method. You must specify the filename and URL path with NSE arguments.
