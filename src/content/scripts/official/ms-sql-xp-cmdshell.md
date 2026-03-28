---
title: "ms-sql-xp-cmdshell"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Attempts to run a command using the command shell of Microsoft SQL\nServer (ms-sql)."
risk: intrusive
tags:
  - "intrusive"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 445 --script ms-sql-discover,ms-sql-empty-password,ms-sql-xp-cmdshell <host>\nnmap -p 1433 --script ms-sql-xp-cmdshell --script-args mssql.username=sa,mssql.password=sa,ms-sql-xp-cmdshell.cmd=\"net user test test /add\" <host>"
outputPreview:
  - "| ms-sql-xp-cmdshell:"
  - "|   [192.168.56.3\\MSSQLSERVER]"
  - "|     Command: ipconfig /all"
  - "|       output"
  - "|       ======"
  - "|"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-xp-cmdshell.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-xp-cmdshell.html"
---

Attempts to run a command using the command shell of Microsoft SQL
Server (ms-sql).
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
the command until either all credentials are exhausted or until the
command is executed.
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
