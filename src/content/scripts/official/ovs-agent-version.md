---
title: "ovs-agent-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the version of an Oracle Virtual Server Agent by fingerprinting\nresponses to an HTTP GET request and an XML-RPC method call."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT     STATE SERVICE       REASON  VERSION"
  - "8899/tcp open  ssl/ovs-agent syn-ack Oracle Virtual Server Agent 3.0 (BaseHTTP 0.3; Python SimpleXMLRPCServer; Python 2.5.2)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ovs-agent-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ovs-agent-version.html"
---

Detects the version of an Oracle Virtual Server Agent by fingerprinting
responses to an HTTP GET request and an XML-RPC method call.
Version 2.2 of Virtual Server Agent returns a distinctive string in response to an
HTTP GET request. However versions 3.0 and 3.0.1 return a generic response that
looks like any other BaseHTTP/SimpleXMLRPCServer. Versions 2.2 and 3.0 return a
distinctive error message in response to a system.listMethods
XML-RPC call, which however does not distinguish the two versions. Version 3.0.1
returns a response to system.listMethods that is different from
that of both version 2.2 and 3.0. Therefore we use this strategy: (1.) Send a
GET request. If the version 2.2 string is returned, return "2.2". (2.) Send a
 system.listMethods method call. If an error is
returned, return "3.0" or "3.0.1", depending on the specific format of the
error.
