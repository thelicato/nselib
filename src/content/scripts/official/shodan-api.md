---
title: "shodan-api"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Queries Shodan API for given targets and produces similar output to\na -sV nmap scan. The ShodanAPI key can be set with the 'apikey' script\nargument, or hardcoded in the .nse file itself. You can get a free key from\n https://developer.shodan.io"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script shodan-api x.y.z.0/24 -sn -Pn -n --script-args 'shodan-api.outfile=potato.csv,shodan-api.apikey=SHODANAPIKEY'\n nmap --script shodan-api --script-args 'shodan-api.target=x.y.z.a,shodan-api.apikey=SHODANAPIKEY'"
outputPreview:
  - "| shodan-api: Report for 2600:3c01::f03c:91ff:fe18:bb2f (scanme.nmap.org)"
  - "| PORT\tPROTO\tPRODUCT      VERSION"
  - "| 80   tcp   Apache httpd"
  - "| 3306 tcp   MySQL        5.5.40-0+wheezy1"
  - "| 22   tcp   OpenSSH      6.0p1 Debian 4+deb7u2"
  - "|_443  tcp"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/shodan-api.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/shodan-api.html"
---

Queries Shodan API for given targets and produces similar output to
a -sV nmap scan. The ShodanAPI key can be set with the 'apikey' script
argument, or hardcoded in the .nse file itself. You can get a free key from
 https://developer.shodan.io
N.B if you want this script to run completely passively make sure to
include the -sn -Pn -n flags.
