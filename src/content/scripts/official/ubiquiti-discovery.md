---
title: "ubiquiti-discovery"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "version"
  - "safe"
shortDescription: "Extracts information from Ubiquiti networking devices."
risk: safe
tags:
  - "default"
  - "discovery"
  - "version"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 10001 --script ubiquiti-discovery.nse <target>"
outputPreview:
  - "PORT      STATE SERVICE            VERSION"
  - "10001/udp open  ubiquiti-discovery Ubiquiti Discovery Service (v1 protocol, ER-X software ver. v1.10.7)"
  - "| ubiquiti-discovery:"
  - "|   protocol: v1"
  - "|   uptime_seconds: 113144"
  - "|   uptime: 1 days 07:25:44"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ubiquiti-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ubiquiti-discovery.html"
---

Extracts information from Ubiquiti networking devices.
This script leverages Ubiquiti's Discovery Service which is enabled by default
on many products. It will attempt to leverage version 1 of the protocol first
and, if that fails, attempt version 2.
