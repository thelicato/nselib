---
title: "ike-version"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Obtains information (such as vendor and device type where available) from an\nIKE service by sending four packets to the host. This scripts tests with both\nMain and Aggressive Mode and sends multiple transforms per request."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -sV -p 500 <target>\nnmap -sU -p 500 --script ike-version <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON       VERSION"
  - "500/udp open  isakmp  udp-response Fortinet FortiGate v5"
  - "| ike-version:"
  - "|   vendor_id: Fortinet FortiGate v5"
  - "|   attributes:"
  - "|     Dead Peer Detection v1.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ike-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ike-version.html"
---

Obtains information (such as vendor and device type where available) from an
IKE service by sending four packets to the host. This scripts tests with both
Main and Aggressive Mode and sends multiple transforms per request.
