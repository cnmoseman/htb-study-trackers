---
tags: [cdep, moc, exam]
cssclasses: [cdep-hub]
---

![[cdep-logo.png|badge|300]]

# Exam

Your workspace for exam days: investigations, detections, IOCs, flags and a log for each day. There's no public CDEP report template yet, so these notes follow what HTB says the report needs: flags, the attack chain mapped to MITRE ATT&CK, and your detection logic with its limits.

> [!danger] Keep this vault private
> Once you start the exam, this vault holds exam content. Don't push it to a public GitHub repo or share it, during or after the exam. HTB's terms don't allow it.

## Start here
1. [[01 - Before You Start]]: go through the checklist before you start.
2. [[02 - Scope & Rules]]: copy the scope from the letter of engagement.
3. Keep a log as you work: `Log/` has one note per exam day, from [[Day 01]] to [[Day 10]].

## Investigations
One note per item in `Investigations/`. Start with [[Investigation 1]] and rename it. For each new one, create a note in `Exam/Investigations`, then run **Insert template → Investigation**.

![[Investigations.base]]

## Tracking
- [[03 - IOCs]]: every indicator you find, and where you saw it.
- [[04 - Detections]]: the detection logic for each technique, and its limits.
- [[05 - Flags]]: every flag and where it came from. Report: *Flags Discovered*.

---
[[Home]]
