---
title: dns-brute
source: official
category: Discovery
shortDescription: Attempts common hostname guesses against a target domain to uncover subdomains quickly.
risk: informational
tags:
  - dns
  - discovery
  - subdomains
protocols:
  - udp
  - tcp
ports:
  - "53"
usage: nmap --script dns-brute --script-args dns-brute.domain=example.com <target>
outputPreview:
  - "www.example.com: 203.0.113.10"
  - "vpn.example.com: 203.0.113.24"
author: Nmap Project
lastReviewed: "2026-03-27"
---

`dns-brute` helps identify likely subdomains by testing a built-in wordlist against a target domain.

It is useful during early reconnaissance when you want a quick map of exposed services before moving into deeper validation.
