---
title: "freelancer-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Detects the Freelancer game server (FLServer.exe) service by sending a\nstatus query UDP probe."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -sV -p 2302 <target>\nnmap -sU -p 2302 --script=freelancer-info <target>"
outputPreview:
  - "PORT     STATE SERVICE    REASON       VERSION"
  - "2302/udp open  freelancer udp-response Freelancer (name: Discovery Freelancer RP 24/7; players: 152/225; password: no)"
  - "| freelancer-info:"
  - "|   server name: Discovery Freelancer RP 24/7"
  - "|   server description: This is the official discovery freelancer RP server. To know more about the server, please visit www.discoverygc.com"
  - "|   players: 152"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/freelancer-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/freelancer-info.html"
---

Detects the Freelancer game server (FLServer.exe) service by sending a
status query UDP probe.
When run as a version detection script ( -sV ), the script
will report on the server name, current number of players, maximum
number of players, and whether it has a password set. When run
explicitly ( --script freelancer-info ), the script will
additionally report on the server description, whether players can harm
other players, and whether new players are allowed.
See http://sourceforge.net/projects/gameq/
(relevant files: games.ini, packets.ini, freelancer.php)
