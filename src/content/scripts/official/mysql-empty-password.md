---
title: "mysql-empty-password"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Checks for MySQL servers with an empty password for root or\n anonymous ."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=mysql-empty-password <target>"
outputPreview:
  - "3306/tcp open  mysql"
  - "| mysql-empty-password:"
  - "|   anonymous account has empty password"
  - "|_  root account has empty password"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-empty-password.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-empty-password.html"
---

Checks for MySQL servers with an empty password for root or
 anonymous .
