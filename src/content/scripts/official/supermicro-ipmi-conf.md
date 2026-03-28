---
title: "supermicro-ipmi-conf"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Attempts to download an unprotected configuration file containing plain-text\nuser credentials in vulnerable Supermicro Onboard IPMI controllers."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p49152 --script supermicro-ipmi-conf <target>"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "49152/tcp open  unknown syn-ack"
  - "| supermicro-ipmi-conf:"
  - "|   VULNERABLE:"
  - "|   Supermicro IPMI/BMC configuration file disclosure"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/supermicro-ipmi-conf.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/supermicro-ipmi-conf.html"
---

Attempts to download an unprotected configuration file containing plain-text
user credentials in vulnerable Supermicro Onboard IPMI controllers.
The script connects to port 49152 and issues a request for "/PSBlock" to
download the file. This configuration file contains users with their passwords
in plain text.
