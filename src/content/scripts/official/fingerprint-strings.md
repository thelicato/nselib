---
title: "fingerprint-strings"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Prints the readable strings from service fingerprints of unknown services."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script fingerprint-strings <target>"
outputPreview:
  - "| fingerprint-strings:"
  - "|   DNSStatusRequest, GenericLines, LANDesk-RC, TLSSessionReq:"
  - "|     bobo"
  - "|     bobobo"
  - "|   GetRequest, HTTPOptions, LPDString, NULL, RTSPRequest, giop, oracle-tns:"
  - "|     bobobo"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/fingerprint-strings.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/fingerprint-strings.html"
---

Prints the readable strings from service fingerprints of unknown services.
Nmap's service and application version detection engine sends named probes to
target services and tries to identify them based on the response. When there is
no match, Nmap produces a service fingerprint for submission. Sometimes,
inspecting this fingerprint can give clues as to the identity of the service.
However, the fingerprint is encoded and wrapped to ensure it doesn't lose data,
which can make it hard to read.
This script simply unwraps the fingerprint and prints the readable ASCII strings
it finds below the name of the probe it responded to. The probe names are taken
from the nmap-service-probes file, not from the response.
