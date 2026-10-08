---
tags: [cape, moc]
cssclasses: [cape-hub]
---

![[cape-art.png|banner]]

# CAPE Prep Vault

Certified Active Directory Pentesting Expert. This vault holds your methodology and module notes. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> CAPE is a 10-day expert AD exam: you start from an internal foothold with no creds and work through a multi-domain enterprise forest to domain and forest compromise. There are ~10 flags (9 to pass, 90 pts), the exam is open-book, and it is long, with one AD attack chained into the next.

Three parts:

- **[[00 - Attack Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[CAPE Study Tracker](https://cnmoseman.github.io/htb-study-trackers/cape/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> Enumerate the whole domain before you exploit anything, and rerun BloodHound after every credential you find. Start the report on day one and write down why you ran each command.

> [!tip] Do the reporting module
> Do the [Documentation & Reporting](https://academy.hackthebox.com/course/preview/documentation--reporting) module from the Penetration Tester path before your exam, even though it isn't in the CAPE path. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades. It's built around the CPTS report, so it won't match the CAPE report one for one. Take the general tips and good habits from it and apply them to the CAPE report template.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. During the exam, work from your methodology. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Get tested commands from these as you go:
- [S1ckB0y1337 AD cheat sheet](https://github.com/S1ckB0y1337/Active-Directory-Exploitation-Cheat-Sheet)
- [Squ1shification/CAPE-Notes](https://github.com/Squ1shification/CAPE-Notes)
- [The Hacker Recipes](https://www.thehacker.recipes/)
- Reporting: [SysReptor HTB-CAPE template](https://docs.sysreptor.com/assets/reports/HTB-CAPE-Report.pdf) + [Documentation & Reporting module](https://academy.hackthebox.com/course/preview/documentation--reporting)

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/) · [Report a problem](https://github.com/cnmoseman/htb-study-trackers/issues/new?template=report-problem.yml&cert=CAPE&where=Prep+vault&title=%5BProblem%5D+%5BCAPE%5D+)
