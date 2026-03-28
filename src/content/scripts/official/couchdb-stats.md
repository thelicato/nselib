---
title: "couchdb-stats"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Gets database statistics from a CouchDB database."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 5984 --script \"couchdb-stats.nse\" <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "5984/tcp open  httpd   syn-ack"
  - "| couchdb-stats:"
  - "|   httpd_request_methods"
  - "|     GET (number of HTTP GET requests)"
  - "|       current = 5"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/couchdb-stats.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/couchdb-stats.html"
---

Gets database statistics from a CouchDB database.
For more info about the CouchDB HTTP API and the statistics, see
 http://wiki.apache.org/couchdb/Runtime_Statistics
and
 http://wiki.apache.org/couchdb/HTTP_database_API .
