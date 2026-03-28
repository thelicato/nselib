---
title: "1125-http-cisco-webvpn-cookie"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Looks for webvpn cookies that could denote a Cisco ASA SSL VPN WebVPN Service\nis enabled on a port. This may also apply to a Cisco IOS based router\nrunning the Client SSLVPN Service which is rare but possible."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p <port> --script http-bigip-cookie <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp  open  http"
  - "| http-cisco-webvpn-cookie:"
  - "|   webvpn:"
  - "|     Potential Cisco SSLVPN Cookie Found"
  - "|   webvpn_as:"
author: "mosesrenegade (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1125-http-cisco-webvpn-cookie.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Looks for webvpn cookies that could denote a Cisco ASA SSL VPN WebVPN Service
is enabled on a port. This may also apply to a Cisco IOS based router
running the Client SSLVPN Service which is rare but possible.
