---
title: "omp2-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against the OpenVAS manager using OMPv2."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 9390 --script omp2-brute <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "9390/tcp open  openvas syn-ack"
  - "| omp2-brute:"
  - "|   Accounts"
  - "|_    admin:secret => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/omp2-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/omp2-brute.html"
---

Performs brute force password auditing against the OpenVAS manager using OMPv2.
