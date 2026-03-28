---
title: "mysql-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Connects to a MySQL server and prints information such as the protocol and\nversion numbers, thread ID, status, capabilities, and the password salt."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "3306/tcp open  mysql"
  - "|  mysql-info:"
  - "|    Protocol: 10"
  - "|    Version: 5.0.51a-3ubuntu5.1"
  - "|    Thread ID: 7"
  - "|    Capabilities flags: 40968"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-info.html"
---

Connects to a MySQL server and prints information such as the protocol and
version numbers, thread ID, status, capabilities, and the password salt.
If service detection is performed and the server appears to be blocking
our host or is blocked because of too many connections, then this script
isn't run (see the portrule).
