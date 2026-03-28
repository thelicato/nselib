---
title: "hadoop-jobtracker-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves information from an Apache Hadoop JobTracker HTTP status page."
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
usage: "nmap --script hadoop-jobtracker-info [--script-args=hadoop-jobtracker-info.userinfo] -p 50030 host"
outputPreview:
  - "50030/tcp open  hadoop-jobtracker"
  - "| hadoop-jobtracker-info:"
  - "|   State: RUNNING"
  - "|   Started: Wed May 11 22:33:44 PDT 2011, bob"
  - "|   Version: 0.20.2 (f415ef415ef415ef415ef415ef415ef415ef415e)"
  - "|   Compiled: Wed May 11 22:33:44 PDT 2011 by bob from unknown"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hadoop-jobtracker-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hadoop-jobtracker-info.html"
---

Retrieves information from an Apache Hadoop JobTracker HTTP status page.
