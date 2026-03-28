---
title: "cassandra-info"
source: official
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
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 9160 <ip> --script=cassandra-info"
outputPreview:
  - "PORT     STATE SERVICE   REASON"
  - "9160/tcp open  cassandra syn-ack"
  - "| cassandra-info:"
  - "|   Cluster name: Test Cluster"
  - "|_  Version: 19.10.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cassandra-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cassandra-info.html"
---

Attempts to get basic info and server status from a Cassandra database.
For more information about Cassandra, see:
 http://cassandra.apache.org/
