---
title: "cvs-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against CVS pserver authentication."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2401 --script cvs-brute <host>"
outputPreview:
  - "2401/tcp open  cvspserver syn-ack"
  - "| cvs-brute:"
  - "|   Accounts"
  - "|     hotchner:francisco - Account is valid"
  - "|     reid:secret - Account is valid"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cvs-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cvs-brute.html"
---

Performs brute force password auditing against CVS pserver authentication.
