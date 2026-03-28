---
title: "vmware-version"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Queries VMware server (vCenter, ESX, ESXi) SOAP API to extract the version information."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script vmware-version -p443 <host>"
outputPreview:
  - "| vmware-version:"
  - "|   Server version: VMware ESX 4.1.0"
  - "|   Build: 348481"
  - "|   Locale version: INTL 000"
  - "|   OS type: vmnix-x86"
  - "|_  Product Line ID: esx"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/vmware-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/vmware-version.html"
---

Queries VMware server (vCenter, ESX, ESXi) SOAP API to extract the version information.
The same script as VMware Fingerprinter from VASTO created by Claudio Criscione, Paolo Canaletti
