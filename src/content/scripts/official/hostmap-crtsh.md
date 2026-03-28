---
title: "hostmap-crtsh"
source: official
category: "External"
categories:
  - "external"
  - "discovery"
shortDescription: "Finds subdomains of a web server by querying Google's Certificate Transparency\nlogs database ( https://crt.sh )."
risk: informational
tags:
  - "external"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script hostmap-crtsh --script-args 'hostmap-crtsh.prefix=hostmap-' <targets>"
outputPreview:
  - "Host script results:"
  - "| hostmap-crtsh:"
  - "|   subdomains:"
  - "|     svn.nmap.org"
  - "|     www.nmap.org"
  - "|_  filename: output_nmap.org"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hostmap-crtsh.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hostmap-crtsh.html"
---

Finds subdomains of a web server by querying Google's Certificate Transparency
logs database ( https://crt.sh ).
The script will run against any target that has a name, either specified on the
command line or obtained via reverse-DNS.
NSE implementation of ctfr.py ( https://github.com/UnaPibaGeek/ctfr.git ) by Sheila Berta.
