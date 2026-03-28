---
title: "afp-showmount"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Shows AFP shares and ACLs."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=afp-showmount <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "548/tcp open  afp"
  - "| afp-showmount:"
  - "|   Yoda's Public Folder"
  - "|     Owner: Search,Read,Write"
  - "|     Group: Search,Read"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/afp-showmount.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/afp-showmount.html"
---

Shows AFP shares and ACLs.
