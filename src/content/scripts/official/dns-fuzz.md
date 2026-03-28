---
title: "dns-fuzz"
source: official
category: "Fuzzer"
categories:
  - "fuzzer"
  - "intrusive"
shortDescription: "Launches a DNS fuzzing attack against DNS servers."
risk: intrusive
tags:
  - "fuzzer"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU --script dns-fuzz --script-args timelimit=2h <target>"
outputPreview:
  - "Host script results:"
  - "|_dns-fuzz: Server stopped responding... He's dead, Jim."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-fuzz.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-fuzz.html"
---

Launches a DNS fuzzing attack against DNS servers.
The script induces errors into randomly generated but valid DNS packets.
The packet template that we use includes one uncompressed and one
compressed name.
Use the dns-fuzz.timelimit argument to control how long the
fuzzing lasts. This script should be run for a long time. It will send a
very large quantity of packets and thus it's pretty invasive, so it
should only be used against private DNS servers as part of a software
development lifecycle.
