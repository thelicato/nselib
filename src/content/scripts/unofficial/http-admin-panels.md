---
title: http-admin-panels
source: unofficial
category: Web
shortDescription: Looks for known admin interfaces across common web applications and self-hosted tools.
risk: informational
tags:
  - web
  - admin
  - discovery
protocols:
  - tcp
ports:
  - "80"
  - "443"
usage: nmap -p80,443 --script http-admin-panels <target>
outputPreview:
  - "/admin/login: 200 OK"
  - "/grafana/login: 302 Found"
author: Community Maintainer
lastReviewed: "2026-03-27"
---

`http-admin-panels` is a mock unofficial script that helps identify reachable login panels and management portals.

It is intended for broad web inventory work where quickly spotting exposed administrative surfaces is valuable.
