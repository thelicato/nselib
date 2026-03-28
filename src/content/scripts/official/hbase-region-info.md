---
title: "hbase-region-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves information from an Apache HBase (Hadoop database) region server HTTP status page."
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
usage: "nmap --script hbase-region-info -p 60030 host"
outputPreview:
  - "PORT      STATE SERVICE      REASON"
  - "60030/tcp open  hbase-region syn-ack"
  - "| hbase-region-info:"
  - "|   Hbase Version: 0.90.1"
  - "|   Hbase Compiled: Wed May 11 22:33:44 PDT 2011, bob"
  - "|   Metrics requests=0, regions=0, stores=0, storefiles=0, storefileIndexSize=0, memstoreSize=0,"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hbase-region-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hbase-region-info.html"
---

Retrieves information from an Apache HBase (Hadoop database) region server HTTP status page.
