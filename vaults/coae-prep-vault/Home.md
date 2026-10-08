---
tags: [coae, moc]
cssclasses: [coae-hub]
---

![[coae-art.png|banner]]

# COAE Prep Vault

Certified Offensive AI Expert. This vault holds your methodology and module notes. Open this folder as an Obsidian vault (**Open folder as vault**).

> [!abstract] The exam
> COAE is a 7-day AI red-team exam built with Google (aligned to SAIF): you assess an AI-driven environment (an AI app, an MCP server and separate ML challenges), then submit a commercial-grade report. It covers adversarial ML, prompt injection, LLM output exploitation, AI app/system security, privacy and defense.

Three parts:

- **[[00 - Attack Flow (MOC)]]**: your methodology, as numbered blank phases that you name and fill in your own way.
- **[[00 - Module Index (MOC)]]**: your notes, one per Academy module, in course order. Your methodology links back to these.
- **[COAE Study Tracker](https://cnmoseman.github.io/htb-study-trackers/coae/tracker/)**: the day-by-day study plan for this cert. Check off tasks there as you go.

> [!warning] Read this first
> Treat the report as half the exam, because flags alone won't earn you the COAE. Don't skip the ML challenges: you can ace the LLM/MCP side and still fail. For every flag, ask what the system trusted that it shouldn't have.

> [!tip] Do the reporting module
> Do the [Documentation & Reporting](https://academy.hackthebox.com/course/preview/documentation--reporting) module from the Penetration Tester path before your exam, even though it isn't in the COAE path. It shows you how to take notes during an engagement and turn them into the kind of report HTB grades. It's built around the CPTS report, so it won't match the COAE report one for one. Take the general tips and good habits from it and apply them to the COAE report template.

## How to use it
1. Work through the course in order. As you finish each module, fill in its note.
2. Build your methodology as you go. Rename each `Fill in` phase to a step in your own workflow, and add or delete phases as you need. New phases use `Templates/Methodology Phase`.
3. Fill each phase with your own checklist, commands and decision points, and link back to the module notes with `[[...]]`.
4. During the exam, work from your methodology. `Ctrl+click` any `[[link]]` to open the note behind it.

## Command sources
Get tested commands from these as you go:
- [mavhezha/htb-ai-red-teamer](https://github.com/mavhezha/htb-ai-red-teamer)
- [p0wn4j/HTB-COAE-Mess](https://github.com/p0wn4j/HTB-COAE-Mess)
- [PayloadsAllTheThings Prompt Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Prompt%20Injection)
- [mik0w/pallms](https://github.com/mik0w/pallms)
- [nukIeer/AI-Prompt-Injection-Cheatsheet](https://github.com/nukIeer/AI-Prompt-Injection-Cheatsheet)
- [HackTricks AI prompt injection](https://hacktricks.wiki/en/AI/AI-Prompts.html)
- [invariantlabs-ai/mcp-injection-experiments](https://github.com/invariantlabs-ai/mcp-injection-experiments)
- Reporting: [SysReptor HTB-COAE template](https://docs.sysreptor.com/assets/reports/HTB-COAE-Report.pdf) + [Documentation & Reporting module](https://academy.hackthebox.com/course/preview/documentation--reporting)

---
<span style="color: var(--text-faint)">Made by</span> [cnmoseman](https://github.com/cnmoseman) · [All HTB Study Trackers](https://cnmoseman.github.io/htb-study-trackers/) · [Report a problem](https://github.com/cnmoseman/htb-study-trackers/issues/new?template=report-problem.yml&cert=COAE&where=Prep+vault&title=%5BProblem%5D+%5BCOAE%5D+)
