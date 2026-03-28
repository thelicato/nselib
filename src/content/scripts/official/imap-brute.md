---
title: "imap-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against IMAP servers using either LOGIN, PLAIN, CRAM-MD5, DIGEST-MD5 or NTLM authentication."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 143,993 --script imap-brute <host>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "143/tcp open  imap    syn-ack"
  - "| imap-brute:"
  - "|   Accounts"
  - "|     braddock:jules - Valid credentials"
  - "|     lane:sniper - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/imap-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/imap-brute.html"
---

Performs brute force password auditing against IMAP servers using either LOGIN, PLAIN, CRAM-MD5, DIGEST-MD5 or NTLM authentication.
