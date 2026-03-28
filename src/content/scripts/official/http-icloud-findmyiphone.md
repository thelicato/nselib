---
title: "http-icloud-findmyiphone"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Retrieves the locations of all \"Find my iPhone\" enabled iOS devices by querying\nthe MobileMe web service (authentication required)."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -sn -Pn --script http-icloud-findmyiphone --script-args='username=<user>,password=<pass>'"
outputPreview:
  - "Pre-scan script results:"
  - "| http-icloud-findmyiphone:"
  - "|   name                           location        accuracy  date               type"
  - "|   Patrik Karlsson's MacBook Air  -,-             -         -                  -"
  - "|   Patrik Karlsson's iPhone       40.690,-74.045  65        04/10/12 16:56:37  Wifi"
  - "|_  Mac mini                       40.690,-74.045  65        04/10/12 16:56:36  Wifi"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-icloud-findmyiphone.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-icloud-findmyiphone.html"
---

Retrieves the locations of all "Find my iPhone" enabled iOS devices by querying
the MobileMe web service (authentication required).
