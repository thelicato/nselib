---
title: "http-barracuda-dir-traversal"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "auth"
shortDescription: "Attempts to retrieve the configuration settings from a Barracuda\nNetworks Spam & Virus Firewall device using the directory traversal\nvulnerability described at\n http://seclists.org/fulldisclosure/2010/Oct/119 ."
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-barracuda-dir-traversal --script-args http-max-cache-size=5000000 -p <port> <host>"
outputPreview:
  - "PORT   STATE SERVICE   REASON"
  - "8000/tcp open  http    syn-ack Barracuda Spam firewall http config"
  - "| http-barracuda-dir-traversal:"
  - "| Users: 256"
  - "| Device: Barracuda Spam Firewall"
  - "| Version: 4.1.0.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-barracuda-dir-traversal.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-barracuda-dir-traversal.html"
---

Attempts to retrieve the configuration settings from a Barracuda
Networks Spam & Virus Firewall device using the directory traversal
vulnerability described at
 http://seclists.org/fulldisclosure/2010/Oct/119 .
This vulnerability is in the "locale" parameter of
"/cgi-mod/view_help.cgi" or "/cgi-bin/view_help.cgi", allowing the
information to be retrieved from a MySQL database dump. The web
administration interface runs on port 8000 by default.
Barracuda Networks Spam & Virus Firewall <= 4.1.1.021 Remote Configuration Retrieval
Original exploit by ShadowHatesYou <Shadow@SquatThis.net>
For more information, see:
 http://seclists.org/fulldisclosure/2010/Oct/119
 http://www.exploit-db.com/exploits/15130/
