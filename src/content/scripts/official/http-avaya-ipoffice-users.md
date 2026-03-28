---
title: "http-avaya-ipoffice-users"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Attempts to enumerate users in Avaya IP Office systems 7.x."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-avaya-ipoffice-users <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON         VERSION"
  - "80/tcp open  http    syn-ack ttl 99 Avaya IP Office VoIP PBX httpd 7.0(27)"
  - "| http-avaya-ipoffice-users:"
  - "|   title: Avaya IP Office User Listing"
  - "|   users:"
  - "|"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-avaya-ipoffice-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-avaya-ipoffice-users.html"
---

Attempts to enumerate users in Avaya IP Office systems 7.x.
Avaya IP Office systems allow unauthenticated access to the URI '/system/user/scn_user_list'
which returns a XML file containing user information such as display name, full name and
extension number.
