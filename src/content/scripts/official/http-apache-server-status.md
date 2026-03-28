---
title: "http-apache-server-status"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to retrieve the server-status page for Apache webservers that\nhave mod_status enabled. If the server-status page exists and appears to\nbe from mod_status the script will parse useful information such as the\nsystem uptime, Apache version and recent HTTP requests."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-apache-server-status <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-apache-server-status:"
  - "|   Heading: Apache Server Status for example.com (via 127.0.1.1)"
  - "|   Server Version:  Apache/2.4.12 (Ubuntu)"
  - "|   Server Built:  Jul 24 2015 15:59:00"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-apache-server-status.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-apache-server-status.html"
---

Attempts to retrieve the server-status page for Apache webservers that
have mod_status enabled. If the server-status page exists and appears to
be from mod_status the script will parse useful information such as the
system uptime, Apache version and recent HTTP requests.
