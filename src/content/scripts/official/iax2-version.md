---
title: "iax2-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the UDP IAX2 service."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -sV -p 4569 <target>"
outputPreview:
  - "PORT     STATE  SERVICE VERSION"
  - "4569/udp closed iax2"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/iax2-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/iax2-version.html"
---

Detects the UDP IAX2 service.
The script sends an Inter-Asterisk eXchange (IAX) Revision 2 Control Frame POKE
request and checks for a proper response. This protocol is used to enable VoIP
connections between servers as well as client-server communication.
