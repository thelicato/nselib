---
title: "ajp-request"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Requests a URI over the Apache JServ Protocol and displays the result\n(or stores it in a file). Different AJP methods such as; GET, HEAD,\nTRACE, PUT or DELETE may be used."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8009 <ip> --script ajp-request"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8009/tcp open  ajp13"
  - "| ajp-request:"
  - "| <!DOCTYPE HTML>"
  - "| <html>"
  - "| <head>"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ajp-request.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ajp-request.html"
---

Requests a URI over the Apache JServ Protocol and displays the result
(or stores it in a file). Different AJP methods such as; GET, HEAD,
TRACE, PUT or DELETE may be used.
The Apache JServ Protocol is commonly used by web servers to communicate with
back-end Java application server containers.
