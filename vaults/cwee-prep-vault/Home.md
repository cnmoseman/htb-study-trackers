---
tags: [cwee, moc]
cssclasses: [cwee-hub]
---

![[cwee-art.png|banner]]

# CWEE Prep Vault

Certified Web Exploitation Expert. This vault holds your methodology and module notes. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> CWEE is a 10-day expert web exam: several apps tested both black-box and white-box (you read the source and write working exploits), ~6 flags across 3 apps, pass at 5. The report is raw Markdown with working exploits, patches and a changelog.

Three parts:

- **[[00 - Attack Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[CWEE Study Tracker](https://cnmoseman.github.io/htb-study-trackers/cwee/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> Read all the code. Much of the exam is white-box, so read every file, pinpoint the vulnerable lines, explain why, and turn each finding into a working exploit and a patch. Start the Markdown report while you're still exploiting.

> [!tip] Do the reporting module
> Do the [Documentation & Reporting](https://academy.hackthebox.com/course/preview/documentation--reporting) module from the Penetration Tester path before your exam, even though it isn't in the CWEE path. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades. It's built around the CPTS report, so it won't match the CWEE report one for one. Take the general tips and good habits from it and apply them to the CWEE report template.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. During the exam, work from your methodology. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Get tested commands from these as you go:
- [kabaneridev/pt-notes (CWEE-PREP)](https://github.com/kabaneridev/pt-notes/tree/main/CWEE-PREP)
- [Frank3nSti3n/CWEE-Scripts](https://github.com/Frank3nSti3n/CWEE-Scripts)
- [key1one8 notes](https://github.com/key1one8/Senior-Web-Penetration-Tester)
- [Dimpyj1604 notes](https://github.com/Dimpyj1604/SWPT-Notes)
- Reporting: [SysReptor HTB-CWEE template](https://docs.sysreptor.com/assets/reports/HTB-CWEE-Report.pdf) (Markdown) + [Documentation & Reporting module](https://academy.hackthebox.com/course/preview/documentation--reporting)

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/) · [Report a problem](https://github.com/cnmoseman/htb-study-trackers/issues/new?template=report-problem.yml&cert=CWEE&where=Prep+vault&title=%5BProblem%5D+%5BCWEE%5D+)
