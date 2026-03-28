---
title: "murmur-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the Murmur service (server for the Mumble voice communication\nclient) versions 1.2.X."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT      STATE SERVICE VERSION"
  - "64740/tcp open  murmur  Murmur 1.2.4 (control port; users: 35; max. users: 100; bandwidth: 72000 b/s)"
  - "64740/udp open  murmur  Murmur 1.2.4 (voice port; users: 35; max. users: 100; bandwidth: 72000 b/s)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/murmur-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/murmur-version.html"
---

Detects the Murmur service (server for the Mumble voice communication
client) versions 1.2.X.
The Murmur server listens on a TCP (control) and a UDP (voice) port
with the same port number. This script activates on both a TCP and UDP
port version scan. In both cases probe data is sent only to the UDP
port because it allows for a simple and informative ping command.
The single probe will report on the server version, current user
count, maximum users allowed on the server, and bandwidth used for
voice communication. It is used by the Mumble client to ping known
Murmur servers.
The IP address from which service detection is being ran will most
likely be temporarily banned by the target Murmur server due to
multiple incorrect handshakes (Nmap service probes). This ban makes
identifying the service via TCP impossible in practice, but does not
affect the UDP probe used by this script.
It is possible to get a corrupt user count (usually +1) when doing a
TCP service scan due to previous service probe connections affecting
the server.
See http://mumble.sourceforge.net/Protocol .
