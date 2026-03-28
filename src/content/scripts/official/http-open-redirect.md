---
title: "http-open-redirect"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Spiders a website and attempts to identify open redirects. Open\nredirects are handlers which commonly take a URL as a parameter and\nresponds with a HTTP redirect (3XX) to the target. Risks of open redirects are\ndescribed at http://cwe.mitre.org/data/definitions/601.html ."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-open-redirect <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "| http-open-redirect:"
  - "|_  https://foobar.target.se:443/redirect.php?url=http%3A%2f%2fscanme.nmap.org%2f"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-open-redirect.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-open-redirect.html"
---

Spiders a website and attempts to identify open redirects. Open
redirects are handlers which commonly take a URL as a parameter and
responds with a HTTP redirect (3XX) to the target. Risks of open redirects are
described at http://cwe.mitre.org/data/definitions/601.html .
Only open redirects that are directly linked on the target website can be
discovered this way. If an open redirector is not linked, it will not be
discovered.
