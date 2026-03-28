---
title: "teamspeak2-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the TeamSpeak 2 voice communication server and attempts to determine\nversion and configuration information."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -sV -p 8767 <target>"
outputPreview:
  - "PORT     STATE SERVICE    REASON     VERSION"
  - "8767/udp open  teamspeak2 script-set TeamSpeak 2.0.23.19 (name: COWCLANS; no password)"
  - "Service Info: OS: Win32"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/teamspeak2-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/teamspeak2-version.html"
---

Detects the TeamSpeak 2 voice communication server and attempts to determine
version and configuration information.
A single UDP packet (a login request) is sent. If the server does not have a
password set, the exact version, name, and OS type will also be reported on.
