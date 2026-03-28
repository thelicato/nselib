---
title: "ajp-headers"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Performs a HEAD or GET request against either the root directory or any\noptional directory of an Apache JServ Protocol server and returns the server response headers."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8009 <ip> --script ajp-headers"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8009/tcp open  ajp13"
  - "| ajp-headers:"
  - "|   X-Powered-By: JSP/2.2"
  - "|   Set-Cookie: JSESSIONID=goTHax+8ktEcZsBldANHBAuf.undefined; Path=/helloworld"
  - "|   Content-Type: text/html;charset=ISO-8859-1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ajp-headers.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ajp-headers.html"
---

Performs a HEAD or GET request against either the root directory or any
optional directory of an Apache JServ Protocol server and returns the server response headers.
