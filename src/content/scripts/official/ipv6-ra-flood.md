---
title: "ipv6-ra-flood"
source: official
category: "Dos"
categories:
  - "dos"
  - "intrusive"
shortDescription: "Generates a flood of Router Advertisements (RA) with random source MAC\naddresses and IPv6 prefixes. Computers, which have stateless autoconfiguration\nenabled by default (every major OS), will start to compute IPv6 suffix and\nupdate their routing table to reflect the accepted announcement. This will\ncause 100% CPU usage on Windows and platforms, preventing to process other\napplication requests."
risk: intrusive
tags:
  - "dos"
  - "intrusive"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -6 --script ipv6-ra-flood.nse\nnmap -6 --script ipv6-ra-flood.nse --script-args 'interface=<interface>'\nnmap -6 --script ipv6-ra-flood.nse --script-args 'interface=<interface>,timeout=10s'"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ipv6-ra-flood.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ipv6-ra-flood.html"
---

Generates a flood of Router Advertisements (RA) with random source MAC
addresses and IPv6 prefixes. Computers, which have stateless autoconfiguration
enabled by default (every major OS), will start to compute IPv6 suffix and
update their routing table to reflect the accepted announcement. This will
cause 100% CPU usage on Windows and platforms, preventing to process other
application requests.
Vulnerable platforms:

 All Cisco IOS ASA with firmware < November 2010

 All Netscreen versions supporting IPv6

 Windows 2000/XP/2003/Vista/7/2008/8/2012

 All FreeBSD versions

 All NetBSD versions

 All Solaris/Illumos versions

Security advisory: http://www.mh-sec.de/downloads/mh-RA_flooding_CVE-2010-multiple.txt
WARNING: This script is dangerous and is very likely to bring down a server or
network appliance. It should not be run in a production environment unless you
(and, more importantly, the business) understand the risks!
Additional documents: https://tools.ietf.org/rfc/rfc6104.txt
