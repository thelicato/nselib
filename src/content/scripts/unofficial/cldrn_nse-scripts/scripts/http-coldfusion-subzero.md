---
title: "http-coldfusion-subzero"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
shortDescription: "Attempts to retrieve the version, installation path and password.properties files in vulnerable ColdFusion 9/10 installations."
risk: intrusive
tags:
  - "exploit"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-coldfusion-subzero <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-coldfusion-subzero:"
  - "|   absolute_path: C:\\inetpub\\wwwroot\\CFIDE\\adminapi\\customtags"
  - "|   version: 9"
  - "|   password_properties: #Fri Mar 02 17:03:01 CST 2012"
author: "Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-coldfusion-subzero.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to retrieve the version, installation path and password.properties files in vulnerable ColdFusion 9/10 installations.
This was based on the exploit 'ColdSub-Zero.pyFusion v2'.
