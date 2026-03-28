---
title: "mysql-users"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Attempts to list all users on a MySQL server."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=mysql-users <target>"
outputPreview:
  - "3306/tcp open  mysql"
  - "| mysql-users:"
  - "|   test"
  - "|   root"
  - "|   test2"
  - "|   album"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-users.html"
---

Attempts to list all users on a MySQL server.
