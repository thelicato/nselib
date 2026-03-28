---
title: "couchdb-databases"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Gets database tables from a CouchDB database."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 5984 --script \"couchdb-databases.nse\" <host>"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "5984/tcp open  unknown syn-ack"
  - "| couchdb-databases:"
  - "|   1 = test_suite_db"
  - "|   2 = test_suite_db_a"
  - "|   3 = test_suite_db/with_slashes"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/couchdb-databases.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/couchdb-databases.html"
---

Gets database tables from a CouchDB database.
For more info about the CouchDB HTTP API, see
 http://wiki.apache.org/couchdb/HTTP_database_API .
