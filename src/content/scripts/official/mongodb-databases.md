---
title: "mongodb-databases"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to get a list of tables from a MongoDB database."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 27017 --script mongodb-databases <host>"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "27017/tcp open  unknown syn-ack"
  - "| mongodb-databases:"
  - "|   ok = 1"
  - "|   databases"
  - "|     1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mongodb-databases.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mongodb-databases.html"
---

Attempts to get a list of tables from a MongoDB database.
