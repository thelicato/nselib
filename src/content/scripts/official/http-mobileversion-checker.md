---
title: "http-mobileversion-checker"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Checks if the website holds a mobile version."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-mobileversion-checker.nse <host>\n\nThis script sets an Android User-Agent header and checks if the request\nwill be redirected to a page different than a (valid) browser request\nwould be. If so, this page is most likely to be a mobile version of the\napp."
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "|_ http-mobileversion-checker: Found mobile version: https://m.some-very-random-website.com (Redirected to a different host)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-mobileversion-checker.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-mobileversion-checker.html"
---

Checks if the website holds a mobile version.
