---
title: "ntp-monlist"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Obtains and prints an NTP server's monitor data."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -pU:123 -Pn -n --script=ntp-monlist <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "123/udp open  ntp     udp-response"
  - "| ntp-monlist:"
  - "|   Target is synchronised with 127.127.38.0 (reference clock)"
  - "|   Alternative Target Interfaces:"
  - "|       10.17.4.20"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ntp-monlist.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ntp-monlist.html"
---

Obtains and prints an NTP server's monitor data.
Monitor data is a list of the most recently used (MRU) having NTP associations
with the target. Each record contains information about the most recent NTP
packet sent by a host to the target including the source and destination
addresses and the NTP version and mode of the packet. With this information it
is possible to classify associated hosts as Servers, Peers, and Clients.
A Peers command is also sent to the target and the peers list in the response
allows differentiation between configured Mode 1 Peers and clients which act
like Peers (such as the Windows W32Time service).
Associated hosts are further classified as either public or private.
Private hosts are those
having IP addresses which are not routable on the public Internet and thus can
help to form a picture about the topology of the private network on which the
target resides.
Other information revealed by the monlist and peers commands are the host with
which the target clock is synchronized and hosts which send Control Mode (6)
and Private Mode (7) commands to the target and which may be used by admins for
the NTP service.
It should be noted that the very nature of the NTP monitor data means that the
Mode 7 commands sent by this script are recorded by the target (and will often
appear in these results). Since the monitor data is a MRU list, it is probable
that you can overwrite the record of the Mode 7 command by sending an innocuous
looking Client Mode request. This can be achieved easily using Nmap:
 nmap -sU -pU:123 -Pn -n --max-retries=0 <target>
