---
title: "smtp-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against SMTP servers using either LOGIN, PLAIN, CRAM-MD5, DIGEST-MD5 or NTLM authentication."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 25 --script smtp-brute <host>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "25/tcp  open  stmp    syn-ack"
  - "| smtp-brute:"
  - "|   Accounts"
  - "|     braddock:jules - Valid credentials"
  - "|     lane:sniper - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-brute.html"
---

Performs brute force password auditing against SMTP servers using either LOGIN, PLAIN, CRAM-MD5, DIGEST-MD5 or NTLM authentication.
