---
title: "ms-sql-config"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Queries Microsoft SQL Server (ms-sql) instances for a list of databases, linked servers,\nand configuration settings."
risk: safe
tags:
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 1433 --script ms-sql-config --script-args mssql.username=sa,mssql.password=sa <host>"
outputPreview:
  - "| ms-sql-config:"
  - "|   [192.168.100.25\\MSSQLSERVER]"
  - "|     Databases"
  - "|       name      db_size owner"
  - "|       ====      ======= ====="
  - "|       nmap      2.74 MB MAC-MINI\\david"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-config.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-config.html"
---

Queries Microsoft SQL Server (ms-sql) instances for a list of databases, linked servers,
and configuration settings.
SQL Server credentials required: Yes (use ms-sql-brute , ms-sql-empty-password
and/or mssql.username & mssql.password )
Run criteria:

 Host script: Will run if the mssql.instance-all , mssql.instance-name

or mssql.instance-port script arguments are used (see mssql.lua).

 Port script: Will run against any services identified as SQL Servers, but only

if the mssql.instance-all , mssql.instance-name
and mssql.instance-port script arguments are NOT used.

NOTE: Communication with instances via named pipes depends on the smb
library. To communicate with (and possibly to discover) instances via named pipes,
the host must have at least one SMB port (e.g. TCP 445) that was scanned and
found to be open. Additionally, named pipe connections may require Windows
authentication to connect to the Windows host (via SMB) in addition to the
authentication required to connect to the SQL Server instances itself. See the
documentation and arguments for the smb library for more information.
NOTE: By default, the ms-sql-* scripts may attempt to connect to and communicate
with ports that were not included in the port list for the Nmap scan. This can
be disabled using the mssql.scanned-ports-only script argument.
