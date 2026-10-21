---
tags: [cdep, moc]
cssclasses: [cdep-hub]
---

![[cdep-art.png|banner]]

# CDEP Prep Vault

Certified Detection Engineering Principal. This vault holds your methodology, module notes and exam workspace. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> CDEP is a 10-day master-level exam. The breach is already contained. Your job is to build the detections that would have caught each stage, validate each one against the captured telemetry in your own resettable lab, and submit the value each validated rule returns as a flag. The commercial-grade report documents every analytic, mapped to MITRE ATT&CK, with proof that it fires. HTB hasn't published the pass mark.

Four parts:

- **[[00 - Detection Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[[00 - Exam (MOC)]]**: your exam workspace, with hosts, data sources, techniques, detection rules, the storyline, flags and a log for each day, laid out like the report.
- **[CDEP Study Tracker](https://cnmoseman.github.io/htb-study-trackers/cdep/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> Nobody has published a CDEP exam write-up yet, but HTB's report template is out. For each technique in the path, practice the write-up it asks for: how the behavior works, its ATT&CK mapping, where its detections sit on the Summiting the Pyramid tables, and an SPL rule with proof it fires.

> [!tip] Do the reporting module
> Do the [Documentation & Reporting](https://academy.hackthebox.com/course/preview/documentation--reporting) module from the Penetration Tester path before your exam, even though it isn't in the CDEP path. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades. It's built around the CPTS report, so it won't match the CDEP report one for one. Take the general tips and good habits from it and apply them to the CDEP report template.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. Keep one note per tool in `Notes/Tools` and one per log source in `Notes/Log Sources`, made from `Templates/Tool` and `Templates/Log Source`. [[WinDbg]] and [[ETW]] are there to start you off. Link them from your module notes and phases so the commands you use most are one click away.
5. Each module note has one heading per Academy section. Use the **Outline** pane on the right to jump between them, and click the arrow by a heading to fold it.
6. On exam day, start at [[00 - Exam (MOC)]] and work from your methodology. The exam notes are bookmarked on the left. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Nobody has published CDEP cheat sheets yet. I'm watching for them and will add them here as they come out. Know of one? [Suggest it on GitHub](https://github.com/cnmoseman/htb-study-trackers/issues/new?template=suggest-resource.yml&cert=CDEP&where=Prep+vault+%28command+sources%29&title=%5BResource%5D+%5BCDEP%5D+).
- Reporting: [HTB CDEP report template](https://docs.sysreptor.com/assets/reports/HTB-CDEP-Report.pdf) + [Documentation & Reporting module](https://academy.hackthebox.com/course/preview/documentation--reporting)

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/) · [Report a problem](https://github.com/cnmoseman/htb-study-trackers/issues/new?template=report-problem.yml&cert=CDEP&where=Prep+vault&title=%5BProblem%5D+%5BCDEP%5D+)
