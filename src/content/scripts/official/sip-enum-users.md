---
title: "sip-enum-users"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Enumerates a SIP server's valid extensions (users)."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=sip-enum-users -sU -p 5060 <targets>\n\nnmap --script=sip-enum-users -sU -p 5060 <targets> --script-args\n'sip-enum-users.padding=4, sip-enum-users.minext=1000,\nsip-enum-users.maxext=9999'"
outputPreview:
  - "5060/udp open sip"
  - "| sip-enum-users:"
  - "|   Accounts"
  - "|     101: Auth required"
  - "|     120: No auth"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sip-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sip-enum-users.html"
---

Enumerates a SIP server's valid extensions (users).
The script works by sending REGISTER SIP requests to the server with the
specified extension and checking for the response status code in order
to know if an extension is valid. If a response status code is 401 or
407, it means that the extension is valid and requires authentication. If the
response status code is 200, it means that the extension exists and doesn't
require any authentication while a 403 response status code means that
extension exists but access is forbidden. To skip false positives, the script
begins by sending a REGISTER request for a random extension and checking for
response status code.
