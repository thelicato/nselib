---
title: "http-trendnet-tvip110w"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Attempts to find Trendnet TVIP110W webcams vulnerable to unauthenticated access to the video stream by querying the URI \"/anony/mjpg.cgi\"."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-trendnet-tvip110w.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "|_http-trendnet-webcams: Trendnet TV-IP110W video feed is unprotected:http://<target>/anony/mjpg.cgi"
  - "-"
author: "cldrn/nmap-nse-scripts"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-trendnet-tvip110w.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to find Trendnet TVIP110W webcams vulnerable to unauthenticated access to the video stream by querying the URI "/anony/mjpg.cgi".
Original advisory: http://console-cowboys.blogspot.com/2012/01/trendnet-cameras-i-always-feel-like.html
