---
title: "bitcoinrpc-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Obtains information from a Bitcoin server by calling getinfo on its JSON-RPC interface."
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
usage: "nmap -p 8332 --script bitcoinrpc-info --script-args creds.global=<user>:<pass> <target>"
outputPreview:
  - "8332/tcp open  unknown"
  - "| bitcoinrpc-info.nse:"
  - "|   root:"
  - "|     balance: 0"
  - "|     blocks: 135041"
  - "|     connections: 36"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/bitcoinrpc-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/bitcoinrpc-info.html"
---

Obtains information from a Bitcoin server by calling getinfo on its JSON-RPC interface.
