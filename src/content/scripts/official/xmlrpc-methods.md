---
title: "xmlrpc-methods"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
shortDescription: "Performs XMLRPC Introspection via the system.listMethods method."
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "| xmlrpc-methods:"
  - "|   Supported Methods:"
  - "|     list"
  - "|     system.listMethods"
  - "|     system.methodHelp"
  - "|_    system.methodSignature"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/xmlrpc-methods.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/xmlrpc-methods.html"
---

Performs XMLRPC Introspection via the system.listMethods method.
If the verbosity is > 1 then the script fetches the response
of system.methodHelp for each method returned by listMethods.
