---
title: "mongodb-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to get build info and server status from a MongoDB database."
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
usage: "nmap -p 27017 --script mongodb-info <host>"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "27017/tcp open  unknown syn-ack"
  - "| mongodb-info:"
  - "|   MongoDB Build info"
  - "|     ok = 1"
  - "|     bits = 64"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mongodb-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mongodb-info.html"
---

Attempts to get build info and server status from a MongoDB database.
