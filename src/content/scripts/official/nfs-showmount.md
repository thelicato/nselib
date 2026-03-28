---
title: "nfs-showmount"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Shows NFS exports, like the showmount -e command."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=nfs-showmount <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "111/tcp open  rpcbind"
  - "| nfs-showmount:"
  - "|   /home/storage/backup 10.46.200.0/255.255.255.0"
  - "|_  /home 1.2.3.4/255.255.255.255 10.46.200.0/255.255.255.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nfs-showmount.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nfs-showmount.html"
---

Shows NFS exports, like the showmount -e command.
