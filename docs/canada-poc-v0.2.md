# Canada Computational Proof of Concept v0.2

**Project:** Anticipatory Action for AI-Driven Socioeconomic Disruption  
**Evidence cut-off:** 25 September 2026  
**Public release:** v0.4.0

## Overall verdict

**SHARE WITH CAVEATS - architecture retained, calibration not yet production-ready.**

The Canada proof of concept tests a five-layer chain:

**OTPM → PEXM → VACM → PBGM → TVPM**

The layers keep five questions separate:

1. Is AI technically relevant and actually being used?
2. Is labour demand deteriorating in a way that is different from ordinary labour-market movement?
3. Which populations are exposed, and how heterogeneous are they?
4. How much financial and policy protection exists?
5. Is there enough time for a sustainable transition before household buffers are exhausted?

The POC deliberately does not estimate a current Canadian "AI-humanitarian risk rate."

## Validation gate

| Component | v0.2 status | Finding |
| --- | --- | --- |
| OTPM - exposure vs observed deployment | PASS | Worker GenAI use differs strongly across C-AIOE groups. |
| OTPM - deployment vs labour deterioration | PASS | HELC vacancy decline is not differential from low-exposure decline; broad employment grew. |
| OTPM - AI attribution | PASS / REQUIRED | COVID and baseline tests show labour change alone is non-specific. |
| OTPM - current structural Canada alarm | NOT TRIGGERED | Evidence supports monitoring, not a structural-displacement declaration. |
| PEXM - population heterogeneity | PASS | Published NPR occupational structures materially differ. |
| PEXM - top-10 exposure ranking | FAIL / DOWNGRADED | Uncovered-share bounds overlap strongly. |
| PEXM - denominator handling | PASS | TEER normalization reproduces the published NPR TEER 5 result at about 23.7%. |
| PEXM - full detailed immigrant matrix | SOURCE READY | Table 98-10-0316-01 provides detailed occupation × admission-category data. |
| VACM - runway source feasibility | PASS | SFS/SHS PUMFs and MBM thresholds provide the required source families. |
| VACM - actual liquid runway | NOT VALIDATED | Microdata have not yet been ingested and linked. |
| PBGM - statutory rule encoding | PASS | EI, Work-Sharing and Worker Retention Grant parameters can be represented. |
| PBGM - AI shock fit | OPEN | Efficiency-driven staffing rules create a material interpretation question. |
| TVPM - equation integrity | PASS | Monotonicity and timing logic pass structural assertions. |
| TVPM - calibration | NOT VALIDATED | Any-job unemployment duration is not sustainable-transition duration. |

## OTPM findings

The model separates technical exposure, observed deployment and labour deterioration.

Source-backed POC values:

| C-AIOE group | Workforce share, Mar 2026 | Worker GenAI use, Mar 2026 | Approx. vacancy change 2022Q4-2025Q3 |
| --- | ---: | ---: | ---: |
| HEHC | 31.2% | 53.8% | -30% |
| HELC | 29.6% | 45.9% | -50% |
| Low exposure | 39.3% | 14.2% | -50% |

HELC occupations therefore had high observed GenAI use but did not show differential vacancy deterioration relative to low-exposure occupations. The POC state remains **Active deployment/watch**, not structural transition.

## Negative control

Occupational-mix reallocation was compared across the AI period, COVID and a stable baseline.

| Window | AI period | COVID | Baseline |
| --- | ---: | ---: | ---: |
| 3 months | 2.7 | 4.3 | 2.8 |
| 6 months | 4.8 | 5.9 | 4.7 |
| 12 months | 6.1 | 6.7 | 6.1 |
| 24 months | 7.0 | 6.9 | 6.6 |

COVID moved faster at short horizons, while longer-window AI-period change was broadly similar to the baseline. This validates a separate AI-attribution layer.

## PEXM findings

The top-10 occupational slice covered only part of each NPR group:

| Population | Top-10 coverage |
| --- | ---: |
| Asylum claimants | 41.8% |
| Work and study permit | 39.2% |
| Study permit only | 54.7% |
| Work permit only | 25.0% |
| Other NPR type | 23.1% |

