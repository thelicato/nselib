---
title: "mongodb-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the MongoDB database."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 27017 <ip> --script mongodb-brute"
outputPreview:
  - "PORT      STATE SERVICE"
  - "27017/tcp open  mongodb"
  - "| mongodb-brute:"
  - "|   Accounts"
  - "|     root:Password1 - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mongodb-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mongodb-brute.html"
---

Performs brute force password auditing against the MongoDB database.
