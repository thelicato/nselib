---
title: "docker_daemontcp"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Utilizing Docker via unprotected tcp socket (2375/tcp, maybe 2376/tcp),\tan attacker can create a Docker container with the '/' path mounted with read/write permissions on the host server that is running the Docker container.\n\t\tAs the Docker container executes command as uid 0 it is honored by the host operating system allowing the attacker to edit/create files owned by root.\n\t\tThis exploit abuses this to creates a cron job in the '/etc/cron.d/' path of the host server.\n\t\tThe Docker image should exist on the target system or be a valid image from hub.docker.com."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "version"
  - "vladrico/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview: []
author: "Vlad Rico (upstream: VladRico/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/VladRico/nmap-scripts/blob/master/docker_daemontcp.nse"
---

Imported from the upstream repository [VladRico/nmap-scripts](https://github.com/VladRico/nmap-scripts).
Utilizing Docker via unprotected tcp socket (2375/tcp, maybe 2376/tcp),	an attacker can create a Docker container with the '/' path mounted with read/write permissions on the host server that is running the Docker container.
		As the Docker container executes command as uid 0 it is honored by the host operating system allowing the attacker to edit/create files owned by root.
		This exploit abuses this to creates a cron job in the '/etc/cron.d/' path of the host server.
		The Docker image should exist on the target system or be a valid image from hub.docker.com.
