---
title: "http-unsafe-output-escaping"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Spiders a website and attempts to identify output escaping problems\nwhere content is reflected back to the user. This script locates all\nparameters, ?x=foo&y=bar and checks if the values are reflected on the\npage. If they are indeed reflected, the script will try to insert\nghz>hzx\"zxc'xcv and check which (if any) characters were reflected\nback onto the page without proper html escaping. This is an\nindication of potential XSS vulnerability."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-unsafe-output-escaping <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "| http-unsafe-output-escaping:"
  - "|   Characters [> \" '] reflected in parameter kalle at http://foobar.gazonk.se/xss.php?foo=bar&kalle=john"
  - "|_  Characters [> \" '] reflected in parameter foo at http://foobar.gazonk.se/xss.php?foo=bar&kalle=john"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-unsafe-output-escaping.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-unsafe-output-escaping.html"
---

Spiders a website and attempts to identify output escaping problems
where content is reflected back to the user. This script locates all
parameters, ?x=foo&y=bar and checks if the values are reflected on the
page. If they are indeed reflected, the script will try to insert
ghz>hzx"zxc'xcv and check which (if any) characters were reflected
back onto the page without proper html escaping. This is an
indication of potential XSS vulnerability.
