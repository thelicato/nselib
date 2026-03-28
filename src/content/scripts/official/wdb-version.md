---
title: "wdb-version"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "version"
  - "discovery"
  - "vuln"
shortDescription: "Detects vulnerabilities and gathers information (such as version\nnumbers and hardware support) from VxWorks Wind DeBug agents."
risk: safe
tags:
  - "default"
  - "safe"
  - "version"
  - "discovery"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 17185 --script wdb-version <target>"
outputPreview:
  - "17185/udp open  wdb  Wind DeBug Agent 2.0"
  - "| wdb-version:"
  - "|   VULNERABLE: Wind River Systems VxWorks debug service enabled. See http://www.kb.cert.org/vuls/id/362332"
  - "|   Agent version: 2.0"
  - "|   VxWorks version: VxWorks5.4.2"
  - "|   Board Support Package: PCD ARM940T REV 1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/wdb-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/wdb-version.html"
---

Detects vulnerabilities and gathers information (such as version
numbers and hardware support) from VxWorks Wind DeBug agents.
Wind DeBug is a SunRPC-type service that is enabled by default on many devices
that use the popular VxWorks real-time embedded operating system. H.D. Moore
of Metasploit has identified several security vulnerabilities and design flaws
with the service, including weakly-hashed passwords and raw memory dumping.
See also:
 http://www.kb.cert.org/vuls/id/362332
