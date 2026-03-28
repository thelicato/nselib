---
title: "http-apache-negotiation"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Checks if the target http server has mod_negotiation enabled. This\nfeature can be leveraged to find hidden resources and spider a web\nsite using fewer requests."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-apache-negotiation --script-args http-apache-negotiation.root=/root/ <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "|_http-apache-negotiation: mod_negotiation enabled."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-apache-negotiation.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-apache-negotiation.html"
---

Checks if the target http server has mod_negotiation enabled. This
feature can be leveraged to find hidden resources and spider a web
site using fewer requests.
The script works by sending requests for resources like index and home
without specifying the extension. If mod_negotiate is enabled (default
Apache configuration), the target would reply with content-location header
containing target resource (such as index.html) and vary header containing
"negotiate" depending on the configuration.
