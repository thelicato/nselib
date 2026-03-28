---
title: "nje-pass-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "z/OS JES Network Job Entry (NJE) 'I record' password brute forcer."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=nje-pass-brute --script-args=ohost='POTATO',rhost='CACTUS' <target>\nnmap --script=nje-pass-brute --script-args=ohost='POTATO',rhost='CACTUS',sleep=5 -p 175 <target>"
outputPreview:
  - "PORT    STATE SERVICE VERSION"
  - "175/tcp open  nje     IBM Network Job Entry (JES)"
  - "| nje-pass-brute:"
  - "|   NJE Password:"
  - "|     Password:A - Valid credentials"
  - "|_  Statistics: Performed 8 guesses in 12 seconds, average tps: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nje-pass-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nje-pass-brute.html"
---

z/OS JES Network Job Entry (NJE) 'I record' password brute forcer.
After successfully negotiating an OPEN connection request, NJE requires sending,
what IBM calls, an 'I record'. This initialization record may sometimes require
a password. This script, provided with a valid OHOST/RHOST for the NJE connection,
brute forces the password.
Most systems only have one password, it is recommended to use the
 brute.firstonly script argument.
