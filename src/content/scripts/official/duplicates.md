---
title: "duplicates"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "Attempts to discover multihomed systems by analysing and comparing\ninformation collected by other scripts. The information analyzed\ncurrently includes, SSL certificates, SSH host keys, MAC addresses,\nand Netbios server names."
risk: safe
tags:
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "sudo nmap -PN -p445,443 --script duplicates,nbstat,ssl-cert <ips>"
outputPreview:
  - "| duplicates:"
  - "|   ARP"
  - "|       MAC: 01:23:45:67:89:0a"
  - "|           192.168.99.10"
  - "|           192.168.99.11"
  - "|   Netbios"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/duplicates.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/duplicates.html"
---

Attempts to discover multihomed systems by analysing and comparing
information collected by other scripts. The information analyzed
currently includes, SSL certificates, SSH host keys, MAC addresses,
and Netbios server names.
In order for the script to be able to analyze the data it has dependencies to
the following scripts: ssl-cert,ssh-hostkey,nbtstat.
One or more of these scripts have to be run in order to allow the duplicates
script to analyze the data.
