---
title: "pgsql-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs password guessing against PostgreSQL."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 5432 --script pgsql-brute <host>"
outputPreview:
  - "5432/tcp open  pgsql"
  - "| pgsql-brute:"
  - "|   root:<empty> => Valid credentials"
  - "|_  test:test => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pgsql-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pgsql-brute.html"
---

Performs password guessing against PostgreSQL.
