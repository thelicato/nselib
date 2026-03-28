---
title: "sip-methods"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
shortDescription: "Enumerates a SIP Server's allowed methods (INVITE, OPTIONS, SUBSCRIBE, etc.)"
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=sip-methods -sU -p 5060 <targets>"
outputPreview:
  - "5060/udp open  sip"
  - "| sip-methods:"
  - "|_  INVITE, ACK, CANCEL, OPTIONS, BYE, REFER, SUBSCRIBE, NOTIFY, INFO"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sip-methods.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sip-methods.html"
---

Enumerates a SIP Server's allowed methods (INVITE, OPTIONS, SUBSCRIBE, etc.)
The script works by sending an OPTION request to the server and checking for
the value of the Allow header in the response.
