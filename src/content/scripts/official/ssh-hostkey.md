---
title: "ssh-hostkey"
source: official
category: "Safe"
categories:
  - "safe"
  - "default"
  - "discovery"
shortDescription: "Shows SSH hostkeys."
risk: safe
tags:
  - "safe"
  - "default"
  - "discovery"
scriptTypes: []
protocols: []
ports: []
usage: "nmap host --script ssh-hostkey --script-args ssh_hostkey=full\nnmap host --script ssh-hostkey --script-args ssh_hostkey=all\nnmap host --script ssh-hostkey --script-args ssh_hostkey='visual bubble'"
outputPreview:
  - "Post-scan script results:"
  - "| ssh-hostkey: Possible duplicate hosts"
  - "| Key 1024 60:ac:4d:51:b1:cd:85:09:12:16:92:76:1d:5d:27:6e (DSA) used by:"
  - "|   192.168.1.1"
  - "|   192.168.1.2"
  - "| Key 2048 2c:22:75:60:4b:c3:3b:18:a2:97:2c:96:7e:28:dc:dd (RSA) used by:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssh-hostkey.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssh-hostkey.html"
---

Shows SSH hostkeys.
Shows the target SSH server's key fingerprint and (with high enough
verbosity level) the public key itself. It records the discovered host keys
in nmap.registry for use by other scripts. Output can be
controlled with the ssh_hostkey script argument.
You may also compare the retrieved key with the keys in your known-hosts
file using the known-hosts argument.
The script also includes a postrule that check for duplicate hosts using the
gathered keys.
