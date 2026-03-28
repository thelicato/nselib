---
title: "ip-geolocation-geoplugin"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Tries to identify the physical location of an IP address using the\nGeoplugin geolocation web service ( http://www.geoplugin.com/ ). There\nis no limit on lookups using this service."
risk: safe
tags:
  - "discovery"
  - "external"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script ip-geolocation-geoplugin <target>"
outputPreview:
  - "| ip-geolocation-geoplugin:"
  - "| coordinates: 39.4208984375, -74.497703552246"
  - "|_location: New Jersey, United States"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-geolocation-geoplugin.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-geolocation-geoplugin.html"
---

Tries to identify the physical location of an IP address using the
Geoplugin geolocation web service ( http://www.geoplugin.com/ ). There
is no limit on lookups using this service.
