---
title: "deluge-rpc-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the DelugeRPC daemon."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script deluge-rpc-brute -p 58846 <host>"
outputPreview:
  - "PORT      STATE SERVICE REASON  TTL"
  - "58846/tcp open  unknown syn-ack 0"
  - "| deluge-rpc-brute:"
  - "|   Accounts"
  - "|     admin:default - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/deluge-rpc-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/deluge-rpc-brute.html"
---

Performs brute force password auditing against the DelugeRPC daemon.
