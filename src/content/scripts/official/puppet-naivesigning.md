---
title: "puppet-naivesigning"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Detects if naive signing is enabled on a Puppet server. This enables attackers\nto create any Certificate Signing Request and have it signed, allowing them\nto impersonate as a puppet agent. This can leak the configuration of the agents\nas well as any other sensitive information found in the configuration files."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8140 --script puppet-naivesigning <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "8140/tcp open  puppet  syn-ack ttl 64"
  - "| puppet-naivesigning:"
  - "|   Puppet Naive autosigning enabled! Naive autosigning causes the Puppet CA to autosign ALL CSRs."
  - "|   Attackers will be able to obtain a configuration catalog, which might contain sensitive information."
  - "|   -----BEGIN CERTIFICATE-----"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/puppet-naivesigning.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/puppet-naivesigning.html"
---

Detects if naive signing is enabled on a Puppet server. This enables attackers
to create any Certificate Signing Request and have it signed, allowing them
to impersonate as a puppet agent. This can leak the configuration of the agents
as well as any other sensitive information found in the configuration files.
This script makes use of the Puppet HTTP API interface to sign the request.
This script has been Tested on versions 3.8.5, 4.10.
