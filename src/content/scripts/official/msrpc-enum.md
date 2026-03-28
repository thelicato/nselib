---
title: "msrpc-enum"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Queries an MSRPC endpoint mapper for a list of mapped\nservices and displays the gathered information."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap <target> --script=msrpc-enum"
outputPreview:
  - "PORT    STATE SERVICE      REASON"
  - "445/tcp open  microsoft-ds syn-ack"
  - "Host script results:"
  - "| msrpc-enum:"
  - "|"
  - "|     uuid: 3c4728c5-f0ab-448b-bda1-6ce01eb0a6d5"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/msrpc-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/msrpc-enum.html"
---

Queries an MSRPC endpoint mapper for a list of mapped
services and displays the gathered information.
As it is using smb library, you can specify optional
username and password to use.
Script works much like Microsoft's rpcdump tool
or dcedump tool from SPIKE fuzzer.
