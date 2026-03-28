---
title: "smtp-enum-users"
source: official
category: "Auth"
categories:
  - "auth"
  - "external"
  - "intrusive"
shortDescription: "Attempts to enumerate the users on a SMTP server by issuing the VRFY, EXPN or RCPT TO\ncommands. The goal of this script is to discover all the user accounts in the remote\nsystem."
risk: intrusive
tags:
  - "auth"
  - "external"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script smtp-enum-users.nse [--script-args smtp-enum-users.methods={EXPN,...},...] -p 25,465,587 <host>"
outputPreview:
  - "Host script results:"
  - "| smtp-enum-users:"
  - "|_  RCPT, root"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-enum-users.html"
---

Attempts to enumerate the users on a SMTP server by issuing the VRFY, EXPN or RCPT TO
commands. The goal of this script is to discover all the user accounts in the remote
system.
The script will output the list of user names that were found. The script will stop
querying the SMTP server if authentication is enforced. If an error occurs while testing
the target host, the error will be printed with the list of any combinations that were
found prior to the error.
The user can specify which methods to use and in which order. The script will ignore
repeated methods. If not specified the script will use the RCPT first, then VRFY and EXPN.
An example of how to specify the methods to use and the order is the following:
smtp-enum-users.methods={EXPN,RCPT,VRFY}
