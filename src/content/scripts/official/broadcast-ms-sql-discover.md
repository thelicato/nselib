---
title: "broadcast-ms-sql-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers Microsoft SQL servers in the same broadcast domain."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-ms-sql-discover\nnmap --script broadcast-ms-sql-discover,ms-sql-info --script-args=newtargets"
outputPreview:
  - "| broadcast-ms-sql-discover:"
  - "|   192.168.100.128 (WINXP)"
  - "|     [192.168.100.128\\MSSQLSERVER]"
  - "|       Name: MSSQLSERVER"
  - "|       Product: Microsoft SQL Server 2000"
  - "|       TCP port: 1433"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-ms-sql-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-ms-sql-discover.html"
---

Discovers Microsoft SQL servers in the same broadcast domain.
SQL Server credentials required: No (will not benefit from
 mssql.username & mssql.password ).
The script attempts to discover SQL Server instances in the same broadcast
domain. Any instances found are stored in the Nmap registry for use by any
other ms-sql-* scripts that are run in the same scan.
In contrast to the ms-sql-discover script, the broadcast version
will use a broadcast method rather than targeting individual hosts. However, the
broadcast version will only use the SQL Server Browser service discovery method.
