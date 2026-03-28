---
title: "ip-geolocation-ipinfodb"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Tries to identify the physical location of an IP address using the\nIPInfoDB geolocation web service\n( http://ipinfodb.com/ip_location_api.php )."
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
usage: "nmap --script ip-geolocation-ipinfodb <target> --script-args ip-geolocation-ipinfodb.apikey=<API_key>"
outputPreview:
  - "| ip-geolocation-ipinfodb:"
  - "| coordinates: 37.5384, -121.99"
  - "|_location: FREMONT, CALIFORNIA, UNITED STATES"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-geolocation-ipinfodb.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-geolocation-ipinfodb.html"
---

Tries to identify the physical location of an IP address using the
IPInfoDB geolocation web service
( http://ipinfodb.com/ip_location_api.php ).
There is no limit on requests to this service. However, the API key
needs to be obtained through free registration for this service:
 http://ipinfodb.com/login.php
