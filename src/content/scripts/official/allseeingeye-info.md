---
title: "allseeingeye-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Detects the All-Seeing Eye service. Provided by some game servers for\nquerying the server's status."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT      STATE SERVICE      REASON       VERSION"
  - "27138/udp open  allseeingeye udp-response All-Seeing Eye (game: chrome 1.2.0.0ww; port: 27015; no password)"
  - "| allseeingeye-info:"
  - "|   game: chrome"
  - "|   port: 27015"
  - "|   server name: ChromeNet Server"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/allseeingeye-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/allseeingeye-info.html"
---

Detects the All-Seeing Eye service. Provided by some game servers for
querying the server's status.
The All-Seeing Eye service can listen on a UDP port separate from the
main game server port (usually game port + 123). On receiving a packet
with the payload "s", it replies with various game server status info.
When run as a version detection script ( -sV ), the script
will report on the game name, version, actual port, and whether it has a
password. When run explicitly ( --script allseeingeye-info ), the
script will additionally report on the server name, game type, map name,
current number of players, maximum number of players, player
information, and various other information.
For more info on the protocol see:
 http://int64.org/docs/gamestat-protocols/ase.html
 http://aluigi.altervista.org/papers.htm#ase
 http://sourceforge.net/projects/gameq/
(relevant files: games.ini, packets.ini, ase.php)
