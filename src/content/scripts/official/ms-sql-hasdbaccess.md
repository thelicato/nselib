---
title: "ms-sql-hasdbaccess"
source: official
category: "Auth"
categories:
  - "auth"
  - "discovery"
  - "safe"
shortDescription: "Queries Microsoft SQL Server (ms-sql) instances for a list of databases a user has\naccess to."
risk: safe
tags:
  - "auth"
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 1433 --script ms-sql-hasdbaccess --script-args mssql.username=sa,mssql.password=sa <host>"
outputPreview:
  - "| ms-sql-hasdbaccess:"
  - "|   [192.168.100.25\\MSSQLSERVER]"
  - "|       webshop_reader"
  - "|         dbname\towner"
  - "|         ====== ====="
  - "|         hr\tsa"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-hasdbaccess.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-hasdbaccess.html"
---

Queries Microsoft SQL Server (ms-sql) instances for a list of databases a user has
access to.
SQL Server credentials required: Yes (use ms-sql-brute , ms-sql-empty-password
and/or mssql.username & mssql.password )
Run criteria:

 Host script: Will run if the mssql.instance-all , mssql.instance-name

or mssql.instance-port script arguments are used (see mssql.lua).

 Port script: Will run against any services identified as SQL Servers, but only

if the mssql.instance-all , mssql.instance-name
and mssql.instance-port script arguments are NOT used.

The script needs an account with the sysadmin server role to work.
When run, the script iterates over the credentials and attempts to run
the command for each available set of credentials.
NOTE: The "owner" field in the results will be truncated at 20 characters. This
is a limitation of the sp_MShasdbaccess stored procedure that the
script uses.
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
