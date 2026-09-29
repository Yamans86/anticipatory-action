# Canada COI AET consolidated research report

Sprint 3.23 | 29 September 2026 | Research package 3.23.0 | Scenario engine 0.6.1

Canada can use this prototype to examine labour conditions, describe financial vulnerability and compare the consequences of explicitly assumed responses. The evidence does not yet establish AI-caused displacement, individual transition forecasts or an operational trigger for assistance. The immediate decision is to complete and release a bounded research prototype, then require a separate mandate for empirical validation and delivery.

The intended readers are economic recovery practitioners, policy analysts and potential research partners. This report connects the research question, completed Canadian analyses, illustrative cost comparisons and a proposed anticipatory-action framework. The accompanying executive brief provides the decision summary; the annexes preserve exact estimates, assumptions, sources and outstanding requirements.

## What the completed analyses establish

In August 2026, mean hourly employee earnings were CAD 37.02 in the public Labour Force Survey analysis. In the 2023 Survey of Financial Security, 5.55% of economic families and unattached individuals met the specified financially difficult missed-payment outcome. The estimated prevalence was 9.45% among units with positive deposits below CAD 5,000 and 1.51% among those with at least CAD 20,000. These findings describe different populations and periods. They do not form a linked sample. [S01, S02]

The existing scenario demonstration produces materially different results across navigation, conditional retention and bridge support with assumed faster job return. Those differences depend on programme costs, delivery, transition and eligibility assumptions. They illustrate questions for evaluation rather than measured intervention effects. [S07]

## Release position

Sprint 3.23 consolidates the research and action design. Sprint 3.24 is the remaining release sprint: clean reproduction of selected results, archive reconciliation, verification of website content and downloads, and handover. A validated operational system is a separate phase.

# Research questions and causal boundaries

The central question is whether earlier, feasible economic support could reduce the household and public costs of a labour-market shock. AI-related change motivates the research, but attributing a particular shock to AI requires evidence beyond occupational exposure and aggregate employment movements.

| Component | Question | Current evidence position |
| --- | --- | --- |
| OTPM occupational transition pressure | What is changing in work and labour demand? | Descriptive labour indicators; no validated pressure state |
| PEXM population exposure | Who may encounter task change? | Structural exposure context; exact Canadian score vector unavailable |
| VACM vulnerability and adaptive capacity | What resources and options could cushion a shock? | Descriptive deposit association; scenario resources |
| PBGM policy buffers | Which protections reach people and when? | Illustrative benefit rules; actual access not estimated |
| TVPM transition timing | How long until a suitable earnings recovery? | Assumed job-return distribution |
| HHTM household consequences | When do income gaps become unmet needs? | Illustrative cash floor; no severe-needs probability |

These components describe an analytical sequence. They are not a validated chain of conditional probabilities. An exposed occupation may change tasks without losing employment. A displaced worker may recover earnings before exhausting resources. A household may experience hardship for reasons unrelated to job loss. Each link needs its own measurement and identification strategy.

The cost-of-inaction comparison uses a defined baseline: scenario B includes illustrative existing benefit support. Intervention scenarios C are compared with B. This avoids treating the absence of a new programme as the absence of all protection. The comparison still requires a credible counterfactual before it can support causal policy appraisal. [S07]

Refugees, migrants and asylum seekers remain important intended populations, but available public groupings do not identify their admission categories or establish their joint exposure, resources and benefit access. Their risk cannot be inferred by relabelling a broad immigrant wage category.

# Literature and policy interpretation

The reviewed primary literature supports separating task exposure from realized labour-market consequences. The ILO 2025 index combines task information, worker assessments, expert input and model predictions to describe gradients of generative AI exposure. Its framing emphasizes potential job transformation. An exposure share is not an unemployment forecast. [S04]

The IMF 2023 working paper incorporates complementarity into AI exposure analysis. This matters because an occupation can be exposed while retaining tasks that benefit from human involvement. A single exposure ranking cannot, by itself, identify whether earnings or employment will fall. [S05]

Statistics Canada provides experimental Canadian occupational exposure estimates. The project feasibility review identified the importance of classification mapping and complementarity information. The exact Canadian occupation-level score vector needed for the intended replication has not been acquired; substituting a US score workbook would change the estimand. [S03, S08]

