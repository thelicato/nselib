---
title: ftp-anon
source: official
category: Authentication
shortDescription: Checks whether an FTP server accepts anonymous logins and reports the exposed access level.
risk: informational
tags:
  - ftp
  - authentication
  - exposure
protocols:
  - tcp
ports:
  - "21"
usage: nmap -p21 --script ftp-anon <target>
outputPreview:
  - "Anonymous FTP login allowed"
  - "drwxr-xr-x incoming"
author: Nmap Project
lastReviewed: "2026-03-27"
---

`ftp-anon` is commonly used to validate whether an FTP service is exposing public access without credentials.

When anonymous login is enabled, the script can also reveal whether the accessible directories allow reading, writing, or both.
