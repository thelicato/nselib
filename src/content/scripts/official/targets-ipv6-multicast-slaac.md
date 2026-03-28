---
title: "targets-ipv6-multicast-slaac"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
shortDescription: "Performs IPv6 host discovery by triggering stateless address auto-configuration\n(SLAAC)."
risk: informational
tags:
  - "discovery"
  - "broadcast"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -6 --script targets-ipv6-multicast-slaac --script-args 'newtargets,interface=eth0' -sP"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-ipv6-multicast-slaac:"
  - "|   IP: fe80:0000:0000:0000:1322:33ff:fe44:5566  MAC: 11:22:33:44:55:66  IFACE: eth0"
  - "|_  Use --script-args=newtargets to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-ipv6-multicast-slaac.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-ipv6-multicast-slaac.html"
---

Performs IPv6 host discovery by triggering stateless address auto-configuration
(SLAAC).
This script works by sending an ICMPv6 Router Advertisement with a random
address prefix, which causes hosts to begin SLAAC and send a solicitation for
their newly configured address, as part of duplicate address detection. The
script then guesses the remote addresses by combining the link-local prefix of
the interface with the interface identifier in each of the received
solicitations. This should be followed up with ordinary ND host discovery to
verify that the guessed addresses are correct.
The router advertisement has a router lifetime of zero and a short prefix
lifetime (a few seconds)
