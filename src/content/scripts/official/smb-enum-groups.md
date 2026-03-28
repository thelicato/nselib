---
title: "smb-enum-groups"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Obtains a list of groups from the remote Windows system, as well as a list of the group's users.\nThis works similarly to enum.exe with the /G switch."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-enum-users.nse -p445 <host>\nsudo nmap -sU -sS --script smb-enum-users.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "| smb-enum-groups:"
  - "|   Builtin\\Administrators (RID: 544): Administrator, Daniel"
  - "|   Builtin\\Users (RID: 545): <empty>"
  - "|   Builtin\\Guests (RID: 546): Guest"
  - "|   Builtin\\Performance Monitor Users (RID: 558): <empty>"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-enum-groups.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-enum-groups.html"
---

Obtains a list of groups from the remote Windows system, as well as a list of the group's users.
This works similarly to enum.exe with the /G switch.
The following MSRPC functions in SAMR are used to find a list of groups and the RIDs of their users. Keep
in mind that MSRPC refers to groups as "Aliases".
Bind : bind to the SAMR service.

 Connect4 : get a connect_handle.

 EnumDomains : get a list of the domains.

 LookupDomain : get the RID of the domains.

 OpenDomain : get a handle for each domain.

 EnumDomainAliases : get the list of groups in the domain.

 OpenAlias : get a handle to each group.

 GetMembersInAlias : get the RIDs of the members in the groups.

 Close : close the alias handle.

 Close : close the domain handle.

 Close : close the connect handle.

Once the RIDs have been termined, the

 Bind : bind to the LSA service.

 OpenPolicy2 : get a policy handle.

 LookupSids2 : convert SIDs to usernames.

I (Ron Bowes) originally looked into the possibility of using the SAMR function LookupRids2
to convert RIDs to usernames, but the function seemed to return a fault no matter what I tried. Since
enum.exe also switches to LSA to convert RIDs to usernames, I figured they had the same issue and I do
the same thing.
