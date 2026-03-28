---
title: "mcafee-epo-agent"
source: official
category: "Version"
categories:
  - "version"
  - "safe"
shortDescription: "Check if ePO agent is running on port 8081 or port identified as ePO Agent port."
risk: safe
tags:
  - "version"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT      STATE SERVICE VERSION"
  - "8081/tcp  open  http    McAfee ePolicy Orchestrator Agent 4.5.0.1852 (ePOServerName: EPOSERVER, AgentGuid: D2E157F4-B917-4D31-BEF0-32074BADF081)"
  - "Service Info: Host: TESTSERVER"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mcafee-epo-agent.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mcafee-epo-agent.html"
---

Check if ePO agent is running on port 8081 or port identified as ePO Agent port.
