---
title: "socks-open-proxy"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Checks if an open socks proxy is running on the target."
risk: safe
tags:
  - "default"
  - "discovery"
  - "external"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=socks-open-proxy \\\n   --script-args proxy.url=<host>,proxy.pattern=<pattern>"
outputPreview:
  - "PORT     STATE  SERVICE"
  - "1080/tcp open   socks"
  - "|  socks-open-proxy:"
  - "|   status: open"
  - "|   versions:"
  - "|     socks4"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/socks-open-proxy.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/socks-open-proxy.html"
---

Checks if an open socks proxy is running on the target.
The script attempts to connect to a proxy server and send socks4 and
socks5 payloads. It is considered an open proxy if the script receives
a Request Granted response from the target port.
The payloads try to open a connection to www.google.com port 80. A
different test host can be passed as proxy.url
argument.