## How this informs the Canadian research

The literature justifies monitoring changes in tasks, employment and adaptation capacity together. It does not supply a causal coefficient that can be inserted into the scenario engine. The current report therefore keeps observed indicators, structural exposure concepts and simulated effects separate. This is a targeted methodological review, not a systematic review of all AI and labour research.

## Policy context and dated applicability

Employment Insurance and a conditional work-sharing retention pathway appear in the engine as policy illustrations. The example uses a CAD 729 weekly cap, one waiting week, 55% replacement and 20 benefit weeks, with first payment in week four. These are frozen scenario inputs. No current entitlement, eligibility rule or effective legal date is certified by this report. [S07, S09]

Before use with a real cohort, an accountable policy reviewer must document the applicable programme version, application date, claimant and employer eligibility, benefit interactions, payment timing and appeal route. C2 may be considered only after the relevant employer and programme eligibility have been independently confirmed. Administrative capacity and funding authority must also be established.

The source and claim ledger records publication or observation vintage separately from policy applicability. A scenario value has no asserted effective legal date. This prevents a reproducible historical example from being mistaken for current benefits advice.

# Observed labour conditions and hourly earnings

The inherited broad-group analysis reports 2026Q2 annual changes of +0.43% in employment, +4.60% in nominal employee wages and +0.44% in vacancies. Five broad occupational groups had declining employment. Across 2023Q1 to 2026Q2, the mean annual vacancy change was -16.13%. These mixed results do not establish an economy-wide AI employment contraction. This report retains the Sprint 3.16 summary through the Sprint 3.17 review; it does not newly reproduce that panel. [S06]

The August 2026 employee wage analysis provides a separate cross-sectional benchmark. It uses HRLYEARN divided by 100, FINALWT, employed status codes 1 or 2 and employee class codes 1 or 2. There were 57,159 eligible records with valid wages and no exclusions, representing approximately 18.54 million employees. [S01]

| Employee group | CAD per hour | Approximate 95% interval | Sample |
| --- | --- | --- | --- |
| All employees | 37.02 | 36.80 to 37.25 | 57159 |
| Immigrant, landed 10 or less years earlier | 34.12 | 33.39 to 34.84 | 4944 |
| Immigrant, landed more than 10 years earlier | 38.89 | 38.26 to 39.53 | 7852 |
| Non-immigrant | 36.99 | 36.73 to 37.25 | 44363 |

These are unadjusted nominal means. Differences may reflect occupation, hours, experience, geography and other composition. They are not estimates of discrimination or causal effects of migration status. The non-immigrant category must not be described as Canadian-born only; non-permanent residents are not separately identifiable in this public grouping.

## Uncertainty and coverage

The analysis uses 1,000 bootstrap replicates with random plus or minus square root of w times (w minus 1) adjustments to base weights, calibrated across 220 province, gender and age cells, with seed 3182026 and PCG64. Approximate standard errors are derived from full-sample-centred replicate differences; intervals use the normal approximation. This is an analytical variance procedure, not a claim to reproduce every feature of the confidential survey design.

All 47 reported domains, including 43 occupation groups, passed the project precision checks. The smallest occupational sample was 102 and the highest coefficient of variation was 6.88%. The exact domain table is in WAGE_BENCHMARK.csv. An hourly mean cannot replace the engine weekly wage without specifying working hours, price year and gross versus disposable income. [S01, S09]

# Financial resources and payment hardship

The Survey of Financial Security analysis covers 16,241 economic families and unattached individuals. The unit is not necessarily a dwelling household. Deposits are measured at the April to August 2023 interview, while the payment outcome concerns the preceding 12 months. Income refers to 2022 and was not used to define these associations. [S02]

The outcome combines a skipped or delayed non-mortgage payment with reported financial difficulty using PATTSKP and PATTDIF. The estimated national prevalence is 5.55%, with a 95% interval of 5.05% to 6.10%. There were 672 sample events, representing approximately 935,294 of 16.85 million weighted economic units.

