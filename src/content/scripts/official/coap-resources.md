---
title: "coap-resources"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Dumps list of available resources from CoAP endpoints."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p U:5683 -sU --script coap-resources <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "5683/udp open  coap    udp-response ttl 36"
  - "| coap-resources:"
  - "|   /large:"
  - "|     rt: block"
  - "|     sz: 1280"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/coap-resources.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/coap-resources.html"
---

Dumps list of available resources from CoAP endpoints.
This script establishes a connection to a CoAP endpoint and performs a
GET request on a resource. The default resource for our request is
<code>/.well-known/core</core>, which should contain a list of
resources provided by the endpoint.
