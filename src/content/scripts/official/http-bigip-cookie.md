---
title: "http-bigip-cookie"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Decodes any unencrypted F5 BIG-IP cookies in the HTTP response.\nBIG-IP cookies contain information on backend systems such as\ninternal IP addresses and port numbers.\nSee here for more info: https://support.f5.com/csp/article/K6917"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p <port> --script http-bigip-cookie <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "80/tcp  open  http"
  - "| http-bigip-cookie:"
  - "|   BIGipServer<pool_name>:"
  - "|     address:"
  - "|       host: 10.1.1.100"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-bigip-cookie.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-bigip-cookie.html"
---

Decodes any unencrypted F5 BIG-IP cookies in the HTTP response.
BIG-IP cookies contain information on backend systems such as
internal IP addresses and port numbers.
See here for more info: https://support.f5.com/csp/article/K6917