| Deposit band in CAD | Prevalence | 95% interval | Sample |
| --- | --- | --- | --- |
| nonpositive | 11.53% | 8.97 to 14.71% | 832 |
| positive under 5000 | 9.45% | 8.42 to 10.59% | 4773 |
| 5000 under 20000 | 3.72% | 2.90 to 4.78% | 4290 |
| 20000 plus | 1.51% | 1.10 to 2.06% | 6346 |

The difference between positive deposits below CAD 5,000 and deposits of at least CAD 20,000 is 7.94 percentage points, with a 95% interval of 6.77 to 9.11 points. Adding tax-free savings account assets as a sensitivity changes the corresponding difference to 8.86 points, with an interval of 7.44 to 10.27. The descriptive gradient persists under this alternative resource definition.

## What the gradient can and cannot tell us

PWASTDEP includes non-registered accounts, term deposits and treasury bills. It does not measure all immediately usable cash; negative values are retained as valid. The sensitivity adds PWATFS but still does not establish spendable liquidity. Hardship may have depleted deposits before the interview. The association therefore does not identify the effect of giving households money or predict hardship following displacement.

Point estimates use PWEIGHT and 1,000 supplied generalized bootstrap weights matched one-to-one by PEFAMID. Proportions use logit intervals and paired contrasts use normal intervals, with full-sample-centred variance. All 11 locked outputs passed sample, event-count and precision checks; none was suppressed. Public-file variance may understate uncertainty. This payment measure is not a validated severe humanitarian-needs endpoint. [S02]

# Scenario design and accounting

The demonstration preserves engine version 0.6.1 and its existing example. It uses 1,200 simulated draws, seed 37, scaled to 1,000 workers over 52 weeks with a 3% annual discount rate. Each worker draw represents one modelled economic unit. These are not estimated Canadian caseload or household totals. Currency is illustrative CAD with mixed-year anchors that have not been inflation-harmonised. [S07]

| Scenario | Intervention relative to baseline B |
| --- | --- |
| A | Private resources only; context for the model architecture |
| B | Illustrative existing EI support; comparison baseline |
| C1 | Benefit navigation with assumed earlier payment |
| C2 | Temporary reduced hours and conditional retention; eligible employers only |
| C3 | Bridge support and training with assumed faster job return |

Core inputs are CAD 1,000 weekly wages, CAD 400 other weekly income, CAD 8,400 liquid resources and a CAD 61,763 annual illustrative needs floor. Geography, family size and aligned price years are unspecified. The floor is not a calibrated poverty threshold. Job return follows an assumed lognormal distribution with a 20-week median and 0.7 log-scale dispersion; recovered wages are assumed to be 90% of the original.

The example assumes 70% eligibility, 60% take-up and 90% delivery, with perfect warning classification and universal shock incidence in the simulated population. Realized simulated participation, scaled to 1,000 workers, is 383.33. This is neither a fitted participation estimate nor a real fractional caseload. C3 assumes a five-week acceleration and a CAD 180 weekly bridge for 12 weeks. C2 assumes a 25% retained share and 40% reduction in hours over 26 weeks. The complete input ledger is retained.

## Keep the accounting perspectives separate

Fiscal delta is intervention minus baseline government cash spending, less the specified tax sensitivity applied to earnings change. A positive number means additional outlay; a negative number means saving. Accrued but unpaid EI remains a separate nominal balance. Household income measures cash received and worker expense within the model. Employer net deducts employer costs.

Societal net uses earnings gains as an assumed output proxy and deducts real programme, employer and worker costs. Transfers cancel in this perspective. Fiscal, household and societal results must not be added together: doing so would double-count flows and benefits. The default tax sensitivity and employer savings are zero.

# Conditional scenario demonstrations

All figures below compare C with B for the simulated 1,000-worker population. Monetary figures are rounded CAD thousands. The output is MODEL_DERIVED_CONDITIONAL_SCENARIO and NOT_VALIDATED_FOR_POLICY. [S07]

