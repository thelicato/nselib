---
title: "ms-sql-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to determine configuration and version information for Microsoft SQL\nServer instances."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 445 --script ms-sql-info <host>\nnmap -p 1433 --script ms-sql-info --script-args mssql.instance-port=1433 <host>"
outputPreview:
  - "| ms-sql-info:"
  - "|   Windows server name: WINXP"
  - "|   192.168.100.128\\PROD:"
  - "|     Instance name: PROD"
  - "|     Version:"
  - "|       name: Microsoft SQL Server 2000 SP3"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-info.html"
---

Attempts to determine configuration and version information for Microsoft SQL
Server instances.
SQL Server credentials required: No (will not benefit from
 mssql.username & mssql.password ).
Run criteria:

 Host script: Will always run.

 Port script: N/A

NOTE: Unlike previous versions, this script will NOT attempt to log in to SQL
Server instances. Blank passwords can be checked using the
 ms-sql-empty-password script. E.g.:
 nmap -sn --script ms-sql-empty-password --script-args mssql.instance-all <host>
The script uses two means of getting version information for SQL Server instances:

 Querying the SQL Server Browser service, which runs by default on UDP port

1434 on servers that have SQL Server 2000 or later installed. However, this
service may be disabled without affecting the functionality of the instances.
Additionally, it provides imprecise version information.

 Sending a probe to the instance, causing the instance to respond with

information including the exact version number. This is the same method that
Nmap uses for service versioning; however, this script can also do the same for
instances accessible via Windows named pipes, and can target all of the
instances listed by the SQL Server Browser service.

In the event that the script can connect to the SQL Server Browser service
(UDP 1434) but is unable to connect directly to the instance to obtain more
accurate version information (because ports are blocked or the mssql.scanned-ports-only
argument has been used), the script will rely only upon the version number
provided by the SQL Server Browser/Monitor, which has the following limitations:

 For SQL Server 2000 and SQL Server 7.0 instances, the RTM version number is

always given, regardless of any service packs or patches installed.

 For SQL Server 2005 and later, the version number will reflect the service

pack installed, but the script will not be able to tell whether patches have
been installed.

Where possible, the script will determine major version numbers, service pack
levels and whether patches have been installed. However, in cases where
particular determinations can not be made, the script will report only what can
be confirmed.
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
