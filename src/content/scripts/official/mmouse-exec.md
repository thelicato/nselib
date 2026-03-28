---
title: "mmouse-exec"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Connects to an RPA Tech Mobile Mouse server, starts an application and\nsends a sequence of keys to it. Any application that the user has\naccess to can be started and the key sequence is sent to the\napplication after it has been started."
risk: intrusive
tags:
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 51010 <host> --script mmouse-exec \\\n  --script-args application='/bin/sh',keys='ping -c 5 127.0.0.1'"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "51010/tcp open  unknown syn-ack"
  - "| mmouse-exec:"
  - "|_  Attempted to start application \"/bin/sh\" and sent \"ping -c 5 127.0.0.1\""
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mmouse-exec.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mmouse-exec.html"
---

Connects to an RPA Tech Mobile Mouse server, starts an application and
sends a sequence of keys to it. Any application that the user has
access to can be started and the key sequence is sent to the
application after it has been started.
The Mobile Mouse server runs on OS X, Windows and Linux and enables remote
control of the keyboard and mouse from an iOS device. For more information:
 http://mobilemouse.com/
The script has only been tested against OS X and will detect the remote OS
and abort unless the OS is detected as Mac.
