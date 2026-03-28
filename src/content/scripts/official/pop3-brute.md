---
title: "pop3-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Tries to log into a POP3 account by guessing usernames and passwords."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=pop3-brute <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "110/tcp open  pop3"
  - "| pop3-brute-ported:"
  - "| Accounts:"
  - "|  user:pass => Login correct"
  - "| Statistics:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pop3-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pop3-brute.html"
---

Tries to log into a POP3 account by guessing usernames and passwords.
