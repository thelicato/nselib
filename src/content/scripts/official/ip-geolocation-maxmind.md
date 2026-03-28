---
title: "ip-geolocation-maxmind"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Tries to identify the physical location of an IP address using a\nGeolocation Maxmind database file (available from\n http://www.maxmind.com/app/ip-location ). This script supports queries\nusing all Maxmind databases that are supported by their API including\nthe commercial ones."
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
usage: "nmap --script ip-geolocation-maxmind <target> [--script-args ip-geolocation.maxmind_db=<filename>]"
outputPreview:
  - "| ip-geolocation-maxmind:"
  - "| coordinates: 39.4899, -74.4773"
  - "|_location: Absecon, Philadelphia, PA, United States"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-geolocation-maxmind.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-geolocation-maxmind.html"
---

Tries to identify the physical location of an IP address using a
Geolocation Maxmind database file (available from
 http://www.maxmind.com/app/ip-location ). This script supports queries
using all Maxmind databases that are supported by their API including
the commercial ones.
