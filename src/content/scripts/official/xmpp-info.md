---
title: "xmpp-info"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
  - "version"
shortDescription: "Connects to XMPP server (port 5222) and collects server information such as:\nsupported auth mechanisms, compression methods, whether TLS is supported\nand mandatory, stream management, language, support of In-Band registration,\nserver capabilities. If possible, studies server vendor."
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON  VERSION"
  - "5222/tcp open  jabber  syn-ack ejabberd (Protocol 1.0)"
  - "| xmpp-info:"
  - "|   Respects server name"
  - "|   info:"
  - "|     xmpp:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/xmpp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/xmpp-info.html"
---

Connects to XMPP server (port 5222) and collects server information such as:
supported auth mechanisms, compression methods, whether TLS is supported
and mandatory, stream management, language, support of In-Band registration,
server capabilities. If possible, studies server vendor.
