---
title: "http-waf-fingerprint"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Tries to detect the presence of a web application firewall and its type and\nversion."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-waf-fingerprint <targets>\nnmap --script=http-waf-fingerprint --script-args http-waf-fingerprint.intensive=1 <targets>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-waf-fingerprint:"
  - "|   Detected WAF"
  - "|_    BinarySec version 3.2.2"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-waf-fingerprint.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-waf-fingerprint.html"
---

Tries to detect the presence of a web application firewall and its type and
version.
This works by sending a number of requests and looking in the responses for
known behavior and fingerprints such as Server header, cookies and headers
values. Intensive mode works by sending additional WAF specific requests to
detect certain behaviour.
Credit to wafw00f and w3af for some fingerprints.
