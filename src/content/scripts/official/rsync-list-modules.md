---
title: "rsync-list-modules"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Lists modules available for rsync (remote file sync) synchronization."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 873 --script rsync-list-modules <ip>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "873/tcp open  rsync"
  - "| rsync-list-modules:"
  - "|   www            \twww directory"
  - "|   log            \tlog directory"
  - "|_  etc            \tetc directory"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rsync-list-modules.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rsync-list-modules.html"
---

Lists modules available for rsync (remote file sync) synchronization.
