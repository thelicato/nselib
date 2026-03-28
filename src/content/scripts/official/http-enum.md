---
title: "http-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
  - "vuln"
shortDescription: "Enumerates directories used by popular web applications and servers."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=http-enum <target>"
outputPreview:
  - "Interesting ports on test.skullsecurity.org (208.81.2.52):"
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-enum:"
  - "|   /icons/: Icons and images"
  - "|   /images/: Icons and images"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-enum.html"
---

Enumerates directories used by popular web applications and servers.
This parses a fingerprint file that's similar in format to the Nikto Web application
scanner. This script, however, takes it one step further by building in advanced pattern matching as well
as having the ability to identify specific versions of Web applications.
You can also parse a Nikto-formatted database using http-fingerprints.nikto-db-path. This will try to parse
most of the fingerprints defined in nikto's database in real time. More documentation about this in the
nselib/data/http-fingerprints.lua file.
Currently, the database can be found under Nmap's directory in the nselib/data folder. The file is called
http-fingerprints and has a long description of its functionality in the file header.
Many of the finger prints were discovered by me (Ron Bowes), and a number of them are from the Yokoso
project, used with permission from Kevin Johnson ( http://seclists.org/nmap-dev/2009/q3/0685.html ).
Initially, this script attempts to access two different random files in order to detect servers
that don't return a proper 404 Not Found status. In the event that they return 200 OK, the body
has any non-static-looking data removed (URI, time, etc), and saved. If the two random attempts
return different results, the script aborts (since a 200-looking 404 cannot be distinguished from
an actual 200). This will prevent most false positives.
In addition, if the root folder returns a 301 Moved Permanently or 401 Authentication Required,
this script will also abort. If the root folder has disappeared or requires authentication, there
is little hope of finding anything inside it.
By default, only pages that return 200 OK or 401 Authentication Required are displayed. If the
 http-enum.displayall script argument is set, however, then all results will be displayed (except
for 404 Not Found and the status code returned by the random files). Entries in the http-fingerprints
database can specify their own criteria for accepting a page as valid.
