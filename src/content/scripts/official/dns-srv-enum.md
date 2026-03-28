---
title: "dns-srv-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Enumerates various common service (SRV) records for a given domain name.\nThe service records contain the hostname, port and priority of servers for a given service.\nThe following services are enumerated by the script:\n - Active Directory Global Catalog\n - Exchange Autodiscovery\n - Kerberos KDC Service\n - Kerberos Passwd Change Service\n - LDAP Servers\n - SIP Servers\n - XMPP S2S\n - XMPP C2S"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script dns-srv-enum --script-args \"dns-srv-enum.domain='example.com'\""
outputPreview:
  - "| dns-srv-enum:"
  - "|   Active Directory Global Catalog"
  - "|     service   prio  weight  host"
  - "|     3268/tcp  0     100     stodc01.example.com"
  - "|   Kerberos KDC Service"
  - "|     service  prio  weight  host"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-srv-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-srv-enum.html"
---

Enumerates various common service (SRV) records for a given domain name.
The service records contain the hostname, port and priority of servers for a given service.
The following services are enumerated by the script:
 - Active Directory Global Catalog
 - Exchange Autodiscovery
 - Kerberos KDC Service
 - Kerberos Passwd Change Service
 - LDAP Servers
 - SIP Servers
 - XMPP S2S
 - XMPP C2S
