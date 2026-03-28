---
title: "ncp-enum-users"
source: official
category: "Auth"
categories:
  - "auth"
  - "safe"
shortDescription: "Retrieves a list of all eDirectory users from the Novell NetWare Core Protocol (NCP) service."
risk: safe
tags:
  - "auth"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=ncp-enum-users <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "524/tcp open  ncp     syn-ack"
  - "| ncp-enum-users:"
  - "|   CN=admin.O=cqure"
  - "|   CN=cawi.OU=finance.O=cqure"
  - "|   CN=linux-l84tadmin.O=cqure"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ncp-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ncp-enum-users.html"
---

Retrieves a list of all eDirectory users from the Novell NetWare Core Protocol (NCP) service.
