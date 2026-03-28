---
title: "metasploit-xmlrpc-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against a Metasploit RPC server using the XMLRPC protocol."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script metasploit-xmlrpc-brute -p 55553 <host>"
outputPreview:
  - "PORT      STATE SERVICE"
  - "55553/tcp open  unknown"
  - "| metasploit-xmlrpc-brute:"
  - "|   Accounts"
  - "|     password - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/metasploit-xmlrpc-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/metasploit-xmlrpc-brute.html"
---

Performs brute force password auditing against a Metasploit RPC server using the XMLRPC protocol.
