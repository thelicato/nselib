---
title: "vuze-dht-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves some basic information, including protocol version from a Vuze filesharing node."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p <port> <ip> --script vuze-dht-info -sV"
outputPreview:
  - "PORT      STATE SERVICE  VERSION"
  - "17555/udp open  vuze-dht Vuze"
  - "| vuze-dht-info:"
  - "|   Transaction id: 9438865"
  - "|   Connection id: 0xFF79A77B4592BDB0"
  - "|   Protocol version: 50"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/vuze-dht-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/vuze-dht-info.html"
---

Retrieves some basic information, including protocol version from a Vuze filesharing node.
As Vuze doesn't have a default port for its DHT service, this script has
some difficulties in determining when to run. Most scripts are triggered by
either a default port or a fingerprinted service. To get around this, there
are two options:
1. Always run a version scan, to identify the vuze-dht service in order to
 trigger the script.
2. Force the script to run against each port by setting the argument
 vuze-dht-info.allports
