---
title: "ip-forwarding"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Detects whether the remote device has ip forwarding or \"Internet connection\nsharing\" enabled, by sending an ICMP echo request to a given target using\nthe scanned host as default gateway."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "sudo nmap -sn <target> --script ip-forwarding --script-args='target=www.example.com'"
outputPreview:
  - "| ip-forwarding:"
  - "|_  The host has ip forwarding enabled, tried ping against (www.example.com)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-forwarding.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-forwarding.html"
---

Detects whether the remote device has ip forwarding or "Internet connection
sharing" enabled, by sending an ICMP echo request to a given target using
the scanned host as default gateway.
The given target can be a routed or a LAN host and needs to be able to respond
to ICMP requests (ping) in order for the test to be successful. In addition,
if the given target is a routed host, the scanned host needs to have the proper
routing to reach it.
In order to use the scanned host as default gateway Nmap needs to discover
the MAC address. This requires Nmap to be run in privileged mode and the host
to be on the LAN.
