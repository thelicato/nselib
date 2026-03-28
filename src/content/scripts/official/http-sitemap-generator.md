---
title: "http-sitemap-generator"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Spiders a web server and displays its directory structure along with\nnumber and types of files in each folder. Note that files listed as\nhaving an 'Other' extension are ones that have no extension or that\nare a root document."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-sitemap-generator -p 80 <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-sitemap-generator:"
  - "|   Directory structure:"
  - "|     /"
  - "|       Other: 1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-sitemap-generator.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-sitemap-generator.html"
---

Spiders a web server and displays its directory structure along with
number and types of files in each folder. Note that files listed as
having an 'Other' extension are ones that have no extension or that
are a root document.
