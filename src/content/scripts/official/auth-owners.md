---
title: "auth-owners"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Attempts to find the owner of an open TCP port by querying an auth\ndaemon which must also be open on the target system. The auth service,\nalso known as identd, normally runs on port 113."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "21/tcp   open     ftp       ProFTPD 1.3.1"
  - "|_ auth-owners: nobody"
  - "22/tcp   open     ssh       OpenSSH 4.3p2 Debian 9etch2 (protocol 2.0)"
  - "|_ auth-owners: root"
  - "25/tcp   open     smtp      Postfix smtpd"
  - "|_ auth-owners: postfix"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/auth-owners.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/auth-owners.html"
---

Attempts to find the owner of an open TCP port by querying an auth
daemon which must also be open on the target system. The auth service,
also known as identd, normally runs on port 113.
