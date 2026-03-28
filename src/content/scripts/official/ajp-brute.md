---
title: "ajp-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force passwords auditing against the Apache JServ protocol.\nThe Apache JServ Protocol is commonly used by web servers to communicate with\nback-end Java application server containers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8009 <ip> --script ajp-brute"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8009/tcp open  ajp13"
  - "| ajp-brute:"
  - "|   Accounts"
  - "|     root:secret - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ajp-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ajp-brute.html"
---

Performs brute force passwords auditing against the Apache JServ protocol.
The Apache JServ Protocol is commonly used by web servers to communicate with
back-end Java application server containers.
