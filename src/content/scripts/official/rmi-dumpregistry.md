---
title: "rmi-dumpregistry"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Connects to a remote RMI registry and attempts to dump all of its\nobjects."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script rmi-dumpregistry -p 1098 <host>"
outputPreview:
  - "PORT     STATE SERVICE     REASON"
  - "1099/tcp open  rmiregistry syn-ack"
  - "| rmi-dumpregistry:"
  - "|   cfassembler/default"
  - "|     coldfusion.flex.rmi.DataServicesCFProxyServer_Stub"
  - "|     @192.168.0.3:1271"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rmi-dumpregistry.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rmi-dumpregistry.html"
---

Connects to a remote RMI registry and attempts to dump all of its
objects.
First it tries to determine the names of all objects bound in the
registry, and then it tries to determine information about the
objects, such as the class names of the superclasses and
interfaces. This may, depending on what the registry is used for, give
valuable information about the service. E.g, if the app uses JMX (Java
Management eXtensions), you should see an object called "jmxconnector"
on it.
It also gives information about where the objects are located, (marked
with @<ip>:port in the output).
Some apps give away the classpath, which this scripts catches in
so-called "Custom data".
