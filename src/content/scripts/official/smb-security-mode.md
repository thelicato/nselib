---
title: "smb-security-mode"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Returns information about the SMB security level determined by SMB."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-security-mode.nse -p445 127.0.0.1\nsudo nmap -sU -sS --script smb-security-mode.nse -p U:137,T:139 127.0.0.1"
outputPreview:
  - "| smb-security-mode:"
  - "|   account_used: guest"
  - "|   authentication_level: user"
  - "|   challenge_response: supported"
  - "|_  message_signing: disabled (dangerous, but default)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-security-mode.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-security-mode.html"
---

Returns information about the SMB security level determined by SMB.
Here is how to interpret the output:
User-level authentication: Each user has a separate username/password that
is used to log into the system. This is the default setup of pretty much
everything these days.

 Share-level authentication: The anonymous account should be used to log
in, then the password is given (in plaintext) when a share is accessed.
All users who have access to the share use this password. This was the
original way of doing things, but isn't commonly seen, now. If a server
uses share-level security, it is vulnerable to sniffing.

 Challenge/response passwords supported: If enabled, the server can accept
any type of password (plaintext, LM and NTLM, and LMv2 and NTLMv2). If it
isn't set, the server can only accept plaintext passwords. Most servers
are configured to use challenge/response these days. If a server is
configured to accept plaintext passwords, it is vulnerable to sniffing. LM
and NTLM are fairly secure, although there are some brute-force attacks
against them. Additionally, LM and NTLM can fall victim to
man-in-the-middle attacks or relay attacks (see MS08-068 or my writeup of
it: http://www.skullsecurity.org/blog/?p=110 .

 Message signing: If required, all messages between the client and server
must be signed by a shared key, derived from the password and the server
challenge. If supported and not required, message signing is negotiated
between clients and servers and used if both support and request it. By
default, Windows clients don't sign messages, so if message signing isn't
required by the server, messages probably won't be signed; additionally,
if performing a man-in-the-middle attack, an attacker can negotiate no
message signing. If message signing isn't required, the server is
vulnerable to man-in-the-middle attacks or SMB-relay attacks.

This script will allow you to use the smb* script arguments (to
set the username and password, etc.), but it probably won't ever require
them.
