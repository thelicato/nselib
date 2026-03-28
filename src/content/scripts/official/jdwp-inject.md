---
title: "jdwp-inject"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
shortDescription: "Attempts to exploit java's remote debugging port. When remote debugging port\nis left open, it is possible to inject java bytecode and achieve remote code\nexecution. This script allows injection of arbitrary class files."
risk: intrusive
tags:
  - "exploit"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sT <target> -p <port> --script=+jdwp-inject --script-args filename=HelloWorld.class"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2010/tcp open  search  syn-ack"
  - "| jdwp-inject:"
  - "|_  Hello world from the remote machine!"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/jdwp-inject.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/jdwp-inject.html"
---

Attempts to exploit java's remote debugging port. When remote debugging port
is left open, it is possible to inject java bytecode and achieve remote code
execution. This script allows injection of arbitrary class files.
After injection, class' run() method is executed.
Method run() has no parameters, and is expected to return a string.
You must specify your own .class file to inject by filename argument.
See nselib/data/jdwp-class/README for more.
