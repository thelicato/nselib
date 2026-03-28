---
title: "mysql-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs password guessing against MySQL."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=mysql-brute <target>"
outputPreview:
  - "3306/tcp open  mysql"
  - "| mysql-brute:"
  - "|   Accounts"
  - "|     root:root - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-brute.html"
---

Performs password guessing against MySQL.
