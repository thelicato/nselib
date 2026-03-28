---
title: "1085-ms-sql-sp-execute-external-script"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Attempts to run system commands using Microsoft SQL Server Machine Learning Services with sp_execute_external_script."
risk: intrusive
tags:
  - "intrusive"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 445 --script ms-sql-sp-execute-external-script --script-args=mssql.username=sa,mssql.password=sa,mssql.instance-all <host>\nnmap -p 1433 --script ms-sql-sp-execute-external-script --script-args mssql.username=sa,mssql.password=sa,ms-sql-sp-execute-external-script.cmd=\"whoami\" <host>\nnmap -p 1433 --script ms-sql-sp-execute-external-script --script-args mssql.username=sa,mssql.password=sa,ms-sql-sp-execute-external-script.language=python <host>"
outputPreview:
  - "| ms-sql-sp-execute-external-script:"
  - "|   10.0.0.5\\SEVENTEEN:"
  - "|     Language: R"
  - "|     Command: whoami"
  - "|     Output:"
  - "|       mssql\\seventeen01"
author: "James Otten (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1085-ms-sql-sp-execute-external-script.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Attempts to run system commands using Microsoft SQL Server Machine Learning Services with sp_execute_external_script.
For this script to work:
* The Advanced Analytics Extensions feature with at least one language must have been installed during SQL Server 2016+ setup.
* External scripts must have been enabled after setup and the server restarted.
* This script needs an account with the <code>EXECUTE ANY EXTERNAL SCRIPT</code> database permission.
SQL Server credentials required: Yes (use <code>ms-sql-brute</code>, <code>ms-sql-empty-password</code>
and/or <code>mssql.username</code> & <code>mssql.password</code>)
Run criteria:
* Host script: Will run if the <code>mssql.instance-all</code>, <code>mssql.instance-name</code>
or <code>mssql.instance-port</code> script arguments are used (see mssql.lua).
* Port script: Will run against any services identified as SQL Servers, but only
if the <code>mssql.instance-all</code>, <code>mssql.instance-name</code>
and <code>mssql.instance-port</code> script arguments are NOT used.
When run, the script iterates over the credentials and attempts to run
the command until either all credentials are exhausted or until the
command is executed.
NOTE: Communication with instances via named pipes depends on the <code>smb</code>
library. To communicate with (and possibly to discover) instances via named pipes,
the host must have at least one SMB port (e.g. TCP 445) that was scanned and
found to be open. Additionally, named pipe connections may require Windows
authentication to connect to the Windows host (via SMB) in addition to the
authentication required to connect to the SQL Server instances itself. See the
documentation and arguments for the <code>smb</code> library for more information.
NOTE: By default, the ms-sql-* scripts may attempt to connect to and communicate
with ports that were not included in the port list for the Nmap scan. This can
be disabled using the <code>mssql.scanned-ports-only</code> script argument.
