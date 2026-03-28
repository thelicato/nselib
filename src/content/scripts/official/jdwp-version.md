---
title: "jdwp-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the Java Debug Wire Protocol. This protocol is used by Java programs\nto be debugged via the network. It should not be open to the public Internet,\nas it does not provide any security against malicious attackers who can inject\ntheir own bytecode into the debugged process."
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
  - "PORT     STATE SERVICE VERSION"
  - "9999/tcp open  jdwp    Java Debug Wire Protocol (Reference Implementation) version 1.6 1.6.0_17"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/jdwp-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/jdwp-version.html"
---

Detects the Java Debug Wire Protocol. This protocol is used by Java programs
to be debugged via the network. It should not be open to the public Internet,
as it does not provide any security against malicious attackers who can inject
their own bytecode into the debugged process.
Documentation for JDWP is available at
 http://java.sun.com/javase/6/docs/technotes/guides/jpda/jdwp-spec.html
