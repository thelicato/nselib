---
title: "http-dlink-backdoor"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Detects a firmware backdoor on some D-Link routers by changing the User-Agent\nto a \"secret\" value. Using the \"secret\" User-Agent bypasses authentication\nand allows admin access to the router."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-dlink-backdoor <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-dlink-backdoor:"
  - "|   VULNERABLE:"
  - "|   Firmware backdoor in some models of D-Link routers allow for admin password bypass"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-dlink-backdoor.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-dlink-backdoor.html"
---

Detects a firmware backdoor on some D-Link routers by changing the User-Agent
to a "secret" value. Using the "secret" User-Agent bypasses authentication
and allows admin access to the router.
The following router models are likely to be vulnerable: DIR-100, DIR-120,
DI-624S, DI-524UP, DI-604S, DI-604UP, DI-604+, TM-G5240
In addition, several Planex routers also appear to use the same firmware:
BRL-04UR, BRL-04CW
Reference: http://www.devttys0.com/2013/10/reverse-engineering-a-d-link-backdoor/
