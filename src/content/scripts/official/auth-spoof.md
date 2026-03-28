---
title: "auth-spoof"
source: official
category: "Malware"
categories:
  - "malware"
  - "safe"
shortDescription: "Checks for an identd (auth) server which is spoofing its replies."
risk: safe
tags:
  - "malware"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=auth-spoof <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "113/tcp open  auth    syn-ack"
  - "|_auth-spoof: Spoofed reply: 0, 0 : USERID : UNIX : OGJdvM"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/auth-spoof.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/auth-spoof.html"
---

Checks for an identd (auth) server which is spoofing its replies.
Tests whether an identd (auth) server responds with an answer before
we even send the query. This sort of identd spoofing can be a sign of
malware infection, though it can also be used for legitimate privacy
reasons.
