---
title: "creds-summary"
source: official
category: "Auth"
categories:
  - "auth"
  - "default"
  - "safe"
shortDescription: "Lists all discovered credentials (e.g. from brute force and default password checking scripts) at end of scan."
risk: safe
tags:
  - "auth"
  - "default"
  - "safe"
  - "postrule"
scriptTypes:
  - "postrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "| creds-summary:"
  - "|   10.10.10.10"
  - "|     22/ssh"
  - "|       lisbon:jane - Account is valid"
  - "|   10.10.10.20"
  - "|     21/ftp"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/creds-summary.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/creds-summary.html"
---

Lists all discovered credentials (e.g. from brute force and default password checking scripts) at end of scan.
