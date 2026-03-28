---
title: "redis-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force passwords auditing against a Redis key-value store."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 6379 <ip> --script redis-brute"
outputPreview:
  - "PORT     STATE SERVICE"
  - "6379/tcp open  unknown"
  - "| redis-brute:"
  - "|   Accounts"
  - "|     toledo - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/redis-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/redis-brute.html"
---

Performs brute force passwords auditing against a Redis key-value store.
