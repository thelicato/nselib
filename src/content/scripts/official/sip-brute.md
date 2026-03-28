---
title: "sip-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against Session Initiation Protocol\n(SIP) accounts. This protocol is most commonly associated with VoIP sessions."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 5060 <target> --script=sip-brute\n\nPORT     STATE         SERVICE\n5060/udp open|filtered sip\n| sip-brute:\n|   Accounts\n|     1000:password123 => Valid credentials\n|   Statistics\n|_    Performed 5010 guesses in 3 seconds, average tps: 1670"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sip-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sip-brute.html"
---

Performs brute force password auditing against Session Initiation Protocol
(SIP) accounts. This protocol is most commonly associated with VoIP sessions.
