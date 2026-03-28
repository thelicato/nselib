---
title: "riak-http-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves information (such as node name and architecture) from a Basho Riak distributed database using the HTTP protocol."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8098 <ip> --script riak-http-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8098/tcp open  http"
  - "| riak-http-info:"
  - "|   Node name                  riak@127.0.0.1"
  - "|   Architecture               x86_64-unknown-linux-gnu"
  - "|   Storage backend            riak_kv_bitcask_backend"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/riak-http-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/riak-http-info.html"
---

Retrieves information (such as node name and architecture) from a Basho Riak distributed database using the HTTP protocol.
