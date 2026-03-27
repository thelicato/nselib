---
title: git-exposure-check
source: unofficial
category: Web
shortDescription: Checks web roots for accidentally exposed Git metadata and common repository endpoints.
risk: informational
tags:
  - web
  - git
  - exposure
protocols:
  - tcp
ports:
  - "80"
  - "443"
usage: nmap -p80,443 --script git-exposure-check <target>
outputPreview:
  - "/.git/HEAD: reachable"
  - "/.git/config: possible repository exposure"
author: Community Maintainer
lastReviewed: "2026-03-27"
---

`git-exposure-check` is a mock community script focused on spotting publicly accessible Git repository artifacts.

It is useful for quickly flagging deployments that may expose commit history, configuration, or source material through the web root.
