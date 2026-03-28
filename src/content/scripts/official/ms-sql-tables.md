---
title: "ms-sql-tables"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Queries Microsoft SQL Server (ms-sql) for a list of tables per database."
risk: safe
tags:
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 1433 --script ms-sql-tables --script-args mssql.username=sa,mssql.password=sa <host>"
outputPreview:
  - "| ms-sql-tables:"
  - "|   [192.168.100.25\\MSSQLSERVER]"
  - "|   webshop"
  - "|     table\tcolumn\ttype\tlength"
  - "|     payments\tuser_id\tint\t4"
  - "|     payments\tpurchase_id\tint\t4"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-tables.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-tables.html"
---

Queries Microsoft SQL Server (ms-sql) for a list of tables per database.
SQL Server credentials required: Yes (use ms-sql-brute , ms-sql-empty-password
and/or mssql.username & mssql.password )
Run criteria:

 Host script: Will run if the mssql.instance-all , mssql.instance-name

or mssql.instance-port script arguments are used (see mssql.lua).

 Port script: Will run against any services identified as SQL Servers, but only

if the mssql.instance-all , mssql.instance-name
and mssql.instance-port script arguments are NOT used.

The sysdatabase table should be accessible by more or less everyone.
Once we have a list of databases we iterate over it and attempt to extract
table names. In order for this to succeed we need to have either
sysadmin privileges or an account with access to the db. So, each
database we successfully enumerate tables from we mark as finished, then
iterate over known user accounts until either we have exhausted the users
or found all tables in all the databases.
System databases are excluded.
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
