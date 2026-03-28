---
title: "dns-update"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Attempts to perform a dynamic DNS update without authentication."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 53 --script=dns-update --script-args=dns-update.hostname=foo.example.com,dns-update.ip=192.0.2.1 <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "53/udp open  domain"
  - "| dns-update:"
  - "|   Successfully added the record \"nmap-test.cqure.net\""
  - "|_  Successfully deleted the record \"nmap-test.cqure.net\""
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-update.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-update.html"
---

Attempts to perform a dynamic DNS update without authentication.
Either the test or both the hostname and
 ip script arguments are required. Note that the test
function will probably fail due to using a static zone name that is not the
zone configured on your target.
