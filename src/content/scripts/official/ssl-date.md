---
title: "ssl-date"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "Retrieves a target host's time and date from its TLS ServerHello response."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap <target> --script=ssl-date"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "5222/tcp open  xmpp-client syn-ack"
  - "|_ssl-date: 2012-08-02T18:29:31Z; +4s from local time."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-date.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-date.html"
---

Retrieves a target host's time and date from its TLS ServerHello response.
In many TLS implementations, the first four bytes of server randomness
are a Unix timestamp. The script will test whether this is indeed true
and report the time only if it passes this test.
