---
title: "ms-sql-empty-password"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Attempts to authenticate to Microsoft SQL Servers using an empty password for\nthe sysadmin (sa) account."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 445 --script ms-sql-empty-password --script-args mssql.instance-all <host>\nnmap -p 1433 --script ms-sql-empty-password <host>"
outputPreview:
  - "| ms-sql-empty-password:"
  - "|   [192.168.100.128\\PROD]"
  - "|_    sa:<empty> => Login Success"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-empty-password.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-empty-password.html"
---

Attempts to authenticate to Microsoft SQL Servers using an empty password for
the sysadmin (sa) account.
SQL Server credentials required: No (will not benefit from
 mssql.username & mssql.password ).
Run criteria:

 Host script: Will run if the mssql.instance-all , mssql.instance-name

or mssql.instance-port script arguments are used (see mssql.lua).

 Port script: Will run against any services identified as SQL Servers, but only

if the mssql.instance-all , mssql.instance-name
and mssql.instance-port script arguments are NOT used.

WARNING: SQL Server 2005 and later versions include support for account lockout
policies (which are enforced on a per-user basis).
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
