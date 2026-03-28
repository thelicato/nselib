---
title: "p2p-conficker"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Checks if a host is infected with Conficker.C or higher, based on\nConficker's peer to peer communication."
risk: safe
tags:
  - "default"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "# Run the scripts against host(s) that appear to be Windows\nnmap --script p2p-conficker,smb-os-discovery,smb-check-vulns --script-args=safe=1 -T4 -vv -p445 <host>\nsudo nmap -sU -sS --script p2p-conficker,smb-os-discovery,smb-check-vulns --script-args=safe=1 -vv -T4 -p U:137,T:139 <host>\n\n# Run the scripts against all active hosts (recommended)\nnmap -p139,445 -vv --script p2p-conficker,smb-os-discovery,smb-check-vulns --script-args=checkconficker=1,safe=1 -T4 <host>\n\n# Run scripts against all 65535 ports (slow)\nnmap --script p2p-conficker,smb-os-discovery,smb-check-vulns -p- --script-args=checkall=1,safe=1 -vv -T4 <host>\n\n# Base checks on a different ip address (NATed)\nnmap --script p2p-conficker,smb-os-discovery -p445 --script-args=realip=\\\"192.168.1.65\\\" -vv -T4 <host>"
outputPreview:
  - "Clean machine (results printed only if extra verbosity (\"-vv\")is specified):"
  - "Host script results:"
  - "| p2p-conficker: Checking for Conficker.C or higher..."
  - "|   Check 1 (port 44329/tcp): CLEAN (Couldn't connect)"
  - "|   Check 2 (port 33824/tcp): CLEAN (Couldn't connect)"
  - "|   Check 3 (port 31380/udp): CLEAN (Failed to receive data)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/p2p-conficker.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/p2p-conficker.html"
---

Checks if a host is infected with Conficker.C or higher, based on
Conficker's peer to peer communication.
When Conficker.C or higher infects a system, it opens four ports: two TCP
and two UDP. The ports are random, but are seeded with the current week and
the IP of the infected host. By determining the algorithm, one can check if
these four ports are open, and can probe them for more data.
Once the open ports are found, communication can be initiated using
Conficker's custom peer to peer protocol. If a valid response is received,
then a valid Conficker infection has been found.
This check won't work properly on a multihomed or NATed system because the
open ports will be based on a nonpublic IP. The argument
 checkall tells Nmap to attempt communication with every open
port (much like a version check) and the argument realip tells
Nmap to base its port generation on the given IP address instead of the
actual IP.
By default, this will run against a system that has a standard Windows port
open (445, 139, 137). The arguments checkall and
 checkconficker will both perform checks regardless of which
port is open, see the args section for more information.
Note: Ensure your clock is correct (within a week) before using this script!
The majority of research for this script was done by Symantec Security
Response, and some was taken from public sources (most notably the port
blacklisting was found by David Fifield). A big thanks goes out to everybody
who contributed!
