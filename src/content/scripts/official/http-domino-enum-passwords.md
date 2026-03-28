---
title: "http-domino-enum-passwords"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Attempts to enumerate the hashed Domino Internet Passwords that are (by\ndefault) accessible by all authenticated users. This script can also download\nany Domino ID Files attached to the Person document. Passwords are presented\nin a form suitable for running in John the Ripper."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-domino-enum-passwords -p 80 <host> --script-args http-domino-enum-passwords.username='patrik karlsson',http-domino-enum-passwords.password=secret"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "80/tcp   open  http    syn-ack"
  - "| http-domino-enum-passwords:"
  - "|   Information"
  - "|     Information retrieved as: \"Jim Brass\""
  - "|   Internet hashes (salted, jtr: --format=DOMINOSEC)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-domino-enum-passwords.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-domino-enum-passwords.html"
---

Attempts to enumerate the hashed Domino Internet Passwords that are (by
default) accessible by all authenticated users. This script can also download
any Domino ID Files attached to the Person document. Passwords are presented
in a form suitable for running in John the Ripper.
The passwords may be stored in two forms ( http://comments.gmane.org/gmane.comp.security.openwall.john.user/785 ):
Saltless (legacy support?)
 Example: 355E98E7C7B59BD810ED845AD0FD2FC4
 John's format name: lotus5

 Salted (also known as "More Secure Internet Password")
 Example: (GKjXibCW2Ml6juyQHUoP)
 John's format name: dominosec

It appears as if form based authentication is enabled, basic authentication
still works. Therefore the script should work in both scenarios. Valid
credentials can either be supplied directly using the parameters username
and password or indirectly from results of http-brute or http-form-brute.
