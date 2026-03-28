---
title: "iscsi-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against iSCSI targets."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=iscsi-brute <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "3260/tcp open  iscsi   syn-ack"
  - "| iscsi-brute:"
  - "|   Accounts"
  - "|     user:password123456 => Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/iscsi-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/iscsi-brute.html"
---

Performs brute force password auditing against iSCSI targets.
