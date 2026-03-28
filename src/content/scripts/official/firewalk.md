---
title: "firewalk"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Tries to discover firewall rules using an IP TTL expiration technique known\nas firewalking."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script=firewalk --traceroute <host>"
outputPreview:
  - "| firewalk:"
  - "| HOP HOST         PROTOCOL  BLOCKED PORTS"
  - "| 2   192.168.1.1  tcp       21-23,80"
  - "|                  udp       21-23,80"
  - "| 6   10.0.1.1     tcp       67-68"
  - "| 7   10.0.1.254   tcp       25"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/firewalk.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/firewalk.html"
---

Tries to discover firewall rules using an IP TTL expiration technique known
as firewalking.
To determine a rule on a given gateway, the scanner sends a probe to a metric
located behind the gateway, with a TTL one higher than the gateway. If the probe
is forwarded by the gateway, then we can expect to receive an ICMP_TIME_EXCEEDED
reply from the gateway next hop router, or eventually the metric itself if it is
directly connected to the gateway. Otherwise, the probe will timeout.
It starts with a TTL equals to the distance to the target. If the probe timeout,
then it is resent with a TTL decreased by one. If we get an ICMP_TIME_EXCEEDED,
then the scan is over for this probe.
Every "no-reply" filtered TCP and UDP ports are probed. As for UDP scans, this
process can be quite slow if lots of ports are blocked by a gateway close to the
scanner.
Scan parameters can be controlled using the firewalk.*
optional arguments.
From an original idea of M. Schiffman and D. Goldsmith, authors of the
firewalk tool.
