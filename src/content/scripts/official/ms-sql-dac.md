---
title: "ms-sql-dac"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Queries the Microsoft SQL Browser service for the DAC (Dedicated Admin\nConnection) port of a given (or all) SQL Server instance. The DAC port\nis used to connect to the database instance when normal connection\nattempts fail, for example, when server is hanging, out of memory or\nin other bad states. In addition, the DAC port provides an admin with\naccess to system objects otherwise not accessible over normal\nconnections."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "hostrule"
  - "portrule"
scriptTypes:
  - "hostrule"
  - "portrule"
protocols: []
ports: []
usage: "sudo nmap -sU -p 1434 --script ms-sql-dac <ip>"
outputPreview:
  - "| ms-sql-dac:"
  - "|   SQLSERVER:"
  - "|     port: 1533"
  - "|_    state: open"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-dac.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-dac.html"
---

Queries the Microsoft SQL Browser service for the DAC (Dedicated Admin
Connection) port of a given (or all) SQL Server instance. The DAC port
is used to connect to the database instance when normal connection
attempts fail, for example, when server is hanging, out of memory or
in other bad states. In addition, the DAC port provides an admin with
access to system objects otherwise not accessible over normal
connections.
The DAC feature is accessible on the loopback adapter per default, but
can be activated for remote access by setting the 'remote admin
connection' configuration value to 1. In some cases, when DAC has been
remotely enabled but later disabled, the sql browser service may
incorrectly report it as available. The script therefore attempts to
connect to the reported port in order to verify whether it's
accessible or not.
