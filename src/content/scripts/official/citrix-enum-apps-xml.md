---
title: "citrix-enum-apps-xml"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Extracts a list of applications, ACLs, and settings from the Citrix XML\nservice."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=citrix-enum-apps-xml -p 80,443,8080 <host>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8080/tcp open  http-proxy"
  - "| citrix-enum-apps-xml:"
  - "|   Application: Notepad; Users: Anonymous"
  - "|   Application: iexplorer; Users: Anonymous"
  - "|_  Application: registry editor; Users: WIN-B4RL0SUCJ29\\Joe; Groups: WIN-B4RL0SUCJ29\\HR, *CITRIX_BUILTIN*\\*CITRIX_ADMINISTRATORS*"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/citrix-enum-apps-xml.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/citrix-enum-apps-xml.html"
---

Extracts a list of applications, ACLs, and settings from the Citrix XML
service.
The script returns more output with higher verbosity.
