---
title: "http-comments-displayer"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Extracts and outputs HTML and JavaScript comments from HTTP responses."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-comments-displayer.nse <host>\n\nThis scripts uses patterns to extract HTML comments from HTTP\nresponses and writes these to the command line."
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-comments-displayer:"
  - "|     Path: /"
  - "|     Line number: 214"
  - "|     Comment:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-comments-displayer.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-comments-displayer.html"
---

Extracts and outputs HTML and JavaScript comments from HTTP responses.
