---
title: "hbase-master-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves information from an Apache HBase (Hadoop database) master HTTP status page."
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
usage: "nmap --script hbase-master-info -p 60010 host"
outputPreview:
  - "| hbase-master-info:"
  - "|   Hbase Version: 0.90.1"
  - "|   Hbase Compiled: Wed May 11 22:33:44 PDT 2011, bob"
  - "|   HBase Root Directory: hdfs://master.example.com:8020/hbase"
  - "|   Hadoop Version: 0.20  f415ef415ef415ef415ef415ef415ef415ef415e"
  - "|   Hadoop Compiled: Wed May 11 22:33:44 PDT 2011, bob"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hbase-master-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hbase-master-info.html"
---

Retrieves information from an Apache HBase (Hadoop database) master HTTP status page.
