---
title: "rmi-vuln-classloader"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Tests whether Java rmiregistry allows class loading. The default\nconfiguration of rmiregistry allows loading classes from remote URLs,\nwhich can lead to remote code execution. The vendor (Oracle/Sun)\nclassifies this as a design feature."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=rmi-vuln-classloader -p 1099 <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1099/tcp open  rmiregistry"
  - "| rmi-vuln-classloader:"
  - "|   VULNERABLE:"
  - "|   RMI registry default configuration remote code execution vulnerability"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rmi-vuln-classloader.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rmi-vuln-classloader.html"
---

Tests whether Java rmiregistry allows class loading. The default
configuration of rmiregistry allows loading classes from remote URLs,
which can lead to remote code execution. The vendor (Oracle/Sun)
classifies this as a design feature.
Based on original Metasploit module by mihi.
