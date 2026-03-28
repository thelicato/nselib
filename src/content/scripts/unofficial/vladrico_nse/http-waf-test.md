---
title: "http-waf-test"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Tries to detect the presence of a web application firewall and its type and\nversion."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "vladrico/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-waf-fingerprint <targets>\nnmap --script=http-waf-fingerprint --script-args http-waf-fingerprint.intensive=1 <targets>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-waf-fingerprint:"
  - "|   Detected WAF"
  - "|_    BinarySec version 3.2.2"
author: "Hani Benhabiles (upstream: VladRico/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/VladRico/nmap-scripts/blob/master/http-waf-test.nse"
---

Imported from the upstream repository [VladRico/nmap-scripts](https://github.com/VladRico/nmap-scripts).
Tries to detect the presence of a web application firewall and its type and
version.
This works by sending a number of requests and looking in the responses for
known behavior and fingerprints such as Server header, cookies and headers
values. Intensive mode works by sending additional WAF specific requests to
detect certain behaviour.
Credit to wafw00f and w3af for some fingerprints.
