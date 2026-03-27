---
title: smb-os-discovery
source: official
category: Enumeration
shortDescription: Extracts operating system, hostname, domain, and SMB metadata from reachable SMB services.
risk: informational
tags:
  - smb
  - windows
  - os-detection
protocols:
  - tcp
ports:
  - "445"
usage: nmap -p445 --script smb-os-discovery <target>
outputPreview:
  - "OS: Windows Server 2019 Standard 17763"
  - "Computer name: FILESRV01"
author: Nmap Project
lastReviewed: "2026-03-27"
---

`smb-os-discovery` provides useful SMB metadata that can help identify the target platform and its role on the network.

It is especially helpful when you want a quick host profile without relying solely on generic OS fingerprinting.
