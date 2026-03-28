---
title: "http-webdav-scan"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "default"
shortDescription: "A script to detect WebDAV installations. Uses the OPTIONS and PROPFIND methods."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-webdav-scan -p80,8080 <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8008/tcp open  http"
  - "| http-webdav-scan:"
  - "|   Allowed Methods: GET, HEAD, COPY, MOVE, POST, PUT, PROPFIND, PROPPATCH, OPTIONS, MKCOL, DELETE, TRACE, REPORT"
  - "|   Server Type: DAV/0.9.8 Python/2.7.6"
  - "|   Server Date: Fri, 22 May 2015 19:28:00 GMT"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-webdav-scan.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-webdav-scan.html"
---

A script to detect WebDAV installations. Uses the OPTIONS and PROPFIND methods.
The script sends an OPTIONS request which lists the dav type, server type, date
and allowed methods. It then sends a PROPFIND request and tries to fetch exposed
directories and internal ip addresses by doing pattern matching in the response body.
