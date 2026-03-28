---
title: "informix-tables"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Retrieves a list of tables and column definitions for each database on an Informix server."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 9088 <host> --script informix-tables --script-args informix-tables.username=informix,informix-tables.password=informix"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "9088/tcp open  unknown syn-ack"
  - "| informix-tables:"
  - "|   Information"
  - "|     User: informix"
  - "|     Database: stores_demo"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/informix-tables.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/informix-tables.html"
---

Retrieves a list of tables and column definitions for each database on an Informix server.
