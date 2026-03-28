---
title: "rlogin-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against the classic UNIX rlogin (remote\nlogin) service. This script must be run in privileged mode on UNIX because it\nmust bind to a low source port number."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 513 --script rlogin-brute <ip>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "513/tcp open  login"
  - "| rlogin-brute:"
  - "|   Accounts"
  - "|     nmap:test - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rlogin-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rlogin-brute.html"
---

Performs brute force password auditing against the classic UNIX rlogin (remote
login) service. This script must be run in privileged mode on UNIX because it
must bind to a low source port number.
