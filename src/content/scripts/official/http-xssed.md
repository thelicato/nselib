---
title: "http-xssed"
source: official
category: "Safe"
categories:
  - "safe"
  - "external"
  - "discovery"
shortDescription: "This script searches the xssed.com database and outputs the result."
risk: safe
tags:
  - "safe"
  - "external"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-xssed.nse <target>\n\nThis script will search the xssed.com database and it will output any\nresults. xssed.com is the largest online archive of XSS vulnerable\nwebsites.\n\nPORT   STATE SERVICE REASON\n80/tcp open  http    syn-ack\n| http-xssed:\n|   xssed.com found the following previously reported XSS vulnerabilities marked as unfixed:\n|\n|     /redirect/links.aspx?page=http://xssed.com\n|\n|     /derefer.php?url=http://xssed.com/\n|\n|   xssed.com found the following previously reported XSS vulnerabilities marked as fixed:\n|\n|_    /myBook/myregion.php?targetUrl=javascript:alert(1);"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-xssed.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-xssed.html"
---

This script searches the xssed.com database and outputs the result.
