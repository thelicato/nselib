---
title: "ike-mode"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Obtains information (such as vendor and device type where available) from an\nIKE service by sending four packets to the host.  This scripts tests with both\nMain and Aggressive Mode and sends multiple transforms per request."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "version"
  - "aerissecure/nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sU -sV -p 500 <target>\nnmap -sU -p 500 --script ike-mode <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON       VERSION"
  - "500/udp open  isakmp  udp-response Fortinet FortiGate v5"
  - "| ike-mode:"
  - "|   mode: Aggressive"
  - "|   vendor_id: Fortinet FortiGate v5"
  - "|   attributes:"
author: "Jesper Kueckelhahn (upstream: aerissecure/nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/aerissecure/nse/blob/master/ike-mode.nse"
---

Imported from the upstream repository [aerissecure/nse](https://github.com/aerissecure/nse).
Obtains information (such as vendor and device type where available) from an
IKE service by sending four packets to the host.  This scripts tests with both
Main and Aggressive Mode and sends multiple transforms per request.
