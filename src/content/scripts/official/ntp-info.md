---
title: "ntp-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Gets the time and configuration variables from an NTP server. We send two\nrequests: a time request and a \"read variables\" (opcode 2) control message.\nWithout verbosity, the script shows the time and the value of the\n version , processor , system ,\n refid , and stratum variables. With verbosity, all\nvariables are shown."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 123 --script ntp-info <target>"
outputPreview:
  - "PORT    STATE SERVICE VERSION"
  - "123/udp open  ntp     NTP v4.2.4p4@1.1520-o"
  - "| ntp-info:"
  - "|   receive time stamp: Sat Dec 12 16:22:41 2009"
  - "|   version: ntpd 4.2.4p4@1.1520-o Wed May 13 21:06:31 UTC 2009 (1)"
  - "|   processor: x86_64"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ntp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ntp-info.html"
---

Gets the time and configuration variables from an NTP server. We send two
requests: a time request and a "read variables" (opcode 2) control message.
Without verbosity, the script shows the time and the value of the
 version , processor , system ,
 refid , and stratum variables. With verbosity, all
variables are shown.
See RFC 1035 and the Network Time Protocol Version 4 Reference and
Implementation Guide
( http://www.eecis.udel.edu/~mills/database/reports/ntp4/ntp4.pdf ) for
documentation of the protocol.
