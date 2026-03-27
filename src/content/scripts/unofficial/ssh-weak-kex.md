---
title: ssh-weak-kex
source: unofficial
category: SSH
shortDescription: Reviews SSH key exchange and cipher negotiation for weak or legacy algorithm support.
risk: informational
tags:
  - ssh
  - crypto
  - hardening
protocols:
  - tcp
ports:
  - "22"
usage: nmap -p22 --script ssh-weak-kex <target>
outputPreview:
  - "diffie-hellman-group1-sha1: supported"
  - "3des-cbc: supported"
author: Community Maintainer
lastReviewed: "2026-03-27"
---

`ssh-weak-kex` is a mock unofficial script that highlights legacy SSH algorithms still accepted by the server.

It is useful during hardening reviews when you want a quick indication of outdated cryptographic settings.
