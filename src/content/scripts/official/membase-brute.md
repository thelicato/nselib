---
title: "membase-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against Couchbase Membase servers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 11211 --script membase-brute"
outputPreview:
  - "PORT      STATE SERVICE"
  - "11211/tcp open  unknown"
  - "| membase-brute:"
  - "|   Accounts"
  - "|     buckettest:toledo - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/membase-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/membase-brute.html"
---

Performs brute force password auditing against Couchbase Membase servers.
