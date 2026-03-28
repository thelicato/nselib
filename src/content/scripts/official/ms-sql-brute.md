---
title: "ms-sql-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs password guessing against Microsoft SQL Server (ms-sql). Works best in\nconjunction with the broadcast-ms-sql-discover script."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 445 --script ms-sql-brute --script-args mssql.instance-all,userdb=customuser.txt,passdb=custompass.txt <host>\nnmap -p 1433 --script ms-sql-brute --script-args userdb=customuser.txt,passdb=custompass.txt <host>"
outputPreview:
  - "| ms-sql-brute:"
  - "|   [192.168.100.128\\TEST]"
  - "|     No credentials found"
  - "|     Warnings:"
  - "|       sa: AccountLockedOut"
  - "|   [192.168.100.128\\PROD]"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-brute.html"
---

Performs password guessing against Microsoft SQL Server (ms-sql). Works best in
conjunction with the broadcast-ms-sql-discover script.
SQL Server credentials required: No (will not benefit from mssql.username & mssql.password ).
Run criteria:

 Host script: Will run if the mssql.instance-all , mssql.instance-name or mssql.instance-port script arguments are used (see mssql.lua).

 Port script: Will run against any services identified as SQL Servers, but only if the mssql.instance-all , mssql.instance-name and mssql.instance-port script arguments are NOT used.

WARNING: SQL Server 2005 and later versions include support for account lockout
policies (which are enforced on a per-user basis). If an account is locked out,
the script will stop running for that instance, unless the
 ms-sql-brute.ignore-lockout argument is used.
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
