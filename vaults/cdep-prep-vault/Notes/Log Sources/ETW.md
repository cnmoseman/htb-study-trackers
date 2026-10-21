---
source: ETW
platform:
index:
tags: [cdep, log-source]
---

> [!info] At a glance
> What it is: *e.g. Event Tracing for Windows, the kernel and user-mode event feed*
> Searched in: *e.g. Your sensor or SIEM*
> Learned in: [[M13 - Windows Kernel Telemetry & Detection Techniques]]
> Usual tools: *e.g. [[WinDbg]], SilkETW*

## First Look
<!-- the first queries you run against it -->
```text
# query              # what it shows
```

## Checklist
- [ ] Which hosts send it, and to which index
- [ ] Time range it covers
- [ ] Key event IDs or fields noted
- [ ] Gaps and noise noted
- [ ] Useful queries saved to [[05 - Detection Rules|Detection Rules]]

## Red Flags
<!-- things that usually mean a way forward -->
| What you see | Why it matters | Next step |
| --- | --- | --- |
| *e.g. A process opening another process with full access* | *e.g. Common before injection or credential theft* | *e.g. Check which process did it and why* |

## Queries by Goal
<!-- one heading per thing you want from it -->

### *e.g. Watch one provider's events*
**Notes**
-

**Queries**
```text
# query              # what it shows
```

## Gotchas / Lessons Learned
-

## Links
- Used in: <!-- link the methodology phase(s) -->
- Tools: *e.g. [[WinDbg]]*
- Index: [[00 - Module Index (MOC)]]
