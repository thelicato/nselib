---
title: "http-errors"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "This script crawls through the website and returns any error pages."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-errors.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-errors:"
  - "| Spidering limited to: maxpagecount=40; withinhost=some-random-page.com"
  - "|   Found the following error pages:"
  - "|"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-errors.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-errors.html"
---

This script crawls through the website and returns any error pages.
The script will return all pages (sorted by error code) that respond with an
http code equal or above 400. To change this behaviour, please use the
 errcodes option.
The script, by default, spiders and searches within forty pages. For large web
applications make sure to increase httpspider's maxpagecount value.
Please, note that the script will become more intrusive though.
