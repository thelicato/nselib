---
title: "rpc-grind"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Fingerprints the target RPC port to extract the target service, RPC number and version."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>\nnmap --script rpc-grind <target>\nnmap --script rpc-grind --script-args 'rpc-grind.threads=8' -p <targetport>\n<target>"
outputPreview:
  - "PORT      STATE SERVICE VERSION"
  - "53344/udp open  walld   1 (RPC #100008)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rpc-grind.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rpc-grind.html"
---

Fingerprints the target RPC port to extract the target service, RPC number and version.
The script works by sending RPC Null call requests with a random high version
unsupported number to the target service with iterated over RPC program numbers
from the nmap-rpc file and check for replies from the target port.
A reply with a RPC accept state 2 (Remote can't support version) means that we
the request sent the matching program number, and we proceed to extract the
supported versions. A reply with an accept state RPC accept state 1 (remote
hasn't exported program) means that we have sent the incorrect program number.
Any other accept state is an incorrect behaviour.
