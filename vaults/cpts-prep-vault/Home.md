---
tags: [cpts, moc]
cssclasses: [cpts-hub]
---

![[cpts-art.png|banner]]

# CPTS Prep Vault

Certified Penetration Testing Specialist. This vault holds your methodology and module notes. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> CPTS is a 10-day black-box engagement against an enterprise-like Active Directory network: external foothold, pivot inside, move laterally and work toward Domain Admin across Windows and Linux hosts. 14 flags, about 12 needed to pass.

Three parts:

- **[[00 - Attack Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[CPTS Study Tracker](https://cnmoseman.github.io/htb-study-trackers/cpts/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> Flags alone do not pass you. The commercial-grade report is pass/fail on its own, and people who pass often hand in 100-150 pages with an executive summary, attack narrative and CVSS-rated findings.

> [!tip] Do the reporting module
> Don't leave [[M27 - Documentation & Reporting]] for last. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. During the exam, work from your methodology. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Get tested commands from these as you go:
- [guerrii/CPTS-Cheatsheet](https://github.com/guerrii/CPTS-Cheatsheet)
- [zagnox/CPTS-cheatsheet](https://github.com/zagnox/CPTS-cheatsheet)
- [0x1ceKing per-module cheatsheets](https://github.com/0x1ceKing/HTB-Certified-Penetration-Testing-Specialist)
- [Divyesh's CPTS Cheatsheet (GitBook)](https://divyeshs-organization-1.gitbook.io/cpts-cheatsheet)
- [kabaneridev/pt-notes (CPTS-PREP)](https://github.com/kabaneridev/pt-notes/tree/main/CPTS-PREP)
- Reporting: [SysReptor HTB-CPTS template](https://docs.sysreptor.com/assets/reports/HTB-CPTS-Report.pdf) + [[M27 - Documentation & Reporting]]

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/)
