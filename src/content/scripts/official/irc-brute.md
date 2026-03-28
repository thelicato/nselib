---
title: "irc-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against IRC (Internet Relay Chat) servers."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script irc-brute -p 6667 <ip>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "6667/tcp open  irc"
  - "| irc-brute:"
  - "|   Accounts"
  - "|     password - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/irc-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/irc-brute.html"
---

Performs brute force password auditing against IRC (Internet Relay Chat) servers.
