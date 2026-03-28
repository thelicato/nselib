---
title: "mikrotik-routeros-username-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "discovery"
shortDescription: "Attempts to enumerate valid usernames on MikroTik devices running the Winbox service on port 8291 in MikroTik-RouterOS."
risk: intrusive
tags:
  - "intrusive"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8291 --script mikrotik-routeros-username-brute  --script-args=wordlist=<wordlist path>  <target>"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mikrotik-routeros-username-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mikrotik-routeros-username-brute.html"
---

Attempts to enumerate valid usernames on MikroTik devices running the Winbox service on port 8291 in MikroTik-RouterOS.
This script takes a wordlist from the user and modifies a baseline payload by
adding the username to it. If the server responds with 35 bytes, the username
is invalid; if the response is 51 bytes, the username is valid.
