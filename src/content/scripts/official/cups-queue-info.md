---
title: "cups-queue-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Lists currently queued print jobs of the remote CUPS service grouped by\nprinter."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 631 <ip> --script cups-queue-info"
outputPreview:
  - "PORT    STATE SERVICE"
  - "631/tcp open  ipp"
  - "| cups-queue-info:"
  - "|   HP Laserjet"
  - "|     id  time                 state  size (kb)  owner            jobname"
  - "|     14  2012-04-26 22:01:19  Held   2071k      Patrik Karlsson  Print - CUPS Implementation of IPP - Documentation - CUPS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cups-queue-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cups-queue-info.html"
---

Lists currently queued print jobs of the remote CUPS service grouped by
printer.
