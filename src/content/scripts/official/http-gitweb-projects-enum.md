---
title: "http-gitweb-projects-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves a list of Git projects, owners and descriptions from a gitweb (web interface to the Git revision control system)."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 www.example.com --script http-gitweb-projects-enum"
outputPreview:
  - "80/tcp open  http"
  - "| http-gitweb-projects-enum:"
  - "| Projects from gitweb.samba.org:"
  - "|   PROJECT                         AUTHOR            DESCRIPTION"
  - "|   sando.git                       authornum1        no description"
  - "|   camui/san.git                   devteam           no description"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-gitweb-projects-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-gitweb-projects-enum.html"
---

Retrieves a list of Git projects, owners and descriptions from a gitweb (web interface to the Git revision control system).
