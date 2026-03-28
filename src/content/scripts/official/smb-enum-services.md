---
title: "smb-enum-services"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
  - "safe"
shortDescription: "Retrieves the list of services running on a remote Windows system.\nEach service attribute contains service name, display name and service status of\neach service."
risk: safe
tags:
  - "discovery"
  - "intrusive"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script smb-enum-services.nse -p445 <host>\nnmap --script smb-enum-services.nse --script-args smbusername=<username>,smbpass=<password> -p445 <host>"
outputPreview:
  - "| smb-enum-services:"
  - "|"
  - "|   ALG:"
  - "|     display_name: Application Layer Gateway Service"
  - "|     state:"
  - "|       SERVICE_PAUSE_PENDING"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-enum-services.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-enum-services.html"
---

Retrieves the list of services running on a remote Windows system.
Each service attribute contains service name, display name and service status of
each service.
Note: Modern Windows systems requires a privileged domain account in order to
list the services.
