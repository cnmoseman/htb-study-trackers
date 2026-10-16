---
incident_id:
platform:
severity:
status: open
tags: [cdep, incident]
---

> [!info] At a glance
> Platform: the SIEM you investigate this in. Status: open, investigating or closed.
> IOCs go in [[03 - IOCs|IOCs]], flags in [[05 - Flags|Flags]].

## Overview
- *e.g. Phishing email led to malware on one workstation*

## Key Findings
- *e.g. The attacker moved from the workstation to a file server*

## Immediate Actions
- *e.g. Isolate the two affected hosts*

## Stakeholder Impact
- *e.g. File server data may have been copied out*

## Affected Systems & Data
- *e.g. WS01, FS01 and the shared finance folder*

## Evidence Sources & Analysis
<!-- each detection step by step: data source, query, what it showed -->
**Notes**
- *e.g. Process creation logs show an Office app starting a script host*

**Queries**
```text
# query              # what it shows
```

## Attack Chain
| Tactic | Technique | ATT&CK ID | Evidence |
| --- | --- | --- | --- |
| *e.g. Initial Access* | *e.g. Phishing attachment* | *e.g. T1566.001* | *e.g. Email gateway log* |

## Root Cause Analysis
- *e.g. A user opened a macro document from an external sender*

## Technical Timeline
| Time | Activity |
| --- | --- |
| *e.g. 2026-03-04 09:12* | *e.g. Email delivered to the user* |

## Related Modules
- *e.g. [[M01 - Detection & OpSec Cyber Range]]*
