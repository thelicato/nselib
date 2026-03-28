---
title: "http-form-fuzzer"
source: official
category: "Fuzzer"
categories:
  - "fuzzer"
  - "intrusive"
shortDescription: "Performs a simple form fuzzing against forms found on websites.\nTries strings and numbers of increasing length and attempts to\ndetermine if the fuzzing was successful."
risk: intrusive
tags:
  - "fuzzer"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-form-fuzzer --script-args 'http-form-fuzzer.targets={1={path=/},2={path=/register.html}}' -p 80 <host>\n\nThis script attempts to fuzz fields in forms it detects (it fuzzes one field at a time).\nIn each iteration it first tries to fuzz a field with a string, then with a number.\nIn the output, actions and paths for which errors were observed are listed, along with\nnames of fields that were being fuzzed during error occurrence. Length and type\n(string/integer) of the input that caused the error are also provided.\nWe consider an error to be either: a response with status 500 or with an empty body,\na response that contains \"server error\" or \"sql error\" strings. ATM anything other than\nthat is considered not to be an 'error'.\nTODO: develop more sophisticated techniques that will let us determine if the fuzzing was\nsuccessful (i.e. we got an 'error'). Ideally, an algorithm that will tell us a percentage\ndifference between responses should be implemented."
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-form-fuzzer:"
  - "|   Path: /register.html Action: /validate.php"
  - "|     age"
  - "|       integer lengths that caused errors:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-form-fuzzer.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-form-fuzzer.html"
---

Performs a simple form fuzzing against forms found on websites.
Tries strings and numbers of increasing length and attempts to
determine if the fuzzing was successful.
