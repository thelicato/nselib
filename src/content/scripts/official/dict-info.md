---
title: "dict-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Connects to a dictionary server using the DICT protocol, runs the SHOW\nSERVER command, and displays the result. The DICT protocol is defined in RFC\n2229 and is a protocol which allows a client to query a dictionary server for\ndefinitions from a set of natural language dictionary databases."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2628 <ip> --script dict-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "2628/tcp open  dict"
  - "| dict-info:"
  - "|   dictd 1.12.0/rf on Linux 3.0.0-12-generic"
  - "|   On ubu1110: up 15.000, 4 forks (960.0/hour)"
  - "|"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dict-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dict-info.html"
---

Connects to a dictionary server using the DICT protocol, runs the SHOW
SERVER command, and displays the result. The DICT protocol is defined in RFC
2229 and is a protocol which allows a client to query a dictionary server for
definitions from a set of natural language dictionary databases.
The SHOW server command must be implemented and depending on access will show
server information and accessible databases. If authentication is required, the
list of databases will not be shown.
