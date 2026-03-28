---
title: "2040-http-ruby-environment"
source: unofficial
category: "Default"
categories:
  - "default"
  - "safe"
  - "vuln"
shortDescription: "Sample script to detect the presence of a Ruby on Rails rack-mini-profiler gem that is used to provide performance metrics\nfor Rails applications.  This simple detection script finds the environment variables page and looks for exposed API keys\nand other sensitive data such as credentials at '?pp=env' appended to default host URL.  It is possible that Rails\ndevelopers can expose environment variables through the gem without fully understanding their implications."
risk: safe
tags:
  - "default"
  - "safe"
  - "vuln"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-ruby-environment <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp open  https"
  - "| http-ruby-environment:"
  - "|   VULNERABLE:"
  - "|   Detected Rack-mini-profiler Environment Variables"
  - "|     State: LIKELY VULNERABLE"
author: "Jason Ostrom (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/2040-http-ruby-environment.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Sample script to detect the presence of a Ruby on Rails rack-mini-profiler gem that is used to provide performance metrics
for Rails applications.  This simple detection script finds the environment variables page and looks for exposed API keys
and other sensitive data such as credentials at '?pp=env' appended to default host URL.  It is possible that Rails
developers can expose environment variables through the gem without fully understanding their implications.
The 'rack-mini-profiler' is a performance gem utilized by Ruby on Rails developers to better understand performance details
of Rails applications.  For more information:
[1] https://github.com/MiniProfiler/rack-mini-profiler
[2] https://www.speedshop.co/2015/08/05/rack-mini-profiler-the-secret-weapon.html
[3] https://stackify.com/rack-mini-profiler-a-complete-guide-on-rails-performance/
A demo project named 'Hammer' that demonstrates a mis-configured Rails app with this vulnerability:
[4] https://github.com/iknowjason/hammer
A gentle introduction to the 'Hammer' project:
[5] https://medium.com/@iknowjason/building-a-vulnerable-rails-application-for-learning-2a1de8cf98d5
