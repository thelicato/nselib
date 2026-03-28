---
title: "cassandra-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the Cassandra database."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "kost/nmap-nse"
scriptTypes: []
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
author: "Vlatko Kosturjak (upstream: kost/nmap-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/kost/nmap-nse/blob/master/scripts/cassandra-brute.nse"
---

Imported from the upstream repository [kost/nmap-nse](https://github.com/kost/nmap-nse).
Performs brute force password auditing against the Cassandra database.
For more information about Cassandra, see:
http://cassandra.apache.org/
