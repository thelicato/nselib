---
title: "backorifice-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the BackOrifice service. The\n backorifice-brute.ports script argument is mandatory (it specifies ports to run\nthe script against)."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU --script backorifice-brute <host> --script-args backorifice-brute.ports=<ports>"
outputPreview:
  - "PORT       STATE  SERVICE"
  - "31337/udp  open   BackOrifice"
  - "| backorifice-brute:"
  - "|   Accounts:"
  - "|     michael => Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/backorifice-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/backorifice-brute.html"
---

Performs brute force password auditing against the BackOrifice service. The
 backorifice-brute.ports script argument is mandatory (it specifies ports to run
the script against).
