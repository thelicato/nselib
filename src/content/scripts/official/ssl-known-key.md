---
title: "ssl-known-key"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "vuln"
  - "default"
shortDescription: "Checks whether the SSL certificate used by a host has a fingerprint\nthat matches an included database of problematic keys."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "vuln"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script ssl-known-key -p 443 <host>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "|_ssl-known-key: Found in Little Black Box 0.1 (SHA-1: 0028 e7d4 9cfa 4aa5 984f e497 eb73 4856 0787 e496)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-known-key.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-known-key.html"
---

Checks whether the SSL certificate used by a host has a fingerprint
that matches an included database of problematic keys.
The only databases currently checked are the LittleBlackBox 0.1 database of
compromised keys from various devices, some keys reportedly used by the Chinese
state-sponsored hacking division APT1
( https://www.fireeye.com/blog/threat-research/2013/03/md5-sha1.html ),
and the key used by CARBANAK malware
( https://www.fireeye.com/blog/threat-research/2017/06/behind-the-carbanak-backdoor.html ).
However, any file of fingerprints will serve just as well. For example, this
could be used to find weak Debian OpenSSL keys using the widely available (but
too large to include with Nmap) list.
