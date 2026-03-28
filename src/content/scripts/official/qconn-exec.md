---
title: "qconn-exec"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "vuln"
shortDescription: "Attempts to identify whether a listening QNX QCONN daemon allows\nunauthenticated users to execute arbitrary operating system commands."
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script qconn-exec --script-args qconn-exec.timeout=60,qconn-exec.bytes=1024,qconn-exec.cmd=\"uname -a\" -p <port> <target>"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "8000/tcp open  qconn   qconn remote IDE support"
  - "| qconn-exec:"
  - "|   VULNERABLE:"
  - "|   The QNX QCONN daemon allows remote command execution."
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/qconn-exec.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/qconn-exec.html"
---

Attempts to identify whether a listening QNX QCONN daemon allows
unauthenticated users to execute arbitrary operating system commands.
QNX is a commercial Unix-like real-time operating system, aimed primarily at
the embedded systems market. The QCONN daemon is a service provider that
provides support, such as profiling system information, to remote IDE
components. The QCONN daemon runs on port 8000 by default.
