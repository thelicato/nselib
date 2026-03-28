---
title: "http-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against http basic, digest and ntlm authentication."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-brute -p 80 <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "80/tcp   open  http    syn-ack"
  - "| http-brute:"
  - "|   Accounts:"
  - "|     user:user - Valid credentials"
  - "|_  Statistics: Performed 123 guesses in 1 seconds, average tps: 123"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-brute.html"
---

Performs brute force password auditing against http basic, digest and ntlm authentication.
This script uses the unpwdb and brute libraries to perform password
guessing. Any successful guesses are stored in the nmap registry, using
the creds library, for other scripts to use.
