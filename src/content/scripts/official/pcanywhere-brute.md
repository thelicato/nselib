---
title: "pcanywhere-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the pcAnywhere remote access protocol."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=pcanywhere-brute <target>"
outputPreview:
  - "5631/tcp open  pcanywheredata syn-ack"
  - "| pcanywhere-brute:"
  - "|   Accounts"
  - "|     administrator:administrator - Valid credentials"
  - "|   Statistics"
  - "|_    Performed 2 guesses in 55 seconds, average tps: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pcanywhere-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pcanywhere-brute.html"
---

Performs brute force password auditing against the pcAnywhere remote access protocol.
Due to certain limitations of the protocol, bruteforcing
is limited to single thread at a time.
After a valid login pair is guessed the script waits
some time until server becomes available again.
