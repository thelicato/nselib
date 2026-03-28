---
title: "broadcast-dropbox-listener"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Listens for the LAN sync information broadcasts that the Dropbox.com client\nbroadcasts every 20 seconds, then prints all the discovered client IP\naddresses, port numbers, version numbers, display names, and more."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script=broadcast-dropbox-listener\nnmap --script=broadcast-dropbox-listener --script-args=newtargets -Pn"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-dropbox-listener:"
  - "| displayname  ip             port   version  host_int  namespaces"
  - "|_noob         192.168.0.110  17500  1.8      34176083  26135075"
  - "Pre-scan script results:"
  - "| broadcast-dropbox-listener:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-dropbox-listener.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-dropbox-listener.html"
---

Listens for the LAN sync information broadcasts that the Dropbox.com client
broadcasts every 20 seconds, then prints all the discovered client IP
addresses, port numbers, version numbers, display names, and more.
If the newtargets script argument is given, all discovered Dropbox
clients will be added to the Nmap target list rather than just listed in the
output.
