---
title: "db2-das-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "version"
shortDescription: "Connects to the IBM DB2 Administration Server (DAS) on TCP or UDP port 523 and\nexports the server profile. No authentication is required for this request."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT    STATE SERVICE VERSION"
  - "523/tcp open  ibm-db2 IBM DB2 Database Server 9.07.0"
  - "| db2-das-info: DB2 Administration Server Settings"
  - "| ;DB2 Server Database Access Profile"
  - "| ;Use BINARY file transfer"
  - "| ;Comment lines start with a \";\""
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/db2-das-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/db2-das-info.html"
---

Connects to the IBM DB2 Administration Server (DAS) on TCP or UDP port 523 and
exports the server profile. No authentication is required for this request.
The script will also set the port product and version if a version scan is
requested.
