---
title: "ipidseq"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Classifies a host's IP ID sequence (test for susceptibility to idle\nscan)."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script ipidseq [--script-args probeport=port] target"
outputPreview:
  - "Host script results:"
  - "|_ipidseq: Incremental! [used port 80]"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ipidseq.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ipidseq.html"
---

Classifies a host's IP ID sequence (test for susceptibility to idle
scan).
Sends six probes to obtain IP IDs from the target and classifies them
similarly to Nmap's method. This is useful for finding suitable zombies
for Nmap's idle scan ( -sI ) as Nmap itself doesn't provide a way to scan
for these hosts.
