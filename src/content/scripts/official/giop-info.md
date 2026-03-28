---
title: "giop-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Queries a CORBA naming server for a list of objects."
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
  - "PORT     STATE SERVICE              REASON"
  - "1050/tcp open  java-or-OTGfileshare syn-ack"
  - "| giop-info:"
  - "|   Object: Hello"
  - "|   Context: Test"
  - "|_  Object: GoodBye"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/giop-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/giop-info.html"
---

Queries a CORBA naming server for a list of objects.
