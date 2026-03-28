---
title: "traceroute-geolocation"
source: official
category: "Safe"
categories:
  - "safe"
  - "external"
  - "discovery"
shortDescription: "Lists the geographic locations of each hop in a traceroute and optionally\nsaves the results to a KML file, plottable on Google earth and maps."
risk: safe
tags:
  - "safe"
  - "external"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --traceroute --script traceroute-geolocation"
outputPreview:
  - "| traceroute-geolocation:"
  - "|   hop  RTT     ADDRESS                                               GEOLOCATION"
  - "|   1    ..."
  - "|   2    ..."
  - "|   3    ..."
  - "|   4    ..."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/traceroute-geolocation.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/traceroute-geolocation.html"
---

Lists the geographic locations of each hop in a traceroute and optionally
saves the results to a KML file, plottable on Google earth and maps.
