---
title: "ssh-publickey-acceptance"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "This script takes a table of paths to private keys, passphrases, and usernames\nand checks each pair to see if the target ssh server accepts them for publickey\nauthentication. If no keys are given or the known-bad option is given, the\nscript will check if a list of known static public keys are accepted for\nauthentication."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 22 --script ssh-publickey-acceptance --script-args \"ssh.usernames={'root', 'user'}, ssh.privatekeys={'./id_rsa1', './id_rsa2'}\"  <target>"
outputPreview:
  - "22/tcp open  ssh     syn-ack"
  - "| ssh-publickey-acceptance:"
  - "|   Accepted Public Keys:"
  - "|_    Key ./id_rsa1 accepted for user root"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssh-publickey-acceptance.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssh-publickey-acceptance.html"
---

This script takes a table of paths to private keys, passphrases, and usernames
and checks each pair to see if the target ssh server accepts them for publickey
authentication. If no keys are given or the known-bad option is given, the
script will check if a list of known static public keys are accepted for
authentication.
