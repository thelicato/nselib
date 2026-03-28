---
title: "rsync-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against the rsync remote file syncing protocol."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 873 --script rsync-brute --script-args 'rsync-brute.module=www' <ip>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "873/tcp open  rsync   syn-ack"
  - "| rsync-brute:"
  - "|   Accounts"
  - "|     user1:laptop - Valid credentials"
  - "|     user2:password - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rsync-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rsync-brute.html"
---

Performs brute force password auditing against the rsync remote file syncing protocol.
