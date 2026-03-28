---
title: "http-coldfusion-subzero"
source: official
category: "Exploit"
categories:
  - "exploit"
shortDescription: "Attempts to retrieve version, absolute path of administration panel and the\nfile 'password.properties' from vulnerable installations of ColdFusion 9 and\n10."
risk: intrusive
tags:
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-coldfusion-subzero <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-coldfusion-subzero:"
  - "|   absolute_path: C:\\inetpub\\wwwroot\\CFIDE\\adminapi\\customtags"
  - "|   version: 9"
  - "|   password_properties: #Fri Mar 02 17:03:01 CST 2012"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-coldfusion-subzero.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-coldfusion-subzero.html"
---

Attempts to retrieve version, absolute path of administration panel and the
file 'password.properties' from vulnerable installations of ColdFusion 9 and
10.
This was based on the exploit 'ColdSub-Zero.pyFusion v2'.
