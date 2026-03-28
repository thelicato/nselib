---
title: "http-feed"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "This script crawls through the website to find any rss or atom feeds."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-feed.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-feed:"
  - "| Spidering limited to: maxpagecount=40; withinhost=some-random-page.com"
  - "|   Found the following feeds:"
  - "|     RSS (version 2.0): http://www.some-random-page.com/2011/11/20/feed/"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-feed.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-feed.html"
---

This script crawls through the website to find any rss or atom feeds.
The script, by default, spiders and searches within forty pages. For large web
applications make sure to increase httpspider's maxpagecount value.
Please, note that the script will become more intrusive though.
