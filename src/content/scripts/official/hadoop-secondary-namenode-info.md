---
title: "hadoop-secondary-namenode-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves information from an Apache Hadoop secondary NameNode HTTP status page."
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
usage: "nmap --script  hadoop-secondary-namenode-info -p 50090 host"
outputPreview:
  - "PORT      STATE  SERVICE REASON"
  - "50090/tcp open   unknown syn-ack"
  - "| hadoop-secondary-namenode-info:"
  - "|   Start: Wed May 11 22:33:44 PDT 2011"
  - "|   Version: 0.20.2, f415ef415ef415ef415ef415ef415ef415ef415e"
  - "|   Compiled: Wed May 11 22:33:44 PDT 2011 by bob from unknown"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hadoop-secondary-namenode-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hadoop-secondary-namenode-info.html"
---

Retrieves information from an Apache Hadoop secondary NameNode HTTP status page.
