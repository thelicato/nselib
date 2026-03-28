---
title: "nfs-statfs"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves disk space statistics and information from a remote NFS share.\nThe output is intended to resemble the output of df ."
risk: safe
tags:
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 111 --script=nfs-statfs <target>\nnmap -sV --script=nfs-statfs <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "| nfs-statfs:"
  - "|   Filesystem           1K-blocks  Used     Available  Use%  Blocksize"
  - "|   /mnt/nfs/files       5542276    2732012  2528728    52%   4096"
  - "|_  /mnt/nfs/opensource  5534416    620640   4632644    12%   4096"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nfs-statfs.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nfs-statfs.html"
---

Retrieves disk space statistics and information from a remote NFS share.
The output is intended to resemble the output of df .
The script will provide pathconf information of the remote NFS if
the version used is NFSv3.
