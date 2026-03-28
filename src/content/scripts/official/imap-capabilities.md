---
title: "imap-capabilities"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Retrieves IMAP email server capabilities."
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
  - "143/tcp open  imap"
  - "|_ imap-capabilities: LOGINDISABLED IDLE IMAP4 LITERAL+ STARTTLS NAMESPACE IMAP4rev1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/imap-capabilities.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/imap-capabilities.html"
---

Retrieves IMAP email server capabilities.
IMAP4rev1 capabilities are defined in RFC 3501. The CAPABILITY command
allows a client to ask a server what commands it supports and possibly
any site-specific policy.
