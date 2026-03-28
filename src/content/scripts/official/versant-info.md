---
title: "versant-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Extracts information, including file paths, version and database names from\na Versant object database."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 5019 <ip> --script versant-info"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "5019/tcp open  versant syn-ack"
  - "| versant-info:"
  - "|   Hostname: WIN-S6HA7RJFAAR"
  - "|   Root path: C:\\Versant\\8"
  - "|   Database path: C:\\Versant\\db"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/versant-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/versant-info.html"
---

Extracts information, including file paths, version and database names from
a Versant object database.
