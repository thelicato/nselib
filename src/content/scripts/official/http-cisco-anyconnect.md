---
title: "http-cisco-anyconnect"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Connect as Cisco AnyConnect client to a Cisco SSL VPN and retrieves version\nand tunnel information."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script http-cisco-anyconnect <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "| http-cisco-anyconnect:"
  - "|   version: 9.1(5)"
  - "|   tunnel-group: VPN"
  - "|   group-alias: vpn"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-cisco-anyconnect.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-cisco-anyconnect.html"
---

Connect as Cisco AnyConnect client to a Cisco SSL VPN and retrieves version
and tunnel information.
