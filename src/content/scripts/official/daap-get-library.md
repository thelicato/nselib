---
title: "daap-get-library"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves a list of music from a DAAP server. The list includes artist\nnames and album and song titles."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=daap-get-library <target>"
outputPreview:
  - "| daap-get-library:"
  - "|   BUBBA|TWO"
  - "|     Fever Ray"
  - "|       Fever Ray (Deluxe Edition)"
  - "|         Concrete Walls"
  - "|         I'm Not Done"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/daap-get-library.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/daap-get-library.html"
---

Retrieves a list of music from a DAAP server. The list includes artist
names and album and song titles.
Output will be capped to 100 items if not otherwise specified in the
 daap_item_limit script argument. A
 daap_item_limit below zero outputs the complete contents of
the DAAP library.
Based on documentation found here:
 http://www.tapjam.net/daap/ .
