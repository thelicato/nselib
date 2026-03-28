---
title: "http-git"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "vuln"
shortDescription: "Checks for a Git repository found in a website's document root\n/.git/<something>) and retrieves as much repo information as\npossible, including language/framework, remotes, last commit\nmessage, and repository description."
risk: safe
tags:
  - "default"
  - "safe"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-git:"
  - "|   127.0.0.1:80/.git/"
  - "|     Git repository found!"
  - "|     .git/config matched patterns 'passw'"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-git.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-git.html"
---

Checks for a Git repository found in a website's document root
/.git/<something>) and retrieves as much repo information as
possible, including language/framework, remotes, last commit
message, and repository description.
