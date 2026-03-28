---
title: "ip-geolocation-map-bing"
source: official
category: "External"
categories:
  - "external"
  - "safe"
shortDescription: "This script queries the Nmap registry for the GPS coordinates of targets stored\nby previous geolocation scripts and renders a Bing Map of markers representing\nthe targets."
risk: safe
tags:
  - "external"
  - "safe"
  - "postrule"
scriptTypes:
  - "postrule"
protocols: []
ports: []
usage: "nmap -sn -Pn --script ip-geolocation-geoplugin,ip-geolocation-map-bing --script-args ip-geolocation-map-bing.api_key=[redacted],ip-geolocation-map-bing.map_path=map.png <target>"
outputPreview:
  - "| ip-geolocation-map-bing:"
  - "|_  The map has been saved at 'map.png'."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-geolocation-map-bing.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-geolocation-map-bing.html"
---

This script queries the Nmap registry for the GPS coordinates of targets stored
by previous geolocation scripts and renders a Bing Map of markers representing
the targets.
The Bing Maps REST API has a limit of 100 markers, so if more coordinates are
found, only the top 100 markers by number of IPs will be shown.
Additional information for the Bing Maps REST Services API can be found at:
- https://msdn.microsoft.com/en-us/library/ff701724.aspx
