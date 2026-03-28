---
title: "nessus-xmlrpc-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against a Nessus vulnerability scanning daemon using the XMLRPC protocol."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=nessus-xmlrpc-brute <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "8834/tcp open  unknown syn-ack"
  - "| nessus-xmlrpc-brute:"
  - "|   Accounts"
  - "|     nessus:nessus - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nessus-xmlrpc-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nessus-xmlrpc-brute.html"
---

Performs brute force password auditing against a Nessus vulnerability scanning daemon using the XMLRPC protocol.
