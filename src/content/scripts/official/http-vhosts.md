---
title: "http-vhosts"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Searches for web virtual hostnames by making a large number of HEAD requests against http servers using common hostnames."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vhosts -p 80,8080,443 <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vhosts:"
  - "| example.com: 301 -> http://www.example.com/"
  - "| www.example.com: 200"
  - "| docs.example.com: 302 -> https://www.example.com/docs/"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vhosts.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vhosts.html"
---

Searches for web virtual hostnames by making a large number of HEAD requests against http servers using common hostnames.
Each HEAD request provides a different
 Host header. The hostnames come from a built-in default
list. Shows the names that return a document. Also shows the location of
redirections.
The domain can be given as the http-vhosts.domain argument or
deduced from the target's name. For example when scanning www.example.com,
various names of the form <name>.example.com are tried.
