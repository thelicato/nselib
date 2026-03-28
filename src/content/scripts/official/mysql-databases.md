---
title: "mysql-databases"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Attempts to list all databases on a MySQL server."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=mysql-databases <target>"
outputPreview:
  - "3306/tcp open  mysql"
  - "| mysql-databases:"
  - "|   information_schema"
  - "|   mysql"
  - "|   horde"
  - "|   album"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-databases.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-databases.html"
---

Attempts to list all databases on a MySQL server.
