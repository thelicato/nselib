---
title: "x11-access"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "auth"
shortDescription: "Checks if you're allowed to connect to the X server."
risk: safe
tags:
  - "default"
  - "safe"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "Host script results:"
  - "|_ x11-access: X server access is granted"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/x11-access.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/x11-access.html"
---

Checks if you're allowed to connect to the X server.
If the X server is listening on TCP port 6000+n (where n is the display
number), it is possible to check if you're able to get connected to the
remote display by sending a X11 initial connection request.
In reply, the success byte (0x00 or 0x01) will determine if you are in
the xhost + list. In this case, script will display the message:
 X server access is granted .
