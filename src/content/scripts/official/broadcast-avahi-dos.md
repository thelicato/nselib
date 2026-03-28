---
title: "broadcast-avahi-dos"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "dos"
  - "intrusive"
  - "vuln"
shortDescription: "Attempts to discover hosts in the local network using the DNS Service\nDiscovery protocol and sends a NULL UDP packet to each host to test\nif it is vulnerable to the Avahi NULL UDP packet denial of service\n(CVE-2011-1002)."
risk: intrusive
tags:
  - "broadcast"
  - "dos"
  - "intrusive"
  - "vuln"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script=broadcast-avahi-dos"
outputPreview:
  - "| broadcast-avahi-dos:"
  - "|   Discovered hosts:"
  - "|     10.0.1.150"
  - "|     10.0.1.151"
  - "|   After NULL UDP avahi packet DoS (CVE-2011-1002)."
  - "|   Hosts that seem down (vulnerable):"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-avahi-dos.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-avahi-dos.html"
---

Attempts to discover hosts in the local network using the DNS Service
Discovery protocol and sends a NULL UDP packet to each host to test
if it is vulnerable to the Avahi NULL UDP packet denial of service
(CVE-2011-1002).
The broadcast-avahi-dos.wait script argument specifies how
many number of seconds to wait before a new attempt of host discovery.
Each host who does not respond to this second attempt will be considered
vulnerable.
