---
title: "cvs-brute-repository"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to guess the name of the CVS repositories hosted on the remote server.\nWith knowledge of the correct repository name, usernames and passwords can be guessed."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2401 --script cvs-brute-repository <host>"
outputPreview:
  - "PORT     STATE SERVICE    REASON"
  - "2401/tcp open  cvspserver syn-ack"
  - "| cvs-brute-repository:"
  - "|   Repositories"
  - "|     /myrepos"
  - "|     /demo"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cvs-brute-repository.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cvs-brute-repository.html"
---

Attempts to guess the name of the CVS repositories hosted on the remote server.
With knowledge of the correct repository name, usernames and passwords can be guessed.
