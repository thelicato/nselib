---
title: "http-tenda-enum"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Tenda W309R allows an attacker to access the configuration detailed with no authentication.\nFirmware Tested : V5.07.46"
risk: safe
tags:
  - "safe"
  - "discovery"
  - "s4n7h0/nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap host --script http-tenda --script-args user=tenda\n80/tcp open  http\n| http-tenda:\n|   PPPoE Username : home_user\n|   PPPoE Password : 12345\n|   Wireless Password : 12345678\n|   Clone MAC : AA:AA:AA:AA:AA:AA\n|_  Face MAC : BB:BB:BB:BB:BB:BB\n-"
outputPreview: []
author: "Sanoop Thomas a.k.a @s4n7h0 (upstream: s4n7h0/NSE)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/s4n7h0/NSE/blob/master/http-tenda-enum.nse"
---

Imported from the upstream repository [s4n7h0/NSE](https://github.com/s4n7h0/NSE).
Tenda W309R allows an attacker to access the configuration detailed with no authentication.
Firmware Tested : V5.07.46
Thanks & Credits : Mahesh Gavkar, Samandeep Singh (@samanL33T), Amit Ghadigaonkar
