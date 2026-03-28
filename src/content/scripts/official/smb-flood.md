---
title: "smb-flood"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "dos"
shortDescription: "Exhausts a remote SMB server's connection limit by by opening as many\nconnections as we can. Most implementations of SMB have a hard global\nlimit of 11 connections for user accounts and 10 connections for\nanonymous. Once that limit is reached, further connections are\ndenied. This script exploits that limit by taking up all the\nconnections and holding them."
risk: intrusive
tags:
  - "intrusive"
  - "dos"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-flood.nse -p445 <host>\nsudo nmap -sU -sS --script smb-flood.nse -p U:137,T:139 <host>"
outputPreview:
  - "Target down 30 times in 1m."
  - "320 connections made, 11 max concurrent connections."
  - "10 connections on average required to deny service."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-flood.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-flood.html"
---

Exhausts a remote SMB server's connection limit by by opening as many
connections as we can. Most implementations of SMB have a hard global
limit of 11 connections for user accounts and 10 connections for
anonymous. Once that limit is reached, further connections are
denied. This script exploits that limit by taking up all the
connections and holding them.
This works better with a valid user account, because Windows reserves
one slot for valid users. So, no matter how many anonymous connections
are taking up spaces, a single valid user can still log in.
This is *not* recommended as a general purpose script, because a) it
is designed to harm the server and has no useful output, and b) it
never ends (until timeout).
