---
title: http-enum
source: official
category: Discovery
shortDescription: Enumerates common web application paths by probing a curated fingerprint list.
risk: informational
tags:
  - http
  - discovery
  - web
protocols:
  - tcp
ports:
  - "80"
  - "443"
usage: nmap -p80,443 --script http-enum <target>
outputPreview:
  - "/admin/: Possible admin folder"
  - "/phpinfo.php: Exposes PHP configuration"
author: Nmap Project
lastReviewed: "2026-03-27"
---

`http-enum` is a practical first-stop NSE script when you want fast visibility into web content that may deserve deeper review.

It checks known paths and fingerprints, then highlights matches that often indicate admin portals, diagnostic endpoints, CMS installs, or default application scaffolding.

It is commonly used during early web enumeration to surface interesting paths before moving into more targeted assessment.
