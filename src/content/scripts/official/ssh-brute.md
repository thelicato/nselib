---
title: "ssh-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute-force password guessing against ssh servers."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 22 --script ssh-brute --script-args userdb=users.lst,passdb=pass.lst,ssh-brute.timeout=4s <target>"
outputPreview:
  - "22/ssh open  ssh"
  - "| ssh-brute:"
  - "|  Accounts"
  - "|    username:password"
  - "|  Statistics"
  - "|_   Performed 32 guesses in 25 seconds."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssh-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssh-brute.html"
---

Performs brute-force password guessing against ssh servers.
