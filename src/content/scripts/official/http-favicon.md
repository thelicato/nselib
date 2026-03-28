---
title: "http-favicon"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Gets the favicon (\"favorites icon\") from a web page and matches it against a\ndatabase of the icons of known web applications. If there is a match, the name\nof the application is printed; otherwise the MD5 hash of the icon data is\nprinted."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-favicon.nse \\\n   --script-args favicon.root=<root>,favicon.uri=<uri>"
outputPreview:
  - "|_ http-favicon: Socialtext"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-favicon.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-favicon.html"
---

Gets the favicon ("favorites icon") from a web page and matches it against a
database of the icons of known web applications. If there is a match, the name
of the application is printed; otherwise the MD5 hash of the icon data is
printed.
If the script argument favicon.uri is given, that relative URI is
always used to find the favicon. Otherwise, first the page at the root of the
web server is retrieved and parsed for a <link rel="icon">
element. If that fails, the icon is looked for in /favicon.ico . If
a <link> favicon points to a different host or port, it is ignored.
