---
title: "http-iis-webdav-vuln"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Checks for a vulnerability in IIS 5.1/6.0 that allows arbitrary users to access\nsecured WebDAV folders by searching for a password-protected folder and\nattempting to access it. This vulnerability was patched in Microsoft Security\nBulletin MS09-020, https://nmap.org/r/ms09-020 ."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-iis-webdav-vuln -p80,8080 <host>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "|_ http-iis-webdav-vuln: WebDAV is ENABLED. Vulnerable folders discovered: /secret, /webdav"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-iis-webdav-vuln.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-iis-webdav-vuln.html"
---

Checks for a vulnerability in IIS 5.1/6.0 that allows arbitrary users to access
secured WebDAV folders by searching for a password-protected folder and
attempting to access it. This vulnerability was patched in Microsoft Security
Bulletin MS09-020, https://nmap.org/r/ms09-020 .
A list of well known folders (almost 900) is used by default. Each one is
checked, and if returns an authentication request (401), another attempt is
tried with the malicious encoding. If that attempt returns a successful result
(207), then the folder is marked as vulnerable.
This script is based on the Metasploit auxiliary module
auxiliary/scanner/http/wmap_dir_webdav_unicode_bypass
