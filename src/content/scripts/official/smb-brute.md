---
title: "smb-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to guess username/password combinations over SMB, storing discovered combinations\nfor use in other scripts. Every attempt will be made to get a valid list of users and to\nverify each username before actually using them. When a username is discovered, besides\nbeing printed, it is also saved in the Nmap registry so other Nmap scripts can use it. That\nmeans that if you're going to run smb-brute.nse , you should run other smb scripts you want.\nThis checks passwords in a case-insensitive way, determining case after a password is found,\nfor Windows versions before Vista."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-brute.nse -p445 <host>\nsudo nmap -sU -sS --script smb-brute.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "| smb-brute:"
  - "|   bad name:test => Valid credentials"
  - "|   consoletest:test => Valid credentials, password must be changed at next logon"
  - "|   guest:<anything> => Valid credentials, account disabled"
  - "|   mixcase:BuTTeRfLY1 => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-brute.html"
---

Attempts to guess username/password combinations over SMB, storing discovered combinations
for use in other scripts. Every attempt will be made to get a valid list of users and to
verify each username before actually using them. When a username is discovered, besides
being printed, it is also saved in the Nmap registry so other Nmap scripts can use it. That
means that if you're going to run smb-brute.nse , you should run other smb scripts you want.
This checks passwords in a case-insensitive way, determining case after a password is found,
for Windows versions before Vista.
This script is specifically targeted towards security auditors or penetration testers.
One example of its use, suggested by Brandon Enright, was hooking up smb-brute.nse to the
database of usernames and passwords used by the Conficker worm (the password list can be
found at http://www.skullsecurity.org/wiki/index.php/Passwords , among other places.
Then, the network is scanned and all systems that would be infected by Conficker are
discovered.
From the penetration tester perspective its use is pretty obvious. By discovering weak passwords
on SMB, a protocol that's well suited for bruteforcing, access to a system can be gained.
Further, passwords discovered against Windows with SMB might also be used on Linux or MySQL
or custom Web applications. Discovering a password greatly beneficial for a pen-tester.
This script uses a lot of little tricks that I (Ron Bowes) describe in detail in a blog
posting, http://www.skullsecurity.org/blog/?p=164 . The tricks will be summarized here, but
that blog is the best place to learn more.
Usernames and passwords are initially taken from the unpwdb library. If possible, the usernames
are verified as existing by taking advantage of Windows' odd behaviour with invalid username
and invalid password responses. As soon as it is able, this script will download a full list
of usernames from the server and replace the unpw usernames with those. This enables the
script to restrict itself to actual accounts only.
When an account is discovered, it's saved in the smb module (which uses the Nmap
registry). If an account is already saved, the account's privileges are checked; accounts
with administrator privileges are kept over accounts without. The specific method for checking
is by calling GetShareInfo("IPC$") , which requires administrative privileges. Once this script
is finished (all other smb scripts depend on it, it'll run first), other scripts will use the saved account
to perform their checks.
The blank password is always tried first, followed by "special passwords" (such as the username
and the username reversed). Once those are exhausted, the unpwdb password list is used.
One major goal of this script is to avoid account lockouts. This is done in a few ways. First,
when a lockout is detected, unless you user specifically overrides it with the smblockout
argument, the scan stops. Second, all usernames are checked with the most common passwords first,
so with not-too-strict lockouts (10 invalid attempts), the 10 most common passwords will still
be tried. Third, one account, called the canary, "goes out ahead"; that is, three invalid
attempts are made (by default) to ensure that it's locked out before others are.
In addition to active accounts, this script will identify valid passwords for accounts that
are disabled, guest-equivalent, and require password changes. Although these accounts can't
be used, it's good to know that the password is valid. In other cases, it's impossible to
tell a valid password (if an account is locked out, for example). These are displayed, too.
Certain accounts, such as guest or some guest-equivalent, will permit any password. This
is also detected. When possible, the SMB protocol is used to its fullest to get maximum
information.
When possible, checks are done using a case-insensitive password, then proper case is
determined with a fairly efficient bruteforce. For example, if the actual password is
"PassWord", then "password" will work and "PassWord" will be found afterwards (on the
14th attempt out of a possible 256 attempts, with the current algorithm).
