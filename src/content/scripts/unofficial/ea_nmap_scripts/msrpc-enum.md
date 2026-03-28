---
title: "msrpc-enum"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Script queries MSRPC endpoint mapper for a list of mapped\nservices and displays the gathered information."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap <target> --script=msrpc-enum"
outputPreview:
  - "PORT    STATE SERVICE      REASON"
  - "445/tcp open  microsoft-ds syn-ack"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/msrpc-enum.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Script queries MSRPC endpoint mapper for a list of mapped
services and displays the gathered information.
As it is using smb library, you can specify optional
username and password to use.
Script works much like Microsoft's rpcdump tool
or dcedump tool from SPIKE fuzzer.
