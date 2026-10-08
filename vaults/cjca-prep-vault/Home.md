---
tags: [cjca, moc]
cssclasses: [cjca-hub]
---

![[cjca-art.png|banner]]

# CJCA Prep Vault

Certified Junior Cybersecurity Associate. This vault holds your methodology and module notes. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> CJCA is two exams in one: a 5-machine red-team half (user + root flags) and an Elastic SIEM blue-team half (~40 alerts to triage). Work them side by side: your attacks show up as alerts, and the logs hint at attack paths.

Three parts:

- **[[00 - Attack Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[CJCA Study Tracker](https://cnmoseman.github.io/htb-study-trackers/cjca/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> The report decides whether you pass. One reviewer failed with 60 pages; another passed with 111. Screenshot every step and document negative findings too.

> [!tip] Do the reporting module
> Do the [Documentation & Reporting](https://academy.hackthebox.com/course/preview/documentation--reporting) module from the Penetration Tester path before your exam, even though it isn't in the CJCA path. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades. It's built around the CPTS report, so it won't match the CJCA report one for one. Take the general tips and good habits from it and apply them to the CJCA report template.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. During the exam, work from your methodology. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Get tested commands from these as you go:
- [sohankanna/CJCA-Study-Notes](https://github.com/sohankanna/CJCA-Study-Notes)
- [mlain24-lab/CJCA_Notes](https://github.com/mlain24-lab/CJCA_Notes)
- Reporting: [SysReptor HTB-CJCA template](https://docs.sysreptor.com/assets/reports/HTB-CJCA-Report.pdf) + [Documentation & Reporting module](https://academy.hackthebox.com/course/preview/documentation--reporting) + [[M17 - Incident Handling Process]]

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/)
