---
title: "mysql-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs password guessing against MySQL."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=mysql-brute <target>"
outputPreview:
  - "3306/tcp open  mysql"
  - "| mysql-brute:"
  - "|   Accounts"
  - "|     root:root - Valid credentials"
author: "Patrik Karlsson (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/mysql-brute.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Performs password guessing against MySQL.
