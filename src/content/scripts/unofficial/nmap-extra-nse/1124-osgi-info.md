---
title: "1124-osgi-info"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Gathers information (a list of server properties) from an Eclipse Equinoxe OSGi\n(Open Service Gateway initiative) console."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "version"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p <port> <ip> --script osgi-info"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "5555/tcp open  telnet  Eclipse Equinoxe OSGi Shell (direct mode)"
  - "| osgi-info:"
  - "|   username: root"
  - "|   OS Version: Linux 4.4.0-38-generic (amd64 little endian)"
  - "|   Java Runtime: 1.8.0_101-b13 (Java(TM) SE Runtime Environment)"
author: "Quentin Kaiser (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1124-osgi-info.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Gathers information (a list of server properties) from an Eclipse Equinoxe OSGi
(Open Service Gateway initiative) console.
References:
    * https://www.eclipse.org/equinox/documents/quickstart-framework.php
