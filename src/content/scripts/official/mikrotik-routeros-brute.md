---
title: "mikrotik-routeros-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against Mikrotik RouterOS devices with the API RouterOS interface enabled."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p8728 --script mikrotik-routeros-brute <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "8728/tcp open  unknown syn-ack"
  - "| mikrotik-routeros-brute:"
  - "|   Accounts"
  - "|     admin:dOsmyvsvJGA967eanX - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mikrotik-routeros-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mikrotik-routeros-brute.html"
---

Performs brute force password auditing against Mikrotik RouterOS devices with the API RouterOS interface enabled.
