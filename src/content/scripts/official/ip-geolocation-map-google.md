---
title: "ip-geolocation-map-google"
source: official
category: "External"
categories:
  - "external"
  - "safe"
shortDescription: "This script queries the Nmap registry for the GPS coordinates of targets stored\nby previous geolocation scripts and renders a Google Map of markers representing\nthe targets."
risk: safe
tags:
  - "external"
  - "safe"
  - "postrule"
scriptTypes:
  - "postrule"
protocols: []
ports: []
usage: "nmap -sn -Pn --script ip-geolocation-geoplugin,ip-geolocation-map-google --script-args ip-geolocation-map-google.api_key=[redacted],ip-geolocation-map-google.map_path=map.png <target>"
outputPreview:
  - "| ip-geolocation-map-google:"
  - "|_  The map has been saved at 'map.png'."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-geolocation-map-google.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-geolocation-map-google.html"
---

This script queries the Nmap registry for the GPS coordinates of targets stored
by previous geolocation scripts and renders a Google Map of markers representing
the targets.
Additional information for the Google Static Maps API can be found at:
- https://developers.google.com/maps/documentation/static-maps/intro
