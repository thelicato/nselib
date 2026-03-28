---
title: "telnet-encryption"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Determines whether the encryption option is supported on a remote telnet\nserver. Some systems (including FreeBSD and the krb5 telnetd available in many\nLinux distributions) implement this option incorrectly, leading to a remote\nroot vulnerability. This script currently only tests whether encryption is\nsupported, not for that particular vulnerability."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 23 <ip> --script telnet-encryption"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "23/tcp open  telnet  syn-ack"
  - "| telnet-encryption:"
  - "|_  Telnet server supports encryption"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/telnet-encryption.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/telnet-encryption.html"
---

Determines whether the encryption option is supported on a remote telnet
server. Some systems (including FreeBSD and the krb5 telnetd available in many
Linux distributions) implement this option incorrectly, leading to a remote
root vulnerability. This script currently only tests whether encryption is
supported, not for that particular vulnerability.
