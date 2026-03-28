---
title: "broadcast-ataoe-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers servers supporting the ATA over Ethernet protocol. ATA over Ethernet\nis an ethernet protocol developed by the Brantley Coile Company and allows for\nsimple, high-performance access to SATA drives over Ethernet."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-ataoe-discover -e <interface>"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-ataoe-discover:"
  - "|_  Server: 08:00:27:12:34:56; Version: 1; Major: 0; Minor: 1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-ataoe-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-ataoe-discover.html"
---

Discovers servers supporting the ATA over Ethernet protocol. ATA over Ethernet
is an ethernet protocol developed by the Brantley Coile Company and allows for
simple, high-performance access to SATA drives over Ethernet.
Discovery is performed by sending a Query Config Request to the Ethernet
broadcast address with all bits set in the major and minor fields of the
header.
