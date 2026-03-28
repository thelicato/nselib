---
title: "eap-info"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Enumerates the authentication methods offered by an EAP (Extensible\nAuthentication Protocol) authenticator for a given identity or for the\nanonymous identity if no argument is passed."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -e interface --script eap-info [--script-args=\"eap-info.identity=0-user,eap-info.scan={13,50}\"] <target>"
outputPreview:
  - "Pre-scan script results:"
  - "| eap-info:"
  - "| Available authentication methods with identity=\"anonymous\" on interface eth2"
  - "|   true     PEAP"
  - "|   true     EAP-TTLS"
  - "|   false    EAP-TLS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/eap-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/eap-info.html"
---

Enumerates the authentication methods offered by an EAP (Extensible
Authentication Protocol) authenticator for a given identity or for the
anonymous identity if no argument is passed.
