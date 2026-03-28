---
title: "nfs-ls"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to get useful information about files from NFS exports.\nThe output is intended to resemble the output of ls ."
risk: safe
tags:
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 111 --script=nfs-ls <target>\nnmap -sV --script=nfs-ls <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "111/tcp open  rpcbind"
  - "| nfs-ls:"
  - "|   Volume /mnt/nfs/files"
  - "|   access: Read Lookup NoModify NoExtend NoDelete NoExecute"
  - "|   PERMISSION  UID   GID   SIZE     MODIFICATION TIME  FILENAME"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nfs-ls.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nfs-ls.html"
---

Attempts to get useful information about files from NFS exports.
The output is intended to resemble the output of ls .
The script starts by enumerating and mounting the remote NFS exports. After
that it performs an NFS GETATTR procedure call for each mounted point
in order to get its ACLs.
For each mounted directory the script will try to list its file entries
with their attributes.
Since the file attributes shown in the results are the result of
GETATTR, READDIRPLUS, and similar procedures, the attributes
are the attributes of the local filesystem.
These access permissions are shown only with NFSv3:

 Read: Read data from file or read a directory.

 Lookup: Look up a name in a directory
 (no meaning for non-directory objects).

 Modify: Rewrite existing file data or modify existing
 directory entries.

 Extend: Write new data or add directory entries.

 Delete: Delete an existing directory entry.

 Execute: Execute file (no meaning for a directory).

Recursive listing is not implemented.
