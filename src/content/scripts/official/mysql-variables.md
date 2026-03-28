---
title: "mysql-variables"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Attempts to show all variables on a MySQL server."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=mysql-variables <target>"
outputPreview:
  - "3306/tcp open  mysql"
  - "| mysql-variables:"
  - "|   auto_increment_increment: 1"
  - "|   auto_increment_offset: 1"
  - "|   automatic_sp_privileges: ON"
  - "|   back_log: 50"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-variables.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-variables.html"
---

Attempts to show all variables on a MySQL server.
