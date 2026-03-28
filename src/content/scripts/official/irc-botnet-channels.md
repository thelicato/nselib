---
title: "irc-botnet-channels"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "vuln"
  - "safe"
shortDescription: "Checks an IRC server for channels that are commonly used by malicious botnets."
risk: safe
tags:
  - "discovery"
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 6667 --script=irc-botnet-channels <target>"
outputPreview:
  - "| irc-botnet-channels:"
  - "|   #loic"
  - "|_  #RxBot"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/irc-botnet-channels.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/irc-botnet-channels.html"
---

Checks an IRC server for channels that are commonly used by malicious botnets.
