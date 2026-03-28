---
title: "jdwp-exec"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
shortDescription: "Attempts to exploit java's remote debugging port. When remote debugging\nport is left open, it is possible to inject java bytecode and achieve\nremote code execution. This script abuses this to inject and execute\na Java class file that executes the supplied shell command and returns\nits output."
risk: intrusive
tags:
  - "exploit"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sT <target> -p <port> --script=+jdwp-exec --script-args cmd=\"date\""
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2010/tcp open  search  syn-ack"
  - "| jdwp-exec:"
  - "|   date output:"
  - "|   Sat Aug 11 15:27:21 Central European Daylight Time 2012"
  - "|_"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/jdwp-exec.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/jdwp-exec.html"
---

Attempts to exploit java's remote debugging port. When remote debugging
port is left open, it is possible to inject java bytecode and achieve
remote code execution. This script abuses this to inject and execute
a Java class file that executes the supplied shell command and returns
its output.
The script injects the JDWPSystemInfo class from
nselib/jdwp-class/ and executes its run() method which
accepts a shell command as its argument.
