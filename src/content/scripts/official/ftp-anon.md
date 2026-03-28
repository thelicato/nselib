---
title: "ftp-anon"
source: official
category: "Default"
categories:
  - "default"
  - "auth"
  - "safe"
shortDescription: "Checks if an FTP server allows anonymous logins."
risk: safe
tags:
  - "default"
  - "auth"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "| ftp-anon: Anonymous FTP login allowed (FTP code 230)"
  - "| -rw-r--r--   1 1170     924            31 Mar 28  2001 .banner"
  - "| d--x--x--x   2 root     root         1024 Jan 14  2002 bin"
  - "| d--x--x--x   2 root     root         1024 Aug 10  1999 etc"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-anon.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-anon.html"
---

Checks if an FTP server allows anonymous logins.
If anonymous is allowed, gets a directory listing of the root directory
and highlights writeable files.
