---
title: "pjl-ready-message"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Retrieves or sets the ready message on printers that support the Printer\nJob Language. This includes most PostScript printers that listen on port\n9100. Without an argument, displays the current ready message. With the\n pjl_ready_message script argument, displays the old ready\nmessage and changes it to the message given."
risk: intrusive
tags:
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=pjl-ready-message.nse \\\n  --script-args='pjl_ready_message=\"your message here\"'"
outputPreview:
  - "9100/tcp open  jetdirect"
  - "|_ pjl-ready-message: \"READY\" changed to \"p0wn3d pr1nt3r\""
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pjl-ready-message.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pjl-ready-message.html"
---

Retrieves or sets the ready message on printers that support the Printer
Job Language. This includes most PostScript printers that listen on port
9100. Without an argument, displays the current ready message. With the
 pjl_ready_message script argument, displays the old ready
message and changes it to the message given.
