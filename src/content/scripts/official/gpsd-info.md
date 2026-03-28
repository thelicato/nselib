---
title: "gpsd-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves GPS time, coordinates and speed from the GPSD network daemon."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2947 <ip> --script gpsd-info"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2947/tcp open  gpsd-ng syn-ack"
  - "| gpsd-info:"
  - "|   Time of fix: Sat Apr 14 15:54:23 2012"
  - "|   Coordinates: 59.321685,17.886493"
  - "|_  Speed: - knots"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/gpsd-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/gpsd-info.html"
---

Retrieves GPS time, coordinates and speed from the GPSD network daemon.
