---
title: "sslv2-drown"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Determines whether the server supports SSLv2, what ciphers it supports and tests for\nCVE-2015-3197, CVE-2016-0703 and CVE-2016-0800 (DROWN)"
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=sslv2-drown <target>"
outputPreview:
  - "443/tcp open  https"
  - "| sslv2-drown:"
  - "|   ciphers:"
  - "|     SSL2_DES_192_EDE3_CBC_WITH_MD5"
  - "|     SSL2_IDEA_128_CBC_WITH_MD5"
  - "|     SSL2_RC2_128_CBC_WITH_MD5"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sslv2-drown.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sslv2-drown.html"
---

Determines whether the server supports SSLv2, what ciphers it supports and tests for
CVE-2015-3197, CVE-2016-0703 and CVE-2016-0800 (DROWN)
