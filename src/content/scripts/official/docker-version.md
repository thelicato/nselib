---
title: "docker-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the Docker service version."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "2375/tcp open  docker  Docker 1.11.2"
  - "|   Version: 1.11.2"
  - "|   BuildTime: 2016-06-01T21:47:50.269346868+00:00"
  - "|   Arch: amd64"
  - "|   KernelVersion: 3.13.0-91-generic"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/docker-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/docker-version.html"
---

Detects the Docker service version.
