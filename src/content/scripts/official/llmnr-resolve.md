---
title: "llmnr-resolve"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Resolves a hostname by using the LLMNR (Link-Local Multicast Name Resolution) protocol."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "broadcast"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script llmnr-resolve --script-args 'llmnr-resolve.hostname=examplename' -e wlan0"
outputPreview:
  - "Pre-scan script results:"
  - "| llmnr-resolve:"
  - "|   acer-PC : 192.168.1.4"
  - "|_  Use the newtargets script-arg to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/llmnr-resolve.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/llmnr-resolve.html"
---

Resolves a hostname by using the LLMNR (Link-Local Multicast Name Resolution) protocol.
The script works by sending a LLMNR Standard Query containing the hostname to
the 5355 UDP port on the 224.0.0.252 multicast address. It listens for any
LLMNR responses that are sent to the local machine with a 5355 UDP source port.
A hostname to resolve must be provided.
