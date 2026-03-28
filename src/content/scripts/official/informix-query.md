---
title: "informix-query"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Runs a query against IBM Informix Dynamic Server using the given\nauthentication credentials (see also: informix-brute)."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 9088 <host> --script informix-query --script-args informix-query.username=informix,informix-query.password=informix"
outputPreview:
  - "PORT     STATE SERVICE"
  - "9088/tcp open  unknown syn-ack"
  - "| informix-query:"
  - "|   Information"
  - "|     User: informix"
  - "|     Database: sysmaster"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/informix-query.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/informix-query.html"
---

Runs a query against IBM Informix Dynamic Server using the given
authentication credentials (see also: informix-brute).
