---
title: "svn-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against Subversion source code control servers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script svn-brute --script-args svn-brute.repo=/svn/ -p 3690 <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "3690/tcp open  svn     syn-ack"
  - "| svn-brute:"
  - "|   Accounts"
  - "|_    patrik:secret => Login correct"
  - "Summary"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/svn-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/svn-brute.html"
---

Performs brute force password auditing against Subversion source code control servers.
