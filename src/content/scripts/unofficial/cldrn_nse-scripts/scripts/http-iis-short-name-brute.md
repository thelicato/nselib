---
title: "http-iis-short-name-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to brute force the 8.3 filenames (commonly known as short names) of files and directories in the root folder of vulnerable IIS servers. This script is an implementation of the PoC \"iis shortname scanner\"."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-iis-short-name-brute <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-iis-short-name-brute:"
  - "|   VULNERABLE:"
  - "|   Microsoft IIS tilde character \"~\" short name disclosure and denial of service"
  - "|     State: VULNERABLE (Exploitable)"
author: "Jesper Kueckelhahn, Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-iis-short-name-brute.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to brute force the 8.3 filenames (commonly known as short names) of files and directories in the root folder of vulnerable IIS servers. This script is an implementation of the PoC "iis shortname scanner".
The script uses ~,? and * to bruteforce the short name of files present in the IIS document root. Short names have a restriction of 6 character file name followed by a three character extension.
Notes:
* The script might have to be run twice (according to the original author).
* Tested against IIS 6.0 and 5.1.
References:
* Research paper: http://soroush.secproject.com/downloadable/microsoft_iis_tilde_character_vulnerability_feature.pdf
* IIS Shortname Scanner PoC: http://code.google.com/p/iis-shortname-scanner-poc/
