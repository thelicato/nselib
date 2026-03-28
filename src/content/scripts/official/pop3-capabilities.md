---
title: "pop3-capabilities"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves POP3 email server capabilities."
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
usage: "nmap -sV -sC <target>"
outputPreview:
  - "110/tcp open  pop3"
  - "|_ pop3-capabilities: USER CAPA RESP-CODES UIDL PIPELINING STLS TOP SASL(PLAIN)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pop3-capabilities.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pop3-capabilities.html"
---

Retrieves POP3 email server capabilities.
POP3 capabilities are defined in RFC 2449. The CAPA command allows a client to
ask a server what commands it supports and possibly any site-specific policy.
Besides the list of supported commands, the IMPLEMENTATION string giving the
server version may be available.
