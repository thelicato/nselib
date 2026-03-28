---
title: "http-affiliate-id"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Grabs affiliate network IDs (e.g. Google AdSense or Analytics, Amazon\nAssociates, etc.) from a web page. These can be used to identify pages\nwith the same owner."
risk: safe
tags:
  - "safe"
  - "discovery"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-affiliate-id.nse --script-args http-affiliate-id.url-path=/website <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-affiliate-id:"
  - "|   Amazon Associates ID: XXXX-XX"
  - "|   Google Adsense ID: pub-YYYY"
  - "|_  Google Analytics ID: UA-ZZZZ-ZZ"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-affiliate-id.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-affiliate-id.html"
---

Grabs affiliate network IDs (e.g. Google AdSense or Analytics, Amazon
Associates, etc.) from a web page. These can be used to identify pages
with the same owner.
If there is more than one target using an ID, the postrule of this
script shows the ID along with a list of the targets using it.
