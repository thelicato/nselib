---
title: "banner"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "A simple banner grabber which connects to an open TCP port and prints out anything sent by the listening service within five seconds."
risk: safe
tags:
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script=banner <target>"
outputPreview:
  - "21/tcp open  ftp"
  - "|_ banner: 220 FTP version 1.0\\x0D\\x0A"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/banner.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/banner.html"
---

A simple banner grabber which connects to an open TCP port and prints out anything sent by the listening service within five seconds.
The banner will be truncated to fit into a single line, but an extra line may be printed for every
increase in the level of verbosity requested on the command line.
