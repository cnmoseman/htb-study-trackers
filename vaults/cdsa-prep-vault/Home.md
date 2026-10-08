---
tags: [cdsa, moc]
cssclasses: [cdsa-hub]
---

![[cdsa-art.png|banner]]

# CDSA Prep Vault

Certified Defensive Security Analyst. This vault holds your methodology and module notes. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> CDSA is a 7-day blue-team exam: two incidents (one in Splunk, one in Elastic), flags for Incident 1 (pass at 85 pts / 17 of 20), plus a commercial-grade incident report covering both. The report decides the result, and flags alone won't pass you.

Three parts:

- **[[00 - Investigation Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[CDSA Study Tracker](https://cnmoseman.github.io/htb-study-trackers/cdsa/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> Build a timeline from the first minute and write the report as you investigate. Investigate the incident, not the flags: work out what happened start to finish.

> [!tip] Do the reporting module
> Do the [Documentation & Reporting](https://academy.hackthebox.com/course/preview/documentation--reporting) module from the Penetration Tester path before your exam, even though it isn't in the CDSA path. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades. It's built around the CPTS report, so it won't match the CDSA report one for one. Take the general tips and good habits from it and apply them to the CDSA report template.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. During the exam, work from your methodology. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Get tested commands from these as you go:
- [Dimont-Gattsu/CDSA_NOTES](https://github.com/Dimont-Gattsu/CDSA_NOTES)
- [tiagoflopes/CDSA_Notes (Obsidian)](https://github.com/tiagoflopes/CDSA_Notes)
- [oybek-turaev-cyber/htb-cdsa-exam-prep](https://github.com/oybek-turaev-cyber/htb-cdsa-exam-prep)
- [kismatkunwar89/spl-threat-hunting-library](https://github.com/kismatkunwar89/spl-threat-hunting-library)
- Reporting: [SysReptor HTB-CDSA template](https://docs.sysreptor.com/assets/reports/HTB-CDSA-Report.pdf) + [Documentation & Reporting module](https://academy.hackthebox.com/course/preview/documentation--reporting) + [[M15 - Security Incident Reporting]]

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/)
