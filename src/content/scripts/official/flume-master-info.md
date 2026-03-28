---
title: "flume-master-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves information from Flume master HTTP pages."
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
usage: "nmap --script flume-master-info -p 35871 host"
outputPreview:
  - "PORT      STATE SERVICE         REASON"
  - "35871/tcp open  flume-master syn-ack"
  - "| flume-master-info:"
  - "|   Version:  0.9.4-cdh3u3"
  - "|   ServerID: 0"
  - "|   Flume nodes:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/flume-master-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/flume-master-info.html"
---

Retrieves information from Flume master HTTP pages.
Information gathered:

 Flume version

 Flume server id

 Zookeeper/Hbase master servers present in configured flows

 Java information

 OS information

 various other local configurations.

If this script is run wth -v, it will output lots more info.
Use the newtargets script argument to add discovered hosts to
the Nmap scan queue.
