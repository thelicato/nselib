---
title: "smb-enum-users"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Attempts to enumerate the users on a remote Windows system, with as much\ninformation as possible, through two different techniques (both over MSRPC,\nwhich uses port 445 or 139; see smb.lua ). The goal of this script\nis to discover all user accounts that exist on a remote system. This can be\nhelpful for administration, by seeing who has an account on a server, or for\npenetration testing or network footprinting, by determining which accounts\nexist on a system."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-enum-users.nse -p445 <host>\nsudo nmap -sU -sS --script smb-enum-users.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "|  smb-enum-users:"
  - "|_ |_ Domain: RON-WIN2K-TEST; Users: Administrator, Guest, IUSR_RON-WIN2K-TEST, IWAM_RON-WIN2K-TEST, test1234, TsInternetUser"
  - "Host script results:"
  - "|  smb-enum-users:"
  - "|  |  RON-WIN2K-TEST\\Administrator (RID: 500)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-enum-users.html"
---

Attempts to enumerate the users on a remote Windows system, with as much
information as possible, through two different techniques (both over MSRPC,
which uses port 445 or 139; see smb.lua ). The goal of this script
is to discover all user accounts that exist on a remote system. This can be
helpful for administration, by seeing who has an account on a server, or for
penetration testing or network footprinting, by determining which accounts
exist on a system.
A penetration tester who is examining servers may wish to determine the
purpose of a server. By getting a list of who has access to it, the tester
might get a better idea (if financial people have accounts, it probably
relates to financial information). Additionally, knowing which accounts
exist on a system (or on multiple systems) allows the pen-tester to build a
dictionary of possible usernames for bruteforces, such as a SMB bruteforce
or a Telnet bruteforce. These accounts may be helpful for other purposes,
such as using the accounts in Web applications on this or other servers.
From a pen-testers perspective, retrieving the list of users on any
given server creates endless possibilities.
Users are enumerated in two different ways: using SAMR enumeration or
LSA bruteforcing. By default, both are used, but they have specific
advantages and disadvantages. Using both is a great default, but in certain
circumstances it may be best to give preference to one.
Advantages of using SAMR enumeration:

 Stealthier (requires one packet/user account, whereas LSA uses at least 10 packets while SAMR uses half that; additionally, LSA makes a lot of noise in the Windows event log (LSA enumeration is the only script I (Ron Bowes) have been called on by the administrator of a box I was testing against).

 More information is returned (more than just the username).

 Every account will be found, since they're being enumerated with a function that's designed to enumerate users.

Advantages of using LSA bruteforcing:

 More accounts are returned (system accounts, groups, and aliases are returned, not just users).

 Requires a lower-level account to run on Windows XP and higher (a 'guest' account can be used, whereas SAMR enumeration requires a 'user' account; especially useful when only guest access is allowed, or when an account has a blank password (which effectively gives it guest access)).

SAMR enumeration is done with the QueryDisplayInfo function.
If this succeeds, it will return a detailed list of users, along with descriptions,
types, and full names. This can be done anonymously against Windows 2000, and
with a user-level account on other Windows versions (but not with a guest-level account).
To perform this test, the following functions are used:

 Bind : bind to the SAMR service.

 Connect4 : get a connect_handle.

 EnumDomains : get a list of the domains.

 QueryDomain : get the sid for the domain.

 OpenDomain : get a handle for each domain.

 QueryDisplayInfo : get the list of users in the domain.

 Close : Close the domain handle.

 Close : Close the connect handle.

The advantage of this technique is that a lot of details are returned, including
the full name and description; the disadvantage is that it requires a user-level
account on every system except for Windows 2000. Additionally, it only pulls actual
user accounts, not groups or aliases.

Regardless of whether this succeeds, a second technique is used to pull
user accounts, called LSA bruteforcing. LSA bruteforcing can be done anonymously
against Windows 2000, and requires a guest account or better on other systems.
It has the advantage of running with less permission, and will also find more
account types (i.e., groups, aliases, etc.). The disadvantages is that it returns
less information, and that, because it's a brute-force guess, it's possible to miss
accounts. It's also extremely noisy.
This isn't a brute-force technique in the common sense, however: it's a brute-forcing of users'
RIDs. A user's RID is a value (generally 500, 501, or 1000+) that uniquely identifies
a user on a domain or system. An LSA function is exposed which lets us convert the RID
(say, 1000) to the username (say, "Ron"). So, the technique will essentially try
converting 1000 to a name, then 1001, 1002, etc., until we think we're done.
To do this, the script breaks users into groups of RIDs based on the LSA_GROUPSIZE
constant. All members of this group are checked simultaneously, and the responses recorded.
When a series of empty groups are found ( LSA_MINEMPTY groups, specifically),
the scan ends. As long as you are getting a few groups with active accounts, the scan will
continue.
Before attempting this conversion, the SID of the server has to be determined.
The SID is determined by doing the reverse operation; that is, by converting a name into
its RID. The name is determined by looking up any name present on the system.
We try:

 The computer name and domain name, returned in SMB_COM_NEGOTIATE ;

 An nbstat query to get the server name and the user currently logged in; and

 Some common names: "administrator", "guest", and "test".

In theory, the computer name should be sufficient for this to always work, and
it has so far has in my tests, but I included the rest of the names for good measure. It
doesn't hurt to add more.
The names and details from both of these techniques are merged and displayed.
If the output is verbose, then extra details are shown. The output is ordered alphabetically.
Credit goes out to the enum.exe , sid2user.exe , and
 user2sid.exe programs for pioneering some of the techniques used
in this script.
