---
title: "ms-sql-query"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Runs a query against Microsoft SQL Server (ms-sql)."
risk: safe
tags:
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 1433 --script ms-sql-query --script-args mssql.username=sa,mssql.password=sa,ms-sql-query.query=\"SELECT * FROM master..syslogins\" <host>"
outputPreview:
  - "| ms-sql-query:"
  - "|   [192.168.100.25\\MSSQLSERVER]"
  - "|     Query: SELECT @@version version"
  - "|       version"
  - "|       ======="
  - "|       Microsoft SQL Server 2005 - 9.00.3068.00 (Intel X86)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-query.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-query.html"
---

Runs a query against Microsoft SQL Server (ms-sql).
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
