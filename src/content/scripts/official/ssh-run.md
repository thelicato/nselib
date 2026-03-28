---
title: "ssh-run"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Runs remote command on ssh server and returns command output."
risk: intrusive
tags:
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 22 --script=ssh-run \\\n--script-args=\"ssh-run.cmd=ls -l /, ssh-run.username=myusername, ssh-run.password=mypassword\" <target>"
outputPreview:
  - "22/tcp open  ssh"
  - "| ssh-run:"
  - "|   output:"
  - "|     total 91"
  - "|     drwxr-xr-x   2 root root  4096 Jun  5 11:56 bin"
  - "|     drwxr-xr-x   4 root root  3072 Jun  5 12:42 boot"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssh-run.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssh-run.html"
---

Runs remote command on ssh server and returns command output.
