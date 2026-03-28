---
title: "iax2-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the Asterisk IAX2 protocol.\nGuessing fails when a large number of attempts is made due to the maxcallnumber limit (default 2048).\nIn case your getting \"ERROR: Too many retries, aborted ...\" after a while, this is most likely what's happening.\nIn order to avoid this problem try:\n - reducing the size of your dictionary\n - use the brute delay option to introduce a delay between guesses\n - split the guessing up in chunks and wait for a while between them"
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 4569 <ip> --script iax2-brute"
outputPreview:
  - "PORT     STATE         SERVICE"
  - "4569/udp open|filtered unknown"
  - "| iax2-brute:"
  - "|   Accounts"
  - "|     1002:password12 - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/iax2-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/iax2-brute.html"
---

Performs brute force password auditing against the Asterisk IAX2 protocol.
Guessing fails when a large number of attempts is made due to the maxcallnumber limit (default 2048).
In case your getting "ERROR: Too many retries, aborted ..." after a while, this is most likely what's happening.
In order to avoid this problem try:
 - reducing the size of your dictionary
 - use the brute delay option to introduce a delay between guesses
 - split the guessing up in chunks and wait for a while between them
