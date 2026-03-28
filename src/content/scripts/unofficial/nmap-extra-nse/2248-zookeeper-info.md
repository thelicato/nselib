---
title: "2248-zookeeper-info"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Queries Apache Zookeeper on port 2181 to get information about the instance."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script zookeeper-info [--script-args command=<Custom Command>] <target>"
outputPreview:
  - "Host script results:"
  - "| zookeeper:"
  - "| Config Values: clientPort=2181"
  - "| dataDir=/var/lib/zookeeper/version-2"
  - "| dataLogDir=/var/lib/zookeeper/version-2"
  - "| tickTime=2000"
author: "Kürşat Çetin (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/2248-zookeeper-info.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Queries Apache Zookeeper on port 2181 to get information about the instance.
