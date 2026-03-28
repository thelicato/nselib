---
title: "mysql-query"
source: official
category: "Auth"
categories:
  - "auth"
  - "discovery"
  - "safe"
shortDescription: "Runs a query against a MySQL database and returns the results as a table."
risk: safe
tags:
  - "auth"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 3306 <ip> --script mysql-query --script-args='query=\"<query>\"[,username=<username>,password=<password>]'"
outputPreview:
  - "PORT     STATE SERVICE"
  - "3306/tcp open  mysql"
  - "| mysql-query:"
  - "|   host       user"
  - "|   127.0.0.1  root"
  - "|   localhost  debian-sys-maint"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-query.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-query.html"
---

Runs a query against a MySQL database and returns the results as a table.
