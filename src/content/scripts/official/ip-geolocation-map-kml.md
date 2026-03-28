---
title: "ip-geolocation-map-kml"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "This script queries the Nmap registry for the GPS coordinates of targets stored\nby previous geolocation scripts and produces a KML file of points representing\nthe targets."
risk: safe
tags:
  - "safe"
  - "postrule"
scriptTypes:
  - "postrule"
protocols: []
ports: []
usage: "nmap -sn -Pn --script ip-geolocation-geoplugin,ip-geolocation-map-kml --script-args ip-geolocation-map-kml.map_path=map.kml <target>"
outputPreview:
  - "| ip-geolocation-map-kml:"
  - "|_  The map has been saved at 'map.kml'."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-geolocation-map-kml.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-geolocation-map-kml.html"
---

This script queries the Nmap registry for the GPS coordinates of targets stored
by previous geolocation scripts and produces a KML file of points representing
the targets.
