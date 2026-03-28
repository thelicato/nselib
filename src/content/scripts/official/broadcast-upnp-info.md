---
title: "broadcast-upnp-info"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Attempts to extract system information from the UPnP service by sending a multicast query, then collecting, parsing, and displaying all responses."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -sV --script=broadcast-upnp-info <target>"
outputPreview:
  - "| broadcast-upnp-info:"
  - "|   1.2.3.50"
  - "|       Debian/4.0 DLNADOC/1.50 UPnP/1.0 MiniDLNA/1.0"
  - "|       Location:  http://1.2.3.50:8200/rootDesc.xml"
  - "|       Webserver:  Debian/4.0 DLNADOC/1.50 UPnP/1.0 MiniDLNA/1.0"
  - "|       Name: BUBBA|TWO DLNA Server"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-upnp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-upnp-info.html"
---

Attempts to extract system information from the UPnP service by sending a multicast query, then collecting, parsing, and displaying all responses.
