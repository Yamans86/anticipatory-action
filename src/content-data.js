// Generated deployment-safe copy of the public catalog data.
// Canonical editorial sources remain content/records.json and content/countries.json.
export const recordsData = [
  {
    "id": "AA-SRC-CA-001",
    "version": "1.0.0",
    "type": "source",
    "country": "CA",
    "title": "Labour Force Survey",
    "status": "catalogued",
    "updated": "2026-09-26",
    "summary": "Statistics Canada's monthly survey provides employment and unemployment context for the Canada pilot.",
    "body": "Candidate source for measuring labour-market outcomes. The publisher describes a monthly survey used to calculate employment and unemployment rates. This record documents the source, not a downloaded dataset or a finding about AI.",
    "limitations": [
      "No data have been ingested or analysed by this project.",
      "This source alone cannot attribute labour-market changes to AI.",
      "Coverage, sampling uncertainty, revisions and subgroup availability must be reviewed before analysis."
    ],
    "provenance": {
      "origin": "Statistics Canada",
      "url": "https://www.statcan.gc.ca/en/survey/household/3701",
      "accessed": "2026-09-26",
      "license": "Not assessed; review the terms of the selected release before ingestion.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [],
    "details": {
      "Review": "Publisher description checked; suitability and licensing review pending."
    }
  },
  {
    "id": "AA-DAT-CA-001",
    "version": "0.1.0",
    "type": "dataset",
    "country": "CA",
    "title": "Canada labour-market series",
    "status": "planned",
    "updated": "2026-09-26",
    "summary": "A proposed versioned extract of labour-market outcomes for the Canada pilot.",
    "body": "Select the precise public tables, population definitions, observation period and release vintages before ingestion. Store a manifest containing publisher URLs, retrieval time, licence, checksums and transformation commit. Retain the original release alongside derived outputs where licensing permits.",
    "limitations": [
      "No dataset exists in this release.",
      "Frequency, subgroup coverage, revisions policy and accessible history are not yet confirmed."
    ],
    "provenance": {
      "origin": "Project proposal based on the candidate source",
      "url": null,
      "accessed": null,
      "license": "Pending source selection",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-001",
        "version": "1.0.0",
        "relation": "planned input"
      }
    ],
    "details": {
      "Unit of analysis": "To be specified before ingestion",
      "Missing values": "Preserve as missing; never convert absent observations to zero",
      "Release vintage": "To be captured for each extract"
    }
  },
  {
    "id": "AA-HYP-CA-001",
    "version": "0.1.0",
    "type": "hypothesis",
    "country": "CA",
    "title": "Earlier signs of labour-market stress",
    "status": "proposed",
    "updated": "2026-09-26",
    "summary": "Test whether candidate indicators add useful warning time beyond ordinary labour-market baselines.",
    "body": "The research question is whether changes associated with AI adoption can help identify labour-market stress early enough to support economically vulnerable people. Association is not causation. A separate, credible measure of AI adoption or exposure is needed before evaluating the AI-specific hypothesis.",
    "limitations": [
      "AI exposure data and a defensible identification strategy have not been selected.",
      "A positive forecasting result would not by itself demonstrate that AI caused harm."
    ],
    "provenance": {
      "origin": "Project brief; initial research proposal",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [],
    "details": {
      "Falsification": "No improvement over the pre-specified baseline, or gains that disappear in held-out periods, would count against the forecasting hypothesis."
    }
  },
  {
    "id": "AA-IND-CA-001",
    "version": "0.1.0",
    "type": "indicator",
    "country": "CA",
    "title": "Change in unemployment rate",
    "status": "proposed",
    "updated": "2026-09-26",
    "summary": "A candidate measure of labour-market stress, defined in percentage points.",
    "body": "Proposed calculation: the unemployment rate in month t minus the rate in month t minus 12, using a consistent population, geography and adjustment basis. Record the rate definition and source vintage. This candidate is an outcome measure; its value as an early signal remains untested.",
    "limitations": [
      "No values have been calculated.",
      "Annual comparisons can mask recent turning points.",
      "Seasonality, sampling error, composition effects and revisions may affect interpretation."
    ],
    "provenance": {
      "origin": "Project-authored candidate definition",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-DAT-CA-001",
        "version": "0.1.0",
        "relation": "planned input"
      }
    ],
    "details": {
      "Formula": "rate(t) - rate(t-12)",
      "Units": "Percentage points",
      "Missingness": "Return missing if either observation is missing",
      "Threshold": "Not set; must be calibrated and independently reviewed"
    }
  },
  {
    "id": "AA-EXP-CA-001",
    "version": "0.1.0",
    "type": "experiment",
    "country": "CA",
    "title": "Baseline and warning-time backtest",
    "status": "planned",
    "updated": "2026-09-26",
    "summary": "A proposed test of predictive usefulness with strict separation of training and evaluation periods.",
    "body": "Pre-register the stress-event definition, forecast horizon and candidate predictors. Compare a simple historical baseline against candidate models using rolling time splits and only information available at each forecast date. Report warning time, false alarms, missed events, calibration and subgroup performance. Publish null and failed results with the same provenance as positive findings.",
    "limitations": [
      "No experiment has been run and no performance metrics exist.",
      "Predictors, target event, evaluation periods and minimum sample size remain to be specified.",
      "Historical success may not transfer to future structural change."
    ],
    "provenance": {
      "origin": "Project-authored draft protocol",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-HYP-CA-001",
        "version": "0.1.0",
        "relation": "tests"
      },
      {
        "id": "AA-IND-CA-001",
        "version": "0.1.0",
        "relation": "candidate measure"
      }
    ],
    "details": {
      "Execution": "Not run",
      "Results": "None",
      "Reproduction requirements": "Pinned data manifests, code commit, environment, parameters, seed and run log"
    }
  },
  {
    "id": "AA-MOD-CA-001",
    "version": "0.1.0",
    "type": "model",
    "country": "CA",
    "title": "Canada early-warning model",
    "status": "concept",
    "updated": "2026-09-26",
    "summary": "A model specification under development, with no operational warning output.",
    "body": "A future model would translate validated evidence into an interpretable estimate of labour-market stress. It must document intended use, exclusions, input freshness, uncertainty, calibration and failure modes. A human review process must decide whether any signal merits action.",
    "limitations": [
      "No model is trained or validated.",
      "No alert levels, numerical thresholds or live signals are active.",
      "Insufficient evidence is an unknown state, never an assurance of low risk."
    ],
    "provenance": {
      "origin": "Project-authored model concept",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-EXP-CA-001",
        "version": "0.1.0",
        "relation": "requires validation from"
      }
    ],
    "details": {
      "Operational state": "Inactive",
      "Activation gate": "Independent validation, agreed thresholds, accountable owner and action capacity",
      "Abstention": "Missing, stale or unsuitable inputs must suppress warnings"
    }
  },
  {
    "id": "AA-ACT-CA-001",
    "version": "0.1.0",
    "type": "action",
    "country": "CA",
    "title": "Review readiness for earlier support",
    "status": "proposed",
    "updated": "2026-09-26",
    "summary": "A proposed decision pathway connecting reviewed signals to feasible support options.",
    "body": "If a future validated signal passes human review, the responsible institution would assess affected groups, consult communities and determine whether existing support can be made available earlier. Potential options require a separate feasibility and equity assessment. This record does not authorize spending, eligibility decisions or intervention.",
    "limitations": [
      "No implementing institution, budget or operational mandate is confirmed.",
      "Effectiveness, distributional impacts and feasibility remain untested.",
      "No individual-level targeting or automated decisions are supported."
    ],
    "provenance": {
      "origin": "Project-authored action proposal",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-MOD-CA-001",
        "version": "0.1.0",
        "relation": "conditional on validated evidence from"
      }
    ],
    "details": {
      "Trigger": "None approved",
      "Accountable owner": "Not assigned",
      "Lead time": "To be assessed",
      "Safeguards": "Human review, community consultation, appeal and monitoring",
      "Stop rule": "Suspend if evidence quality deteriorates or harms emerge"
    }
  },
  {
    "id": "AA-SRC-CA-002",
    "version": "1.0.0",
    "type": "source",
    "country": "CA",
    "title": "Labour force characteristics of immigrants",
    "status": "catalogued",
    "updated": "2026-09-26",
    "summary": "Statistics Canada monthly three-month moving-average labour-force outcomes by immigrant status, gender and age.",
    "body": "Table 14-10-0471-01 is the primary public high-frequency source for the Canada pilot's immigrant labour-market stress outcome. It reports employment, unemployment, participation and related rates using three-month moving averages and is unadjusted for seasonality.",
    "limitations": [
      "The three-month moving average smooths turning points and reduces apparent volatility.",
      "The public table describes immigrant status but does not isolate refugees or asylum seekers; those groups must not be inferred from immigrant status.",
      "Unadjusted seasonality, sampling uncertainty, revisions and subgroup sample sizes require explicit treatment."
    ],
    "provenance": {
      "origin": "Statistics Canada, Table 14-10-0471-01",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410047101",
      "accessed": "2026-09-26",
      "license": "Statistics Canada Open Licence; source acknowledgement required.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-001",
        "version": "1.0.0",
        "relation": "produced by survey"
      }
    ],
    "details": {
      "Frequency": "Monthly, three-month moving average",
      "Geography": "Canada, regions, provinces or territories, CMAs",
      "Priority variables": "Immigrant status; labour-force characteristic; gender; age group",
      "Role": "Primary vulnerable-population outcome source"
    }
  },
  {
    "id": "AA-SRC-CA-003",
    "version": "1.0.0",
    "type": "source",
    "country": "CA",
    "title": "Employment by occupation, monthly, seasonally adjusted",
    "status": "catalogued",
    "updated": "2026-09-26",
    "summary": "Statistics Canada monthly employment estimates by occupation for monitoring occupational labour-market change.",
    "body": "Table 14-10-0310-02 provides monthly seasonally adjusted employment by National Occupational Classification group. It is suitable for broad occupational momentum checks and baseline labour-market context.",
    "limitations": [
      "The public table's occupational detail may be too coarse to reconstruct the full C-AIOE exposure classification precisely.",
      "Sampling uncertainty and revisions must be retained where available.",
      "Broad occupation movements cannot be attributed to AI without separate exposure and identification evidence."
    ],
    "provenance": {
      "origin": "Statistics Canada, Table 14-10-0310-02",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410031002",
      "accessed": "2026-09-26",
      "license": "Statistics Canada Open Licence; source acknowledgement required.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-001",
        "version": "1.0.0",
        "relation": "produced by survey"
      }
    ],
    "details": {
      "Frequency": "Monthly, seasonally adjusted",
      "Geography": "Canada",
      "Classification": "National Occupational Classification",
      "Role": "High-frequency occupation employment context"
    }
  },
  {
    "id": "AA-SRC-CA-004",
    "version": "1.0.0",
    "type": "source",
    "country": "CA",
    "title": "Job vacancies and wages by occupation",
    "status": "catalogued",
    "updated": "2026-09-26",
    "summary": "Statistics Canada quarterly job-vacancy and offered-wage estimates at detailed NOC unit-group level.",
    "body": "Table 14-10-0444-01 provides quarterly job vacancies and average offered hourly wages by five-digit NOC unit group. Its occupational detail is valuable for testing labour-demand changes across AI-exposure classifications.",
    "limitations": [
      "Quarterly frequency limits short-horizon warning tests.",
      "Vacancies measure labour demand rather than employment outcomes and may respond differently to structural change.",
      "Suppression, quality flags and classification changes must be preserved during ingestion."
    ],
    "provenance": {
      "origin": "Statistics Canada, Table 14-10-0444-01",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410044401",
      "accessed": "2026-09-26",
      "license": "Statistics Canada Open Licence; source acknowledgement required.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [],
    "details": {
      "Frequency": "Quarterly, unadjusted for seasonality",
      "Geography": "Canada, provinces or territories, economic regions",
      "Classification": "Five-digit National Occupational Classification unit group",
      "Role": "Detailed occupational labour-demand signal"
    }
  },
  {
    "id": "AA-SRC-CA-005",
    "version": "1.0.0",
    "type": "source",
    "country": "CA",
    "title": "Canadian employment trends in the era of generative AI",
    "status": "catalogued",
    "updated": "2026-09-26",
    "summary": "Statistics Canada 2026 study applying complementarity-adjusted AI occupational exposure to Canadian employment and vacancy trends.",
    "body": "The study uses a complementarity-adjusted AI occupational exposure framework to group occupations into high-exposure/high-complementarity, high-exposure/low-complementarity and low-exposure categories. It reports that employment generally grew across these groups from November 2022 to December 2025 and did not find a clear persistent aggregate decline in high-exposure/low-complementarity jobs.",
    "limitations": [
      "Potential exposure is not observed AI adoption, job displacement or causation.",
      "The index relies on occupational-task information and expert assessments, including O*NET-based inputs adapted to Canadian occupations.",
      "Aggregate patterns can conceal subgroup effects, including age, immigration status, education and job quality."
    ],
    "provenance": {
      "origin": "Statistics Canada, Economic and Social Reports, January 2026",
      "url": "https://www150.statcan.gc.ca/n1/pub/36-28-0001/2026001/article/00003-eng.htm",
      "accessed": "2026-09-26",
      "license": "Statistics Canada Open Licence applies to Statistics Canada material; third-party index components retain their own rights.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [],
    "details": {
      "Framework": "Complementarity-adjusted AI occupational exposure (C-AIOE)",
      "Exposure groups": "HEHC; HELC; low exposure",
      "Observed period": "Employment analysis includes November 2022 to December 2025",
      "Interpretive rule": "Use as exposure evidence, not proof of AI-caused displacement"
    }
  },
  {
    "id": "AA-SRC-CA-006",
    "version": "1.0.0",
    "type": "source",
    "country": "CA",
    "title": "Use of generative AI tools among Canadian workers, March 2026",
    "status": "catalogued",
    "updated": "2026-09-26",
    "summary": "Statistics Canada evidence on actual self-reported generative-AI use at work by occupation and AI-exposure group.",
    "body": "The March 2026 Labour Market Indicators release provides a direct adoption check alongside potential exposure. It reports substantially higher generative-AI use in high-exposure occupations than in low-exposure occupations and can help distinguish potential exposure from observed use.",
    "limitations": [
      "This is a cross-sectional self-reported adoption measure, not a monthly historical series suitable by itself for backtesting.",
      "Coverage excludes some populations, including the territories, people on reserves, institutional populations and regular Armed Forces members.",
      "Use of generative AI does not establish whether effects are complementary, substitutive or harmful."
    ],
    "provenance": {
      "origin": "Statistics Canada, Labour Market Indicators, March 2026",
      "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/260730/dq260730b-eng.htm",
      "accessed": "2026-09-26",
      "license": "Statistics Canada Open Licence; source acknowledgement required.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-005",
        "version": "1.0.0",
        "relation": "uses related exposure grouping"
      }
    ],
    "details": {
      "Frequency": "Cross-sectional release for March 2026",
      "Population": "Workers aged 15 to 69 within stated survey coverage",
      "Role": "Observed AI-use validation layer"
    }
  },
  {
    "id": "AA-DAT-CA-002",
    "version": "0.1.0",
    "type": "dataset",
    "country": "CA",
    "title": "Recent-immigrant labour-market stress series",
    "status": "planned",
    "updated": "2026-09-26",
    "summary": "Versioned monthly extract for unemployment and employment outcomes by immigration recency, age and gender.",
    "body": "The first vulnerability dataset will extract selected series from Table 14-10-0471-01 with exact labels and release vintage preserved. Initial priority is the unemployment rate for recent immigrants, with non-immigrants and longer-established immigrants retained as comparison groups where sample quality permits.",
    "limitations": [
      "No extract has been committed yet.",
      "The source uses three-month moving averages and is unadjusted for seasonality.",
      "Immigrant status is not a proxy for refugee, asylum-seeker or temporary-resident status."
    ],
    "provenance": {
      "origin": "Planned project extract from Statistics Canada Table 14-10-0471-01",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410047101",
      "accessed": "2026-09-26",
      "license": "Statistics Canada Open Licence; adapted outputs must acknowledge source.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-002",
        "version": "1.0.0",
        "relation": "source"
      }
    ],
    "details": {
      "Grain": "Month x immigrant-status group x selected demographic strata",
      "Primary outcome": "Unemployment rate",
      "Comparison groups": "Longer-established immigrants and non-immigrants where available",
      "Required metadata": "Release date, vector/series labels, quality symbols, retrieval timestamp, checksum"
    }
  },
  {
    "id": "AA-DAT-CA-003",
    "version": "0.1.0",
    "type": "dataset",
    "country": "CA",
    "title": "Canadian AI occupational exposure crosswalk",
    "status": "planned",
    "updated": "2026-09-26",
    "summary": "A versioned NOC crosswalk assigning occupations to C-AIOE exposure/complementarity groups.",
    "body": "Create a transparent crosswalk from Canadian NOC codes to the AI-exposure grouping used in Statistics Canada research. Preserve the source methodology, NOC version, mapping decisions and any occupations that cannot be mapped.",
    "limitations": [
      "The full machine-readable Canadian crosswalk has not yet been committed.",
      "Potential exposure is a task-based construct and does not measure realized firm adoption or displacement.",
      "Crosswalk accuracy can be affected by NOC/O*NET concordance and classification-version changes."
    ],
    "provenance": {
      "origin": "Planned project crosswalk based on Statistics Canada C-AIOE methodology",
      "url": "https://www150.statcan.gc.ca/n1/pub/36-28-0001/2026001/article/00003-eng.htm",
      "accessed": "2026-09-26",
      "license": "Statistics Canada material under its Open Licence; verify third-party index-component terms before redistribution.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-005",
        "version": "1.0.0",
        "relation": "methodological source"
      }
    ],
    "details": {
      "Target classification": "NOC 2021 where feasible",
      "Groups": "High exposure/high complementarity; high exposure/low complementarity; low exposure",
      "Missing mapping policy": "Keep unmapped occupations explicit; never force-classify"
    }
  },
  {
    "id": "AA-DAT-CA-004",
    "version": "0.1.0",
    "type": "dataset",
    "country": "CA",
    "title": "AI-exposed labour-demand series",
    "status": "planned",
    "updated": "2026-09-26",
    "summary": "Derived employment and vacancy series grouped by AI exposure and complementarity.",
    "body": "Combine the AI-exposure crosswalk with public occupation employment and detailed vacancy data. Monthly employment will be used only at a level supported by available occupational detail; quarterly unit-group vacancies provide the more precise exposure grouping for labour-demand robustness checks.",
    "limitations": [
      "No derived series has been produced yet.",
      "The monthly public employment table may not support precise HELC grouping without a published grouped series, custom tabulation or microdata access.",
      "Monthly employment and quarterly vacancy signals must not be mechanically combined without frequency-aware methods."
    ],
    "provenance": {
      "origin": "Planned project derivation from Statistics Canada occupation employment, vacancy and C-AIOE sources",
      "url": null,
      "accessed": null,
      "license": "Derived work must retain Statistics Canada acknowledgements and respect third-party components.",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-003",
        "version": "1.0.0",
        "relation": "monthly employment input"
      },
      {
        "id": "AA-SRC-CA-004",
        "version": "1.0.0",
        "relation": "quarterly vacancy input"
      },
      {
        "id": "AA-DAT-CA-003",
        "version": "0.1.0",
        "relation": "exposure crosswalk"
      }
    ],
    "details": {
      "Monthly component": "Occupation employment where mapping detail is defensible",
      "Quarterly component": "Unit-group vacancies and offered wages",
      "Primary exposure group": "HELC for substitution-risk hypothesis",
      "Frequency rule": "Evaluate monthly and quarterly models separately before any fusion"
    }
  },
  {
    "id": "AA-HYP-CA-002",
    "version": "0.1.0",
    "type": "hypothesis",
    "country": "CA",
    "title": "AI-exposed labour-demand cooling adds warning value for recent-immigrant stress",
    "status": "proposed",
    "updated": "2026-09-26",
    "summary": "Test whether deterioration in high-exposure/low-complementarity labour demand improves forecasts of recent-immigrant unemployment stress.",
    "body": "The forecasting hypothesis is deliberately narrower than a causal claim. It asks whether AI-exposure-linked labour-demand changes add out-of-sample predictive information beyond the recent immigrant unemployment series' own history. A positive result would justify further investigation, not the conclusion that AI caused the stress.",
    "limitations": [
      "Recent immigrants are heterogeneous and may be concentrated in occupations with different AI exposure.",
      "Aggregate time-series relationships risk ecological inference and omitted-variable bias.",
      "Macroeconomic shocks, immigration-policy changes and population composition can move both predictors and outcomes."
    ],
    "provenance": {
      "origin": "Project-authored pre-analysis hypothesis",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-DAT-CA-002",
        "version": "0.1.0",
        "relation": "outcome dataset"
      },
      {
        "id": "AA-DAT-CA-004",
        "version": "0.1.0",
        "relation": "candidate predictor dataset"
      }
    ],
    "details": {
      "Primary test": "Rolling-origin forecast comparison",
      "Null": "Adding HELC labour-demand momentum does not improve held-out forecast error",
      "Causal claim": "Out of scope for this experiment"
    }
  },
  {
    "id": "AA-IND-CA-002",
    "version": "0.1.0",
    "type": "indicator",
    "country": "CA",
    "title": "Recent-immigrant unemployment momentum",
    "status": "proposed",
    "updated": "2026-09-26",
    "summary": "Three-month change in the recent-immigrant unemployment rate used as the baseline stress predictor.",
    "body": "For month t, subtract the unemployment rate three months earlier from the current three-month-moving-average unemployment rate for the pre-specified recent-immigrant group. Positive values indicate deterioration.",
    "limitations": [
      "The underlying series is already a three-month moving average, so this feature is intentionally smooth.",
      "Seasonal patterns remain because the source is unadjusted.",
      "Thresholds are not defined and should not be inferred from this feature alone."
    ],
    "provenance": {
      "origin": "Project-authored indicator definition",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-DAT-CA-002",
        "version": "0.1.0",
        "relation": "input"
      }
    ],
    "details": {
      "Formula": "u(t) - u(t-3)",
      "Units": "Percentage points",
      "Direction": "Higher means more labour-market stress",
      "Role": "Baseline predictor in AA-EXP-CA-002"
    }
  },
  {
    "id": "AA-IND-CA-003",
    "version": "0.1.0",
    "type": "indicator",
    "country": "CA",
    "title": "HELC employment cooling",
    "status": "proposed",
    "updated": "2026-09-26",
    "summary": "Negative three-month percentage change in employment for high-exposure/low-complementarity occupations.",
    "body": "When a defensible monthly HELC employment series is available, calculate minus 100 times the three-month percentage change. Positive values therefore represent employment cooling and align directionally with greater stress.",
    "limitations": [
      "A defensible monthly HELC series has not yet been constructed from public data.",
      "Occupation-level composition shifts can change the aggregate even without within-occupation displacement.",
      "This is an exposure-linked signal, not a measure of AI use or causal displacement."
    ],
    "provenance": {
      "origin": "Project-authored indicator definition",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-DAT-CA-004",
        "version": "0.1.0",
        "relation": "input"
      }
    ],
    "details": {
      "Formula": "-100 * (employment(t) / employment(t-3) - 1)",
      "Units": "Percent",
      "Direction": "Higher means more cooling",
      "Role": "Incremental predictor in AA-EXP-CA-002"
    }
  },
  {
    "id": "AA-IND-CA-004",
    "version": "0.1.0",
    "type": "indicator",
    "country": "CA",
    "title": "HELC vacancy cooling",
    "status": "proposed",
    "updated": "2026-09-26",
    "summary": "Quarterly labour-demand change for high-exposure/low-complementarity occupations using detailed vacancy data.",
    "body": "Aggregate unit-group vacancies to the HELC exposure category using a fixed documented mapping, then calculate year-over-year and quarter-over-quarter changes. This is reserved for a quarterly robustness analysis rather than being mixed directly into the monthly primary model.",
    "limitations": [
      "Quarterly frequency provides less lead-time resolution.",
      "Vacancy estimates can be noisy at detailed occupation levels and may carry quality flags or suppression.",
      "Vacancy declines can reflect hiring normalization or macroeconomic conditions unrelated to AI."
    ],
    "provenance": {
      "origin": "Project-authored indicator definition",
      "url": null,
      "accessed": null,
      "license": "Project-authored record; reuse terms not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-SRC-CA-004",
        "version": "1.0.0",
        "relation": "source"
      },
      {
        "id": "AA-DAT-CA-003",
        "version": "0.1.0",
        "relation": "exposure mapping"
      }
    ],
    "details": {
      "Primary frequency": "Quarterly",
      "Primary measures": "Quarter-over-quarter and year-over-year vacancy change",
      "Role": "Robustness and corroboration, not the primary monthly predictor"
    }
  },
  {
    "id": "AA-EXP-CA-002",
    "version": "0.1.0",
    "type": "experiment",
    "country": "CA",
    "title": "Rolling-origin test of incremental warning value",
    "status": "planned",
    "updated": "2026-09-26",
    "summary": "Executable backtest comparing recent-immigrant unemployment history alone with a model that also includes HELC employment cooling.",
    "body": "At each monthly forecast origin, train only on observations whose outcomes would already have been known at that date. Predict the change in recent-immigrant unemployment over the next three months. Compare a baseline model using recent unemployment momentum against an expanded model that adds HELC employment cooling. Report held-out RMSE and MAE and retain every forecast origin.",
    "limitations": [
      "The experiment cannot run on real observations until the two input datasets are versioned and the HELC monthly mapping is resolved.",
      "Forecast improvement would demonstrate incremental predictive association only, not AI causation.",
      "Results may be sensitive to forecast horizon, training window, revisions and structural breaks."
    ],
    "provenance": {
      "origin": "Project-authored executable protocol",
      "url": null,
      "accessed": null,
      "license": "Project-authored code and protocol; repository licence not yet assigned",
      "artifact": null,
      "sha256": null,
      "codeCommit": null
    },
    "links": [
      {
        "id": "AA-HYP-CA-002",
        "version": "0.1.0",
        "relation": "tests"
      },
      {
        "id": "AA-IND-CA-002",
        "version": "0.1.0",
        "relation": "baseline predictor"
      },
      {
        "id": "AA-IND-CA-003",
        "version": "0.1.0",
        "relation": "incremental predictor"
      }
    ],
    "details": {
      "Implementation": "analysis/canada/exp-ca-002.js",
      "Forecast horizon": "3 months",
      "Momentum window": "3 months",
      "Default minimum training sample": "24 eligible observations",
      "Evaluation": "Rolling-origin RMSE and MAE; no future-information leakage",
      "Execution": "Code implemented; real-data run pending versioned inputs",
      "Results": "None on real data"
    }
  }
];
export const countriesData = [
  {
    "code": "CA",
    "name": "Canada",
    "stage": "Evidence build",
    "description": "First pilot: source architecture is now defined for immigrant labour-market outcomes, occupation employment, detailed vacancies and Canadian AI-exposure evidence. Real-data ingestion and validation are next."
  }
];
