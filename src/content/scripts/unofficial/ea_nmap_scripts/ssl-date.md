---
title: "ssl-date"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "Gets the remote host's time from its TLS ServerHello response."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "default"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap <target> --script=ssl-date"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "5222/tcp open  xmpp-client syn-ack"
  - "|_ssl-date: Server time 2012-08-02 18:29:31 GMT; +4s from the local time."
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/ssl-date.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Gets the remote host's time from its TLS ServerHello response.
In many TLS implementations, the first four bytes of server randomness
are a Unix timestamp.
Original idea by Jacob Appelbaum and his TeaTime and tlsdate tools:
* https://github.com/ioerror/TeaTime
* https://github.com/ioerror/tlsdate
