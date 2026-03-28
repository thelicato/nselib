---
title: "sshv1"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Checks if an SSH server supports the obsolete and less secure SSH Protocol Version 1."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "22/tcp open  ssh"
  - "|_sshv1: Server supports SSHv1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sshv1.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sshv1.html"
---

Checks if an SSH server supports the obsolete and less secure SSH Protocol Version 1.
