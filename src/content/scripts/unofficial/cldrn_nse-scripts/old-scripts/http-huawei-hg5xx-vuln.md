---
title: "http-huawei-hg5xx-vuln"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "version"
  - "vuln"
shortDescription: "Detects Huawei modems models HG530x, HG520x, HG510x (and possibly others...) vulnerable to a remote credential and information disclosure vulnerability. It also extracts the PPPoE credentials\nand other interesting configuration values."
risk: intrusive
tags:
  - "exploit"
  - "version"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-huawei-hg5xx-vuln <target>"
outputPreview:
  - "PORT   STATE SERVICE VERSION"
  - "80/tcp open  http    Huawei aDSL modem EchoLife HG530 (V100R001B122gTelmex) 4.07 -- UPnP/1.0 (ZyXEL ZyWALL 2)"
  - "| http-huawei-hg5xx-vuln:"
  - "|   VULNERABLE:"
  - "|   Remote credential and information disclosure in modems Huawei HG5XX"
  - "|     State: VULNERABLE (Exploitable)"
author: "Paulino Calderon <calderon () websec mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-huawei-hg5xx-vuln.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Detects Huawei modems models HG530x, HG520x, HG510x (and possibly others...) vulnerable to a remote credential and information disclosure vulnerability. It also extracts the PPPoE credentials
and other interesting configuration values.
Attackers can query the URIs "/Listadeparametros.html" and "/wanfun.js" to extract sensitive information
including PPPoE credentials, firmware version, model, gateway, dns servers and active connections among other values.
This script exploits two vulnerabilities. One was discovered and reported by Adiaz from Comunidad Underground de Mexico (http://underground.org.mx) and it allows attackers to extract the pppoe password. The configuration disclosure vulnerability was discovered by Pedro Joaquin (http://hakim.ws).
References:
*http://websec.ca/advisories/view/Huawei-HG520c-3.10.18.x-information-disclosure
*http://routerpwn.com/#huawei
