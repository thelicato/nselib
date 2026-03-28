---
title: "http-cookie-flags"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "vuln"
shortDescription: "Examines cookies set by HTTP services. Reports any session cookies set\nwithout the httponly flag. Reports any session cookies set over SSL without\nthe secure flag. If http-enum.nse is also run, any interesting paths found\nby it will be checked in addition to the root."
risk: safe
tags:
  - "default"
  - "safe"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script http-cookie-flags <target>"
outputPreview:
  - "443/tcp open  https"
  - "| http-cookie-flags:"
  - "|   /:"
  - "|     PHPSESSID:"
  - "|       secure flag not set and HTTPS in use"
  - "|   /admin/:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-cookie-flags.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-cookie-flags.html"
---

Examines cookies set by HTTP services. Reports any session cookies set
without the httponly flag. Reports any session cookies set over SSL without
the secure flag. If http-enum.nse is also run, any interesting paths found
by it will be checked in addition to the root.
