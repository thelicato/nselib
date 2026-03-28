---
title: "1697-dns-any-query"
source: unofficial
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Checks if ANY dns type is allowed."
risk: safe
tags:
  - "default"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=dns-any-query -p53 <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "53/udp open  domain  udp-response ttl 55"
  - "| dns-any-query:"
  - "|   Result: Server is likely responding to ANY query"
  - "|   Authoritative: TRUE"
  - "|   Found:"
author: "Erhad Husovic (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1697-dns-any-query.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Checks if ANY dns type is allowed.
Usually if server allows ANY queries, it will send more than one answers.
During prerule phase, if <code>newtargets</code> script argument is passed
it will find new targets to nmap scanning queue
