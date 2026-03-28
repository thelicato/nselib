---
title: "jdwp-info"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
shortDescription: "Attempts to exploit java's remote debugging port. When remote\ndebugging port is left open, it is possible to inject java bytecode\nand achieve remote code execution. This script injects and execute a\nJava class file that returns remote system information."
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sT <target> -p <port> --script=+jdwp-info"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2010/tcp open  search  syn-ack"
  - "| jdwp-info:"
  - "|   Available processors: 1"
  - "|   Free memory: 15331736"
  - "|   File system root: A:\\"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/jdwp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/jdwp-info.html"
---

Attempts to exploit java's remote debugging port. When remote
debugging port is left open, it is possible to inject java bytecode
and achieve remote code execution. This script injects and execute a
Java class file that returns remote system information.
