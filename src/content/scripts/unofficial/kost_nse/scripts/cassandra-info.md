---
title: "cassandra-info"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to get basic info and server status from a Cassandra database."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "kost/nmap-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 9160 <ip> --script=cassandra-info"
outputPreview:
  - "PORT     STATE SERVICE   REASON"
  - "9160/tcp open  cassandra syn-ack"
  - "| cassandra-info:"
  - "|   Cluster name: Test Cluster"
  - "|_  Version: 19.10.0"
author: "Vlatko Kosturjak (upstream: kost/nmap-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/kost/nmap-nse/blob/master/scripts/cassandra-info.nse"
---

Imported from the upstream repository [kost/nmap-nse](https://github.com/kost/nmap-nse).
Attempts to get basic info and server status from a Cassandra database.
For more information about Cassandra, see:
http://cassandra.apache.org/
