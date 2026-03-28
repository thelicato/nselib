---
title: "http-referer-checker"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Informs about cross-domain include of scripts. Websites that include\nexternal javascript scripts are delegating part of their security to\nthird-party entities."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-referer-checker.nse <host>\n\nThis script informs about cross-domain include of scripts by\nfinding src attributes that point to a different domain."
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-referer-checker:"
  - "| Spidering limited to: maxdepth=3; maxpagecount=20;"
  - "|   http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"
  - "|_  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js?ver=3.4.2"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-referer-checker.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-referer-checker.html"
---

Informs about cross-domain include of scripts. Websites that include
external javascript scripts are delegating part of their security to
third-party entities.
