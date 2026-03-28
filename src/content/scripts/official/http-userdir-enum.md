---
title: "http-userdir-enum"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Attempts to enumerate valid usernames on web servers running with the mod_userdir\nmodule or similar enabled."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=http-userdir-enum <target>"
outputPreview:
  - "80/tcp open  http    syn-ack Apache httpd 2.2.9"
  - "|_ http-userdir-enum: Potential Users: root (403), user (200), test (200)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-userdir-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-userdir-enum.html"
---

Attempts to enumerate valid usernames on web servers running with the mod_userdir
module or similar enabled.
The Apache mod_userdir module allows user-specific directories to be accessed
using the http://example.com/~user/ syntax. This script makes http requests in
order to discover valid user-specific directories and infer valid usernames. By
default, the script will use Nmap's
 nselib/data/usernames.lst . An HTTP response
status of 200 or 403 means the username is likely a valid one and the username
will be output in the script results along with the status code (in parentheses).
This script makes an attempt to avoid false positives by requesting a directory
which is unlikely to exist. If the server responds with 200 or 403 then the
script will not continue testing it.
CVE-2001-1013: http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2001-1013 .
