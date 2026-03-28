---
title: "irc-sasl-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against IRC (Internet Relay Chat) servers supporting SASL authentication."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script irc-sasl-brute -p 6667 <ip>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "6667/tcp open  irc     syn-ack"
  - "| irc-sasl-brute:"
  - "|   Accounts"
  - "|     root:toor - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/irc-sasl-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/irc-sasl-brute.html"
---

Performs brute force password auditing against IRC (Internet Relay Chat) servers supporting SASL authentication.