The earlier directional ranking between work-permit-only workers and asylum claimants was withdrawn as a full-population conclusion. The defensible result is that **NPR types have materially different occupational structures; full-population exposure ranking requires the complete population × occupation matrix.**

## VACM findings

The POC found a real fragility distinction in published income-wealth evidence. In the pooled SFS table used in v0.1, the lower-wealth share across the three income bands was:

- recent immigrant families: 45.9%
- established immigrant families: 18.3%
- Canadian-born families: 22.8%

This does not equal Financial Runway. Production runway needs liquid resources, expenditure or minimum-needs floors, and a defensible link to population and occupation.

v0.2 changed the status from "hard data gap" to **source-feasible, microdata engineering pending**.

## PBGM findings

The POC successfully encoded:

- EI regular benefits as a post-layoff reactive baseline
- Work-Sharing as a pre-layoff retention mechanism
- Worker Retention Grant as a retention-and-training mechanism linked to Work-Sharing

The unresolved issue is a **Shock-Fit Gap**. Work-Sharing rules exclude some reductions in work resulting from employer decisions to increase efficiencies or profits through reduced staffing. This does not automatically settle the treatment of AI restructuring, but it means legal/programme fit must be tested rather than assumed.

## TVPM findings

The model tests how lead time and protected runway affect Timely Transition Probability.

Illustrative v0.2 TTP values:

| Protected runway | 0-week lead | 6-week lead | 12-week lead |
| --- | ---: | ---: | ---: |
| 6 weeks | 0.7% | 11.2% | 31.6% |
| 14 weeks | 17.5% | 38.7% | 57.6% |
| 26 weeks | 57.6% | 71.6% | 81.1% |
| 38 weeks | 81.1% | 87.4% | 91.6% |
| 45 weeks | 88.2% | 92.1% | 94.7% |

These are scenario mechanics, not programme-effectiveness estimates.

At a fixed 32-week transition window, TTP was highly sensitive to the assumed sustainable-transition duration:

| Transition multiplier vs average unemployment duration | Median weeks | P75 weeks | P90 weeks | TTP within 32 weeks |
| --- | ---: | ---: | ---: | ---: |
| 1.0 | 18.7 | 27.2 | 37.9 | 83.5% |
| 1.25 | 23.4 | 33.9 | 47.4 | 71.4% |
| 1.5 | 28.2 | 40.8 | 56.9 | 59.2% |
| 2.0 | 37.5 | 54.3 | 76.0 | 38.7% |

The mechanics pass. Calibration does not.

## Immediate data-engineering priorities

1. Ingest the full PEXM occupation matrix and preserve coverage/suppression metadata.
2. Ingest SFS and SHS microdata, define the liquid-resource basket, add MBM floors, and build explicit synthetic linkage where direct cells do not exist.
3. Estimate time to any employment and time to sustainable employment separately, including credential and training durations.
4. Encode EI hours/region eligibility, Work-Sharing employer and employee eligibility, temporary-worker scenarios, and realized take-up.
5. Run additional historical negative controls and sectoral contractions while keeping AI attribution separate.

## Source register

- Statistics Canada - Use of generative artificial intelligence tools among Canadian workers, March 2026
- Statistics Canada - Canadian employment trends in the era of generative artificial intelligence: Early evidence
- Statistics Canada - Non-permanent residents in Canada: Portrait of a growing population from the 2021 Census
- Statistics Canada Table 98-10-0443-01 - occupation TEER by immigrant status
- Statistics Canada Table 98-10-0316-01 - detailed occupation by admission category
- Statistics Canada - Survey of Financial Security PUMF and 2023 questionnaire
- Statistics Canada - Survey of Household Spending PUMF
- Statistics Canada Table 11-10-0066-01 - MBM thresholds
- Statistics Canada Table 14-10-0057-01 - unemployment duration
- Government of Canada - EI regular benefit amount
- Government of Canada - Work-Sharing eligibility and statistics
- Government of Canada - Worker Retention Grant

## Next release gate

The next quantitative step is **Canada Quantitative Engine v1.0 - data ingestion + calibration**.

No PTM/TTP threshold should become operational until the transition-time distribution, financial runway and policy eligibility/take-up layers are empirically calibrated.
