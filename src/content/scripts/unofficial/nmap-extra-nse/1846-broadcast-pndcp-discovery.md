---
title: "1846-broadcast-pndcp-discovery"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Sends a DCP identify request to the Profinet DCP identification MAC address\n01:0e:cf:00:00:00 and reports the resulsts.\nThe script displays information about the responding Profinet devices which\ncan contain the station name, vendor information and IP address configuration."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "broadcast"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -e <interface> --script=broadcast-pndcp-discovery"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-pndcp-discovery:"
  - "|   00:30:de:40:29:c7 (Wago Kontakttechnik Gmbh):"
  - "|     Interface: enp8s0"
  - "|     IP:"
  - "|       IP Info: IP set"
author: "Andreas Galauner (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1846-broadcast-pndcp-discovery.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Sends a DCP identify request to the Profinet DCP identification MAC address
01:0e:cf:00:00:00 and reports the resulsts.
The script displays information about the responding Profinet devices which
can contain the station name, vendor information and IP address configuration.
Please note that this script is not 100% feature complete as not all my
devices in my lab support all of the possible options.
In order to prevent flooding of your production network, you can set the timeout
value of this script to a higher value. The responseDelay field in the DCP
identify request frame will be calculated according to the specification. This
results in a spread of the answers the devices on the network will send out.
The script needs to be run as a privileged user, typically root.
