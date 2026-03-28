---
title: "nexpose-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against a Nexpose vulnerability scanner\nusing the API 1.1."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script nexpose-brute -p 3780 <ip>"
outputPreview:
  - "PORT     STATE SERVICE     REASON  VERSION"
  - "3780/tcp open  ssl/nexpose syn-ack NeXpose NSC 0.6.4"
  - "| nexpose-brute:"
  - "|   Accounts"
  - "|     nxadmin:nxadmin - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nexpose-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nexpose-brute.html"
---

Performs brute force password auditing against a Nexpose vulnerability scanner
using the API 1.1.
As the Nexpose application enforces account lockout after 4 incorrect login
attempts, the script performs only 3 guesses per default. This can be
altered by supplying the brute.guesses argument a different
value or 0 (zero) to guess the whole dictionary.
