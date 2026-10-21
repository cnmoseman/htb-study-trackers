---
ip:
hostname:
os:
role:
status: todo
tags: [cdep, host]
---

> [!info] At a glance
> Role: what the host does, like a workstation, the domain controller or a Linux build server. Status: todo, analyzing, validated or done.
> Techniques go in [[04 - Techniques|Techniques]], rules in [[05 - Detection Rules|Detection Rules]], flags in [[07 - Flags|Flags]].

## Detection Engineering Synthesis
<!-- ATT&CK-mapped summary of what happened on this host, and the coverage you can build and validate here -->
- *e.g. certutil (S0160) pulled down Rubeus (T1105), which ran AS-REP roasting (T1558.004)*

## Next Up
<!-- what to work on next; tick it off as you go -->
- [ ] *e.g. Validate a rule for the AS-REP roasting step*

## Techniques
<!-- one section per technique, in the order the attacker used them; copy this whole section for each -->

### *e.g. BITS Jobs - T1197*
**Detection Objective**
<!-- why the attacker used it here and what it gave them -->
- *e.g. Pulled the next-stage payload down without a browser*

**Behavioral Breakdown**
<!-- how it works, from the recovered sample and/or the telemetry, and how it links to the steps before and after -->
-

**Tool / Tradecraft Analysis**
<!-- a public tool? break down how it works and its choke points and invariants -->
-

**Artifact Analysis**
<!-- capability analysis of a recovered sample, step by step; add your WinDbg trace analysis here if you used one -->
-

**Summiting the Pyramid: Host-Based Model**
<!-- where each detection opportunity sits; aim for the higher rows -->
| Level | Application (A) | User-Mode (U) | Kernel-Mode (K) |
| --- | --- | --- | --- |
| 5 Core to (Sub-) Technique | *e.g. Bits-Client/Operational, event ID 3 "BITS job created"* |  |  |
| 4 Core to Some Implementation of (Sub-) Technique |  |  |  |
| 3 Core to Pre-Existing Tool or Inside Boundary | *e.g. PowerShell 4104 with Start-BitsTransfer* |  |  |
| 2 Core to Adversary-Brought Tool or Outside Boundary |  |  |  |
| 1 Ephemeral | *e.g. the BITS job's DisplayName* |  |  |

**Summiting the Pyramid: Network-Based Model** (if it applies)
| Level | Protocol Payload (P) | Protocol Header (H) |
| --- | --- | --- |
| 5 Core to (Sub-) Technique |  |  |
| 4 Core to Some Implementation of (Sub-) Technique |  |  |
| 3 Core to Pre-Existing Tool or Inside Boundary |  |  |
| 2 Core to Adversary-Brought Tool or Outside Boundary |  |  |
| 1 Ephemeral |  |  |

**ATT&CK Detection Guidance**
- *e.g. DET0098 - Detect abuse of Windows BITS Jobs*

**Detection Rule 1:** *e.g. what it catches*
```text
index=...    # your SPL
```
- Fires on the true positive: *e.g. yes, screenshot ws01-t1197-rule1-fires.png*
- False positives: *e.g. admin software updates*

**Additional Telemetry & Detection Opportunities**
<!-- missing telemetry, Sigma or YARA rules, API hook points worth intercepting -->
-

## Storyline
<!-- what happened on this host in time order; it feeds the Storyline note -->
| Time (UTC) | Activity |
| --- | --- |
| *e.g. 2026-09-09 10:14:22* | *e.g. Spearphishing attachment opened (T1566.001)* |

## Related Modules
- *e.g. [[M01 - Detection & OpSec Cyber Range]]*
