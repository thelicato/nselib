---
title: "http-iis-short-name-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to brute force the 8.3 filenames (commonly known as short names) of files and directories in the root folder\nof vulnerable IIS servers. This script is an implementation of the PoC \"iis shortname scanner\"."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-iis-short-name-brute <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-iis-short-name-brute:"
  - "|   VULNERABLE:"
  - "|   Microsoft IIS tilde character \"~\" short name disclosure and denial of service"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-iis-short-name-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-iis-short-name-brute.html"
---

Attempts to brute force the 8.3 filenames (commonly known as short names) of files and directories in the root folder
of vulnerable IIS servers. This script is an implementation of the PoC "iis shortname scanner".
The script uses ~,? and * to bruteforce the short name of files present in the IIS document root.
Short names have a restriction of 6 character file name followed by a three character extension.
