---
title: "ajp-methods"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Discovers which options are supported by the AJP (Apache JServ\nProtocol) server by sending an OPTIONS request and lists potentially\nrisky methods."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8009 <ip> --script ajp-methods"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8009/tcp open  ajp13"
  - "| ajp-methods:"
  - "|   Supported methods: GET HEAD POST PUT DELETE TRACE OPTIONS"
  - "|   Potentially risky methods: PUT DELETE TRACE"
  - "|_  See https://nmap.org/nsedoc/scripts/ajp-methods.html"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ajp-methods.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ajp-methods.html"
---

Discovers which options are supported by the AJP (Apache JServ
Protocol) server by sending an OPTIONS request and lists potentially
risky methods.
In this script, "potentially risky" methods are anything except GET,
HEAD, POST, and OPTIONS. If the script reports potentially risky
methods, they may not all be security risks, but you should check to
make sure. This page lists the dangers of some common methods:
http://www.owasp.org/index.php/Testing_for_HTTP_Methods_and_XST_%28OWASP-CM-008%29
