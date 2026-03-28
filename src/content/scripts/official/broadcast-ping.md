---
title: "broadcast-ping"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Sends broadcast pings on a selected interface using raw ethernet packets and\noutputs the responding hosts' IP and MAC addresses or (if requested) adds them\nas targets. Root privileges on UNIX are required to run this script since it\nuses raw sockets. Most operating systems don't respond to broadcast-ping\nprobes, but they can be configured to do so."
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
usage: "nmap -e <interface> [--ttl <ttl>] [--data-length <payload_length>]\n--script broadcast-ping [--script-args [broadcast-ping.timeout=<ms>],[num-probes=<n>]]"
outputPreview:
  - "| broadcast-ping:"
  - "|   IP: 192.168.1.1    MAC: 00:23:69:2a:b1:25"
  - "|   IP: 192.168.1.106  MAC: 1c:65:9d:88:d8:36"
  - "|_  Use --script-args=newtargets to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-ping.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-ping.html"
---

Sends broadcast pings on a selected interface using raw ethernet packets and
outputs the responding hosts' IP and MAC addresses or (if requested) adds them
as targets. Root privileges on UNIX are required to run this script since it
uses raw sockets. Most operating systems don't respond to broadcast-ping
probes, but they can be configured to do so.
The interface on which is broadcasted can be specified using the -e Nmap option
or the broadcast-ping.interface script-arg. If no interface is
specified this script broadcasts on all ethernet interfaces which have an IPv4
address defined.
The newtarget script-arg can be used so the script adds the
discovered IPs as targets.
The timeout of the ICMP probes can be specified using the timeout
script-arg. The default timeout is 3000 ms. A higher number might be necessary
when scanning across larger networks.
The number of sent probes can be specified using the num-probes
script-arg. The default number is 1. A higher value might get more results on
larger networks.
The ICMP probes sent comply with the --ttl and --data-length Nmap options, so
you can use those to control the TTL(time to live) and ICMP payload length
respectively. The default value for TTL is 64, and the length of the payload
is 0. The payload is consisted of random bytes.
