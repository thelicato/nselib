---
title: "ganglia-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves system information (OS version, available memory, etc.) from\na listening Ganglia Monitoring Daemon or Ganglia Meta Daemon."
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
usage: "nmap --script ganglia-info --script-args ganglia-info.timeout=60,ganglia-info.bytes=1000000 -p <port> <target>"
outputPreview:
  - "8649/tcp open   unknown syn-ack"
  - "| ganglia-info:"
  - "|   Ganglia Version: 3.1.7"
  - "|   Cluster 1:"
  - "|     Name: unspecified"
  - "|     Owner: unspecified"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ganglia-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ganglia-info.html"
---

Retrieves system information (OS version, available memory, etc.) from
a listening Ganglia Monitoring Daemon or Ganglia Meta Daemon.
Ganglia is a scalable distributed monitoring system for high-performance
computing systems such as clusters and Grids. The information retrieved
includes HDD size, available memory, OS version, architecture (and more) from
each of the systems in each of the clusters in the grid.
