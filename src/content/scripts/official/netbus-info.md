---
title: "netbus-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Opens a connection to a NetBus server and extracts information about\nthe host and the NetBus service itself."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 12345 --script netbus-info <target> --script-args netbus-info.password=<password>"
outputPreview:
  - "12345/tcp open  netbus"
  - "| netbus-info:"
  - "|   ACL"
  - "|     127.0.0.1"
  - "|   APPLICATIONS"
  - "|     PuTTY Configuration"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/netbus-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/netbus-info.html"
---

Opens a connection to a NetBus server and extracts information about
the host and the NetBus service itself.
The extracted host information includes a list of running
applications, and the hosts sound volume settings.
The extracted service information includes its access control list
(acl), server information, and setup. The acl is a list of IP
addresses permitted to access the service. Server information
contains details about the server installation path, restart
persistence, user account that the server is running on, and the
amount of connected NetBus clients. The setup information contains
configuration details, such as the services TCP port number, traffic
logging setting, password, an email address for receiving login
notifications, an email address used for sending the notifications,
and an smtp-server used for notification delivery.
