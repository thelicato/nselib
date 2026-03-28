---
title: "ssh2-enum-algos"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Reports the number of algorithms (for encryption, compression, etc.) that\nthe target SSH2 server offers. If verbosity is set, the offered algorithms\nare each listed by type."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script ssh2-enum-algos target"
outputPreview:
  - "PORT   STATE SERVICE"
  - "22/tcp open  ssh"
  - "| ssh2-enum-algos:"
  - "|   kex_algorithms (4)"
  - "|       diffie-hellman-group-exchange-sha256"
  - "|       diffie-hellman-group-exchange-sha1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssh2-enum-algos.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssh2-enum-algos.html"
---

Reports the number of algorithms (for encryption, compression, etc.) that
the target SSH2 server offers. If verbosity is set, the offered algorithms
are each listed by type.
If the "client to server" and "server to client" algorithm lists are identical
(order specifies preference) then the list is shown only once under a combined
type.
