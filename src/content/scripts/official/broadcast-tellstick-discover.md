---
title: "broadcast-tellstick-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers Telldus Technologies TellStickNet devices on the LAN. The Telldus\nTellStick is used to wirelessly control electric devices such as lights,\ndimmers and electric outlets. For more information: http://www.telldus.com/"
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-tellstick-discover"
outputPreview:
  - "| broadcast-tellstick-discover:"
  - "|   192.168.0.100"
  - "|     Product: TellStickNet"
  - "|     MAC: ACCA12345678"
  - "|     Activation code: 8QABCDEFGH"
  - "|_    Version: 3"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-tellstick-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-tellstick-discover.html"
---

Discovers Telldus Technologies TellStickNet devices on the LAN. The Telldus
TellStick is used to wirelessly control electric devices such as lights,
dimmers and electric outlets. For more information: http://www.telldus.com/
