---
title: "cassandra-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the Cassandra database."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 9160 <ip> --script=cassandra-brute"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "9160/tcp open  apani1?"
  - "| cassandra-brute:"
  - "|   Accounts"
  - "|     admin:lover - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cassandra-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cassandra-brute.html"
---

Performs brute force password auditing against the Cassandra database.
For more information about Cassandra, see:
 http://cassandra.apache.org/
