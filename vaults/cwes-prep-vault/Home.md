---
tags: [cwes, moc]
cssclasses: [cwes-hub]
---

![[cwes-art.png|banner]]

# CWES Prep Vault

Certified Web Exploitation Specialist. This vault holds your methodology and module notes. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> CWES is a 7-day web pentest: several real-world apps, flags as you find bugs (~10 flags, pass at 8), plus a commercial-grade report. People who have taken it say the exam labs are harder than the course and need chained attacks and a lot of enumeration.

Three parts:

- **[[00 - Attack Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[CWES Study Tracker](https://cnmoseman.github.io/htb-study-trackers/cwes/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> Enumerate every application fully before you try to exploit it, and write up each finding the moment you confirm it. Cap each vuln test at ~30 minutes, then move on.

> [!tip] Do the reporting module
> Do the [Documentation & Reporting](https://academy.hackthebox.com/course/preview/documentation--reporting) module from the Penetration Tester path before your exam, even though it isn't in the CWES path. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades. It's built around the CPTS report, so it won't match the CWES report one for one. Take the general tips and good habits from it and apply them to the CWES report template.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. During the exam, work from your methodology. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Get tested commands from these as you go:
- [TheUnknownSoul CBBH cheat sheet](https://github.com/TheUnknownSoul/HTB-certified-bug-bounty-hunter-exam-cheetsheet)
- [Touexe/CBBH-CWES](https://github.com/Touexe/CBBH-CWES)
- [Jackie0x17/CBBH-Checklist](https://github.com/Jackie0x17/CBBH-Checklist)
- [Burdy98/Pentest-Methodology](https://github.com/Burdy98/Pentest-Methodology)
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- Reporting: [SysReptor HTB-CWES template](https://docs.sysreptor.com/assets/reports/HTB-CWES-Report.pdf) + [Documentation & Reporting module](https://academy.hackthebox.com/course/preview/documentation--reporting) + [[M20 - Bug Bounty Hunting Process]]

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/)
