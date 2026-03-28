---
title: "hostmap-crtsh"
source: unofficial
category: "External"
categories:
  - "external"
  - "discovery"
shortDescription: "Finds subdomains of a web server by querying Google's\n Certificate Transparency logs database (https://crt.sh)."
risk: informational
tags:
  - "external"
  - "discovery"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
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
author: "Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/hostmap-crtsh.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Finds subdomains of a web server by querying Google's
 Certificate Transparency logs database (https://crt.sh).
NSE implementation of ctfr.py (https://github.com/UnaPibaGeek/ctfr.git) by Sheila Berta.
References:
* www.certificate-transparency.org
