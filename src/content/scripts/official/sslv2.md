---
title: "sslv2"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Determines whether the server supports obsolete and less secure SSLv2, and discovers which ciphers it\nsupports."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "443/tcp open   https   syn-ack"
  - "| sslv2:"
  - "|   SSLv2 supported"
  - "|   ciphers:"
  - "|     SSL2_DES_192_EDE3_CBC_WITH_MD5"
  - "|     SSL2_IDEA_128_CBC_WITH_MD5"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sslv2.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sslv2.html"
---

Determines whether the server supports obsolete and less secure SSLv2, and discovers which ciphers it
supports.