| Measure | C1 navigation | C2 retention | C3 bridge and training |
| --- | --- | --- | --- |
| Fiscal delta | +57.9 | -998.6 | +610.1 |
| Household income delta | +0.4 | +3,647.5 | +1,566.7 |
| Societal net | -57.5 | +4,550.3 | +956.7 |
| Employer net | +0.0 | -95.8 | +0.0 |
| Avoided unfunded gap | 0.0 | 1,337.1 | 503.7 |
| Avoided below floor weeks | -380.0 | 7,157.5 | 1,738.3 |

## C1 shows why one success metric is insufficient

Navigation reduces the modelled cash-deficit amount by CAD 329,285 but does not reduce the unfunded gap. It produces 380 additional below-floor weeks, shown as -380 avoided weeks. The timing and distribution of payment matter: an improvement in the amount of a deficit need not improve the count of weeks below a floor. The scenario also has a CAD 57,500 societal cost and a small positive household income delta.

## C2 and C3 depend on assumed effects

C2 produces a modelled fiscal saving of approximately CAD 999,000 and a societal net of CAD 4.55 million. Its result depends on assumed retention and earnings preservation, as well as confirmed eligibility. C3 produces approximately CAD 610,000 additional fiscal outlay and CAD 957,000 societal net under its assumed faster return to work. Neither result estimates a causal return to a Canadian programme.

The modelled break-even earnings gains per participant are CAD 150 for C1, CAD 770 for C2 and CAD 1,639.72 for C3. These expose assumptions that an evaluation would need to test; they are not proven productivity targets. Exact outputs, including less favourable results and modelled ratios, are preserved in SCENARIO_RESULTS.csv.

A real decision would require distributions of eligibility, take-up, delays, resources and sustained earnings, plus credible intervention effects. The favourable C2 ranking in this particular example is not a recommendation to select retention over all alternatives.

# Anticipatory action design

The proposed framework starts with preparedness and human review. No numerical activation threshold has been validated. Occupational exposure alone cannot authorize assistance or deny access. A future implementing institution must assign authority, funding, eligibility rules and delivery standards before any operational pilot.

| Candidate action | Evidence needed before authorization | Primary measure |
| --- | --- | --- |
| Benefit navigation | Documented access barriers and applicable entitlement rules | Time to receipt and unresolved claims |
| Temporary income bridge | Verified income gap, needs basis and benefit interactions | Time to payment and unmet essential needs |
| Conditional retention | Employer eligibility and credible temporary adjustment need | Sustained employment and net earnings |
| Skills and job matching | Worker preferences and demonstrated destination demand | Sustained earnings and job quality |
| Needs assessment and referral | Consent and verified accessible service capacity | Completed referral and resolved need |
| Monitoring and review | Defined population, data quality and decision process | Lead time, false alarms and missed cases |

## Decision sequence

First, a monitoring analyst reviews the source vintage, revisions, missingness and whether a signal is corroborated by independent labour or service data. Next, a designated programme reviewer assesses individual or employer eligibility, need, delivery capacity and expected harm from acting or waiting. Only an authorized budget holder can approve a funded action. Cases then receive monitoring, a review route and an explicit closure or referral decision.

All institutional roles are currently unassigned. Candidate signals include employment and vacancy changes, earnings loss, administrative payment delay and self-reported financial difficulty. Their predictive value, useful lead time and false-alarm rates remain unvalidated. The framework does not quietly convert the CAD 5,000 analytical band into a targeting threshold.

## Finance and delivery

Each action requires a budget based on an eligible caseload, verified unit costs, duration, administration and a stated contingency. The action register includes candidate formulas and illustrative engine anchors where available. No funder, implementing partner or appropriation is committed. Delivery lead time must be measured from decision to actual receipt; an application date is insufficient.

If assistance cannot arrive before the anticipated gap, the intervention must be redesigned or treated as response rather than prevention. Immediate service referral can still be warranted on assessed current need, independently of whether AI attribution is known.

# Evaluation safeguards and remaining research

An initial pilot would need a prespecified population, outcomes, comparison strategy and follow-up period. Where feasible and ethical, random assignment or a credible phased design could estimate intervention effects. Otherwise, the design must state the confounding assumptions and avoid presenting before-and-after change as causality. Evaluation should cover delivery failure and exclusion alongside earnings and fiscal costs.

