---
title: "sip-call-spoof"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Spoofs a call to a SIP phone and detects the action taken by the target (busy, declined, hung up, etc.)"
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=sip-call-spoof -sU -p 5060 <targets>\nnmap --script=sip-call-spoof -sU -p 5060 --script-args\n'sip-call-spoof.ua=Nmap, sip-call-spoof.from=Boss' <targets>"
outputPreview:
  - "5060/udp open  sip"
  - "| sip-call-spoof:"
  - "|_  Target hung up. (After 10.9 seconds)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sip-call-spoof.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sip-call-spoof.html"
---

Spoofs a call to a SIP phone and detects the action taken by the target (busy, declined, hung up, etc.)
This works by sending a fake sip invite request to the target phone and checking
the responses. A response with status code 180 means that the phone is ringing.
The script waits for the next responses until timeout is reached or a special
response is received. Special responses include: Busy (486), Decline (603),
Timeout (408) or Hang up (200).
