---
title: "impress-remote-discover"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Tests for the presence of the LibreOffice Impress Remote server.\nChecks if a PIN is valid if provided and will bruteforce the PIN\nif requested."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 1599 --script impress-remote-discover <host>"
outputPreview:
  - "PORT     STATE SERVICE        Version"
  - "1599/tcp open  impress-remote LibreOffice Impress remote 4.3.3.2"
  - "| impress-remote-discover:"
  - "|   Impress Version: 4.3.3.2"
  - "|   Remote PIN: 0000"
  - "|_  Client Name used: Firefox OS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/impress-remote-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/impress-remote-discover.html"
---

Tests for the presence of the LibreOffice Impress Remote server.
Checks if a PIN is valid if provided and will bruteforce the PIN
if requested.
When a remote first contacts Impress and sends a client name and PIN, the user
must open the "Slide Show -> Impress Remote" menu and enter the matching PIN at
the prompt, which shows the client name. Subsequent connections with the same
client name may then use the same PIN without user interaction. If no PIN has
been set for the session, each PIN attempt will result in a new prompt in the
"Impress Remote" menu. Brute-forcing the PIN, therefore, requires that the user
has entered a PIN for the same client name, and will result in lots of extra
prompts in the "Impress Remote" menu.
