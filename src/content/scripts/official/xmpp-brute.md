---
title: "xmpp-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against XMPP (Jabber) instant messaging servers."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 5222 --script xmpp-brute <host>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "5222/tcp open  xmpp-client"
  - "| xmpp-brute:"
  - "|   Accounts"
  - "|     CampbellJ:arthur321 - Valid credentials"
  - "|     CampbellA:joan123 - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/xmpp-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/xmpp-brute.html"
---

Performs brute force password auditing against XMPP (Jabber) instant messaging servers.
