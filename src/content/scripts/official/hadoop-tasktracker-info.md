---
title: "hadoop-tasktracker-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves information from an Apache Hadoop TaskTracker HTTP status page."
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
usage: "nmap --script hadoop-tasktracker-info -p 50060 host"
outputPreview:
  - "PORT      STATE SERVICE            REASON"
  - "50060/tcp open  hadoop-tasktracker syn-ack"
  - "| hadoop-tasktracker-info:"
  - "|   Version: 0.20.1 (f415ef415ef415ef415ef415ef415ef415ef415e)"
  - "|   Compiled: Wed May 11 22:33:44 PDT 2011 by bob from unknown"
  - "|_  Logs: /logs/"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hadoop-tasktracker-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hadoop-tasktracker-info.html"
---

Retrieves information from an Apache Hadoop TaskTracker HTTP status page.
