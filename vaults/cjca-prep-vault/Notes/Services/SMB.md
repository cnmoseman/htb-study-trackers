---
service: SMB
ports: 139, 445
protocol: tcp
tags: [cjca, service]
---

> [!info] At a glance
> What it is: *e.g. Windows file and printer sharing*
> Default ports: *e.g. 139, 445*
> Learned in: [[M13 - Footprinting]]
> Usual tools: *e.g. [[Nmap]], smbclient*

## First Look
<!-- the first commands you run against a new instance -->
```bash
# command            # what it does
```

## Checklist
- [ ] Version noted and searched for known issues
- [ ] Anonymous or guest access tried
- [ ] Default credentials tried
- [ ] Creds from [[04 - Credentials|Credentials]] tried here
- [ ] Everything readable or writable listed

## Red Flags
<!-- things that usually mean a way forward -->
| What you see | Why it matters | Next step |
| --- | --- | --- |
| *e.g. A share anyone can read* | *e.g. Scripts and config files often hold passwords* | *e.g. Pull it all down and search it* |

## Commands by Goal
<!-- one heading per thing you want from it -->

### *e.g. List shares and permissions*
**Notes**
-

**Commands**
```bash
# command            # what it does
```

## Gotchas / Lessons Learned
-

## Links
- Used in: <!-- link the methodology phase(s) -->
- Tools: *e.g. [[Nmap]]*
- Index: [[00 - Module Index (MOC)]]
