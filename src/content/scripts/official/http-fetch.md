---
title: "http-fetch"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "The script is used to fetch files from servers."
risk: safe
tags:
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-fetch --script-args destination=/tmp/mirror <target>\nnmap --script http-fetch --script-args 'paths={/robots.txt,/favicon.ico}' <target>\nnmap --script http-fetch --script-args 'paths=.html' <target>\nnmap --script http-fetch --script-args 'url=/images,paths={.jpg,.png,.gif}' <target>"
outputPreview:
  - "| http-fetch:"
  - "|   Successfully Downloaded:"
  - "|     http://scanme.nmap.org:80/ as /tmp/mirror/45.33.32.156/80/index.html"
  - "|_    http://scanme.nmap.org/shared/css/insecdb.css as /tmp/mirror/45.33.32.156/80/shared/css/insecdb.css"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-fetch.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-fetch.html"
---

The script is used to fetch files from servers.
