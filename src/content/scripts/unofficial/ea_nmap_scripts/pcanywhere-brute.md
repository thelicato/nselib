---
title: "pcanywhere-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs password guessing against pcAnywhere."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "ea/nmap-scripts"
scriptTypes: []
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
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/pcanywhere-brute.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Performs password guessing against pcAnywhere.
Due to certain limitations of the protocol, bruteforcing
is limited to single thread at a time.
After a valid login pair is guessed the script waits
some time until server becomes available again.
