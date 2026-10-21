---
tags: [cdep, exam]
---

List every telemetry source you author or validate a rule on, so the work is reproducible. The report's *Telemetry and Data Sources Used* section needs where each one lives in Splunk, the fields you rely on and any gaps that lower your confidence.

| Data source | Splunk index | Sourcetype | Key fields | Used for | Gaps |
| --- | --- | --- | --- | --- | --- |
| *e.g. Sysmon* | *e.g. the index* | *e.g. the sourcetype* | *e.g. Image, CommandLine, ParentImage* | *e.g. process creation (Event ID 1)* | *e.g. no Event ID 10 on one host* |

<!-- the template lists Sysmon, ETW providers, ETW-TI, Windows Security and Linux auditd -->

---
[[00 - Exam (MOC)|Exam]] · [[Home]]
