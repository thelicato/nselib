---
title: "ventrilo-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Detects the Ventrilo voice communication server service versions 2.1.2\nand above and tries to determine version and configuration\ninformation. Some of the older versions (pre 3.0.0) may not have the\nUDP service that this probe relies on enabled by default."
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
usage: "nmap -sV <target>"
outputPreview:
  - "PORT     STATE SERVICE  VERSION"
  - "9408/tcp open  ventrilo Ventrilo 3.0.3.C (voice port; name: TypeFrag.com; uptime: 152h:56m; auth: pw)"
  - "| ventrilo-info:"
  - "| name: TypeFrag.com"
  - "| phonetic: Type Frag Dot Com"
  - "| comment: http://www.typefrag.com/"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ventrilo-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ventrilo-info.html"
---

Detects the Ventrilo voice communication server service versions 2.1.2
and above and tries to determine version and configuration
information. Some of the older versions (pre 3.0.0) may not have the
UDP service that this probe relies on enabled by default.
The Ventrilo server listens on a TCP (voice/control) and an UDP (ping/status)
port with the same port number (fixed to 3784 in the free version, otherwise
configurable). This script activates on both a TCP and UDP port version scan.
In both cases probe data is sent only to the UDP port because it allows for a
simple and informative status command as implemented by the
 ventrilo_status.exe executable which has shipped alongside the Windows server
package since version 2.1.2 when the UDP status service was implemented.
When run as a version detection script ( -sV ), the script will report on the
server version, name, uptime, authentication scheme, and OS. When run
explicitly ( --script ventrilo-info ), the script will additionally report on the
server name phonetic pronunciation string, the server comment, maximum number
of clients, voice codec, voice format, channel and client counts, and details
about channels and currently connected clients.
Original reversing of the protocol was done by Luigi Auriemma
( http://aluigi.altervista.org/papers.htm#ventrilo ).
