---
title: "http-traceroute"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Exploits the Max-Forwards HTTP header to detect the presence of reverse proxies."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-traceroute <targets>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-traceroute:"
  - "|   HTML title"
  - "|     Hop #1: Twitter / Over capacity"
  - "|     Hop #2: t.co / Twitter"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-traceroute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-traceroute.html"
---

Exploits the Max-Forwards HTTP header to detect the presence of reverse proxies.
The script works by sending HTTP requests with values of the Max-Forwards HTTP
header varying from 0 to 2 and checking for any anomalies in certain response
values such as the status code, Server, Content-Type and Content-Length HTTP
headers and body values such as the HTML title.
