---
title: "dns-recursion"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Checks if a DNS server allows queries for third-party names. It is\nexpected that recursion will be enabled on your own internal\nnameservers."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 53 --script=dns-recursion <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "53/udp open  domain  udp-response"
  - "|_dns-recursion: Recursion appears to be enabled"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-recursion.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-recursion.html"
---

Checks if a DNS server allows queries for third-party names. It is
expected that recursion will be enabled on your own internal
nameservers.
