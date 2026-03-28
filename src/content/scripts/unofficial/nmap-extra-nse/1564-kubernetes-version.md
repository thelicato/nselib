---
title: "1564-kubernetes-version"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "version"
shortDescription: "Attempts to detect the Kubernetes API version."
risk: safe
tags:
  - "safe"
  - "version"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script kubernetes-version <host>"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "8443/tcp open  kubernetes-api"
author: "Jon Mosco (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1564-kubernetes-version.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Attempts to detect the Kubernetes API version.
