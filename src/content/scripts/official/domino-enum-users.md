---
title: "domino-enum-users"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Attempts to discover valid IBM Lotus Domino users and download their ID files by exploiting the CVE-2006-5835 vulnerability."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script domino-enum-users -p 1352 <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "1352/tcp open  lotusnotes"
  - "| domino-enum-users:"
  - "|   User \"Patrik Karlsson\" found, but not ID file could be downloaded"
  - "|   Successfully stored \"FFlintstone\" in /tmp/FFlintstone.id"
  - "|_  Successfully stored \"MJacksson\" in /tmp/MJacksson.id"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/domino-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/domino-enum-users.html"
---

Attempts to discover valid IBM Lotus Domino users and download their ID files by exploiting the CVE-2006-5835 vulnerability.
