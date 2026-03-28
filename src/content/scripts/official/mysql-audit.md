---
title: "mysql-audit"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Audits MySQL database server security configuration against parts of\nthe CIS MySQL v1.0.2 benchmark (the engine can be used for other MySQL\naudits by creating appropriate audit files)."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 3306 --script mysql-audit --script-args \"mysql-audit.username='root', \\\n  mysql-audit.password='foobar',mysql-audit.filename='nselib/data/mysql-cis.audit'\""
outputPreview:
  - "PORT     STATE SERVICE"
  - "3306/tcp open  mysql"
  - "| mysql-audit:"
  - "|   CIS MySQL Benchmarks v1.0.2"
  - "|       3.1: Skip symbolic links => PASS"
  - "|       3.2: Logs not on system partition => PASS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-audit.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-audit.html"
---

Audits MySQL database server security configuration against parts of
the CIS MySQL v1.0.2 benchmark (the engine can be used for other MySQL
audits by creating appropriate audit files).
