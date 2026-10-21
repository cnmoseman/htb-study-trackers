---
tags: [cdep, moc, exam]
cssclasses: [cdep-hub]
---

![[cdep-logo.png|badge|300]]

# Exam

Your workspace for exam days: hosts, data sources, techniques, detection rules, the storyline, flags and a log for each day. Every table here matches a part of the [official CDEP report template](https://docs.sysreptor.com/assets/reports/HTB-CDEP-Report.pdf), so by the end most of the report is already written down.

> [!abstract] The job
> The incident is already contained. Your job is to build the detections that would have caught each stage and prove each one works against the captured telemetry. HTB's loop for every task:
> 1. **Characterize** the behavior, from the recovered sample or the telemetry, so the rule targets behavior, not a hash or filename.
> 2. **Map** it to the ATT&CK technique or sub-technique.
> 3. **Author** the analytic over the right data source (Sysmon, the relevant ETW provider, ETW-TI, Security or auditd).
> 4. **Validate** it on the captured corpus and confirm it fires on the true positive.
> 5. **Submit** the field value it returns. That value is the flag.
>
> HTB's template describes the example breach as five machines: a domain controller, three Windows workstations and a Linux build server.
>
> Build your ATT&CK Navigator layer as you go. The report attaches it as a JSON file.

> [!danger] Keep this vault private
> Once you start the exam, this vault holds exam content. Don't push it to a public GitHub repo or share it, during or after the exam. HTB's terms don't allow it.

## Start here
1. [[01 - Before You Start]]: go through the checklist before you start.
2. [[02 - Scope & Rules]]: copy the scope from the letter of engagement.
3. Keep a log as you work: `Log/` has one note per exam day, from [[Day 01]] to [[Day 10]].

## Hosts
One note per item in `Hosts/`. Start with [[Host 1]] and rename it. For each new one, create a note in `Exam/Hosts`, then run **Insert template → Host**.

![[Hosts.base]]

## Tracking
- [[03 - Data Sources]]: every telemetry source you rely on: Splunk index, sourcetype, key fields and gaps. Report: *Telemetry and Data Sources Used*.
- [[04 - Techniques]]: every technique you cover, with its hosts, time window and detection coverage. Report: *Identified Techniques Overview*.
- [[05 - Detection Rules]]: every SPL rule, whether it fired on the true positive, and its false positives. Report: *Proposed Detection Rules & Correlations*.
- [[06 - Storyline]]: what the attacker did on each host, in time order. Report: *Cross-Host Detection Storyline*.
- [[07 - Flags]]: every flag and the rule that returned it.

---
[[Home]]
