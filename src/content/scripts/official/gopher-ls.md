---
title: "gopher-ls"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Lists files and directories at the root of a gopher service."
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
usage: "nmap -p 70 --script gopher-ls --script-args gopher-ls.maxfiles=100 <target>"
outputPreview:
  - "70/tcp open  gopher"
  - "| gopher-ls:"
  - "| [txt] /gresearch.txt \"Gopher, the next big thing?\""
  - "| [dir] /taxf \"Tax Forms\""
  - "|_Only 2 shown. Use --script-args gopher-ls.maxfiles=-1 to see all."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/gopher-ls.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/gopher-ls.html"
---

Lists files and directories at the root of a gopher service.
