---
title: "mmouse-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the RPA Tech Mobile Mouse\nservers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script mmouse-brute -p 51010 <host>"
outputPreview:
  - "PORT      STATE SERVICE"
  - "51010/tcp open  unknown"
  - "| mmouse-brute:"
  - "|   Accounts"
  - "|     vanilla - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mmouse-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mmouse-brute.html"
---

Performs brute force password auditing against the RPA Tech Mobile Mouse
servers.
The Mobile Mouse server runs on OS X, Windows and Linux and enables remote
control of the keyboard and mouse from an iOS device. For more information:
 http://mobilemouse.com/
