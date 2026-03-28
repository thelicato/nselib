---
title: "acarsd-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Retrieves information from a listening acarsd daemon. Acarsd decodes\nACARS (Aircraft Communication Addressing and Reporting System) data in\nreal time. The information retrieved by this script includes the\ndaemon version, API version, administrator e-mail address and\nlistening frequency."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script acarsd-info --script-args \"acarsd-info.timeout=10,acarsd-info.bytes=512\" -p <port> <host>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "2202/tcp open  unknown"
  - "| acarsd-info:"
  - "|   Version: 1.65"
  - "|   API Version: API-2005-Oct-18"
  - "|   Authorization Required: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/acarsd-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/acarsd-info.html"
---

Retrieves information from a listening acarsd daemon. Acarsd decodes
ACARS (Aircraft Communication Addressing and Reporting System) data in
real time. The information retrieved by this script includes the
daemon version, API version, administrator e-mail address and
listening frequency.
