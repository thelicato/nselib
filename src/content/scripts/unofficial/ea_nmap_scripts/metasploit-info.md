---
title: "metasploit-info"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "safe"
shortDescription: "Script gathers info from the Metasploit rpc service.\nIt requires a valid login pair. After authentication it\ntries to determine Metasploit version and deduce the OS type.\nThen it creates a new console and executes few commands\nto get additional info.\nReferences:\n * http://wiki.msgpack.org/display/MSGPACK/Format+specification\n *  https://community.rapid7.com/docs/DOC-1516 Metasploit RPC API Guide"
risk: safe
tags:
  - "intrusive"
  - "safe"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap <target> --script=metasploit-info --script-args username=root,password=root"
outputPreview:
  - "55553/tcp open  metasploit-msgrpc syn-ack"
  - "| metasploit-info:"
  - "|   Metasploit version: 4.4.0-dev Ruby version: 1.9.3 i386-mingw32 2012-02-16 API version: 1.0"
  - "|   Additional info:"
  - "|   Host Name:                 WIN"
  - "|   OS Name:                   Microsoft Windows XP Professional"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/metasploit-info.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Script gathers info from the Metasploit rpc service.
It requires a valid login pair. After authentication it
tries to determine Metasploit version and deduce the OS type.
Then it creates a new console and executes few commands
to get additional info.
References:
 * http://wiki.msgpack.org/display/MSGPACK/Format+specification
 *  https://community.rapid7.com/docs/DOC-1516 Metasploit RPC API Guide
