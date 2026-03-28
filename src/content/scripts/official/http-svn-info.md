---
title: "http-svn-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Requests information from a Subversion repository."
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
usage: "nmap --script http-svn-info <target>"
outputPreview:
  - "443/tcp open  https   syn-ack"
  - "| http-svn-info:"
  - "|   Path: ."
  - "|   URL: https://svn.nmap.org/"
  - "|   Relative URL: ^/"
  - "|   Repository Root: https://svn.nmap.org"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-svn-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-svn-info.html"
---

Requests information from a Subversion repository.
