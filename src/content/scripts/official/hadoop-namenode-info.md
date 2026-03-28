---
title: "hadoop-namenode-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves information from an Apache Hadoop NameNode HTTP status page."
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
usage: "nmap --script hadoop-namenode-info -p 50070 host"
outputPreview:
  - "PORT      STATE SERVICE         REASON"
  - "50070/tcp open  hadoop-namenode syn-ack"
  - "| hadoop-namenode-info:"
  - "|   Started:  Wed May 11 22:33:44 PDT 2011"
  - "|   Version:  0.20.2-cdh3u1, f415ef415ef415ef415ef415ef415ef415ef415e"
  - "|   Compiled:  Wed May 11 22:33:44 PDT 2011 by bob from unknown"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hadoop-namenode-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hadoop-namenode-info.html"
---

Retrieves information from an Apache Hadoop NameNode HTTP status page.
