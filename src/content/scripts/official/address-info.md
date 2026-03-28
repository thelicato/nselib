---
title: "address-info"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Shows extra information about IPv6 addresses, such as embedded MAC or IPv4 addresses when available."
risk: safe
tags:
  - "default"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "Nmap scan report for ::1.2.3.4"
  - "Host script results:"
  - "| address-info:"
  - "|   IPv4-compatible:"
  - "|_    IPv4 address: 1.2.3.4"
  - "Nmap scan report for ::ffff:1.2.3.4"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/address-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/address-info.html"
---

Shows extra information about IPv6 addresses, such as embedded MAC or IPv4 addresses when available.
Some IP address formats encode extra information; for example some IPv6
addresses encode an IPv4 address or MAC address. This script can decode
these address formats:

 IPv4-compatible IPv6 addresses,

 IPv4-mapped IPv6 addresses,

 Teredo IPv6 addresses,

 6to4 IPv6 addresses,

 IPv6 addresses using an EUI-64 interface ID,

 IPv4-embedded IPv6 addresses,

 IPv4-translated IPv6 addresses and

 ISATAP Modified EUI-64 IPv6 addresses.

See RFC 4291 for general IPv6 addressing architecture and the
definitions of some terms.
