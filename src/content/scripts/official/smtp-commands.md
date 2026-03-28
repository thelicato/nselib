---
title: "smtp-commands"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to use EHLO and HELP to gather the Extended commands supported by an\nSMTP server."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script smtp-commands.nse [--script-args smtp-commands.domain=<domain>] -pT:25,465,587 <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON  VERSION"
  - "25/tcp open  smtp    syn-ack Microsoft ESMTP 6.0.3790.3959"
  - "| smtp-commands: SMTP.domain.com Hello [172.x.x.x], TURN, SIZE, ETRN, PIPELINING, DSN, ENHANCEDSTATUSCODES, 8bitmime, BINARYMIME, CHUNKING, VRFY, X-EXPS GSSAPI NTLM LOGIN, X-EXPS=LOGIN, AUTH GSSAPI NTLM LOGIN, AUTH=LOGIN, X-LINK2STATE, XEXCH50, OK"
  - "|_ This server supports the following commands: HELO EHLO STARTTLS RCPT DATA RSET MAIL QUIT HELP AUTH TURN ETRN BDAT VRFY"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-commands.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-commands.html"
---

Attempts to use EHLO and HELP to gather the Extended commands supported by an
SMTP server.
