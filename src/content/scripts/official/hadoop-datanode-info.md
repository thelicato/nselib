---
title: "hadoop-datanode-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Discovers information such as log directories from an Apache Hadoop DataNode\nHTTP status page."
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
usage: "nmap --script hadoop-datanode-info.nse -p 50075 host"
outputPreview:
  - "PORT      STATE SERVICE         REASON"
  - "50075/tcp open  hadoop-datanode syn-ack"
  - "| hadoop-datanode-info:"
  - "|_  Logs: /logs/"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hadoop-datanode-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hadoop-datanode-info.html"
---

Discovers information such as log directories from an Apache Hadoop DataNode
HTTP status page.