Collect only necessary personal data, obtain a defined lawful basis and consent where applicable, document access controls and retention, and provide an accessible review channel. Service users should be able to correct facts and challenge decisions. Review outcomes should be examined for differential exclusion by relevant groups when the data and privacy protections support that analysis. These are design requirements, not claims of compliance already achieved.

## Six claims remain blocked

| Blocked claim | Evidence required |
| --- | --- |
| validated transition forecast | No incident-cohort survival model has been estimated or validated. |
| calibrated household risk | Household inputs are scenarios; aligned definitions alone are not empirical calibration. |
| causal intervention returns | Effects, selection, delivery and counterfactuals remain assumed. |
| operational trigger | Predictive value, lead time, false alarms and implementation have not been validated. |
| exact occupation exposure | Sprint 3.11 did not acquire the full occupation-level score vector. |
| humanitarian risk probability | No validated severe basic-needs consequence transition is available. |

AI-caused displacement is an additional unsupported research claim, not an extra engine flag. Public monthly LFS record identifiers do not provide a valid person-level transition panel. The reviewed longitudinal options have access, vintage or outcome limitations. Restricted access, exact occupational exposure replication and repeated household outcomes require separately scoped work. [S08]

## Phase 1 completion

Sprint 3.24 must reproduce selected published outputs from pinned inputs in a clean environment, reconcile known sprint resources with the archive, confirm that public pages and download links actually work, and issue a release handover. Any mandatory failure must remain visible as a release blocker. Completing these tasks closes Phase 1 as a documented research and scenario prototype. No automatic Sprint 3.25 is planned.

# Sources and package guide

Source identifiers in the report resolve below and in SOURCE_CLAIM_LEDGER.csv. Online literature was checked on 29 September 2026. Observation dates, publication dates and policy effective dates are distinct. Current policy applicability is not asserted for engine inputs.

S01 | Statistics Canada. Labour Force Survey public microdata and guide. Vintage: August 2026. https://www150.statcan.gc.ca/n1/pub/71m0001x/2021001/2026-08-CSV.zip

S02 | Statistics Canada. Survey of Financial Security public microdata and documentation. Vintage: 2023 interviews; retrospective 12 month outcome. https://www150.statcan.gc.ca/n1/pub/13m0006x/2021001/SFS2023-eng.zip

S03 | Statistics Canada. Experimental Estimates of Potential Artificial Intelligence Occupational Exposure in Canada. Vintage: 2024 publication. https://www150.statcan.gc.ca/n1/pub/11f0019m/11f0019m2024005-eng.htm

S04 | International Labour Organization. Generative AI and Jobs A Refined Global Index of Occupational Exposure. Vintage: 20 May 2025. https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure

S05 | Pizzinelli and colleagues IMF. Labor Market Exposure to AI Cross country Differences and Distributional Implications. Vintage: 4 October 2023. https://www.imf.org/en/publications/wp/issues/2023/10/04/labor-market-exposure-to-ai-cross-country-differences-and-distributional-implications-539656

S06 | Canada COI AET project. Broad group labour analysis retained in whole plan review. Vintage: 2026Q2 endpoint; review 28 September 2026. evidence/SPRINT_3_17_REVIEW_SNAPSHOT.md

S07 | Canada COI AET project. Scenario engine example version 0.6.1. Vintage: Frozen example; mixed price years. evidence/ENGINE_v0_6_1_EXAMPLE.json

S08 | Canada COI AET project. Data feasibility assessment. Vintage: Sprint 3.18. evidence/DATA_FEASIBILITY_MATRIX.csv

S09 | Canada COI AET project. Integration decisions and Phase 1 closure contract. Vintage: Sprint 3.22. evidence/ENGINE_INTEGRATION_DECISIONS.md

## Using the accompanying files

Start with the executive brief for the decision summary. ACTION_REGISTER.csv and ANTICIPATORY_ACTION_FRAMEWORK.md contain the action specifications, including authority, finance, timing, appeals and evaluation. SCENARIO_RESULTS.csv retains all example outputs. The evidence folder contains exact wage and hardship estimates, the frozen engine output and parameter ledger, and the relevant methods and review records. VALIDATION.json records package consistency checks. README.md distinguishes this consolidation from the final release audit.
