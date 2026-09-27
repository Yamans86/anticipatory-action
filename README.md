# Anticipatory Action

An evidence-first public research platform adapting humanitarian anticipatory-action logic to artificial-intelligence (AI) related labour-market disruption in advanced economies. The project asks whether emerging socioeconomic fragility can be detected early enough to protect household resilience before labour disruption becomes crisis. Canada is the first empirical pilot.

**Canada proof-of-concept status:** the five-layer architecture has been executed and validated as a proof of concept using Canadian public evidence, negative controls, coverage tests, policy rules and transition-time sensitivity analysis. The architecture survives, the current broad structural AI-displacement alarm is **not triggered**, and calibration is not yet production-ready.

The public site deliberately keeps successful, failed, downgraded and unresolved findings visible. v0.4 restores the earlier Canada computational POC alongside the newer versioned source architecture and rolling-origin forecasting protocol.

## Run and verify

Requires Node.js 24. There are no third-party runtime dependencies or secrets.

```sh
npm run validate
npm test
npm run build
```

The production build writes static HTML, CSS and JSON to `dist/`. GitHub Pages serves the site from the `main` branch through the Pages workflow.

## Structure

- `content/records.json`: versioned research objects and exact-version evidence links.
- `content/countries.json`: country registry and lab status.
- `src/catalog.js`: validation, lookup and filters.
- `src/pages.js`: narrative and reusable catalog/detail views.
- `scripts/build-static.js`: static production generator.
- `public/style.css`: responsive editorial design.
- `analysis/canada/`: executable Canada rolling-origin experiment and input contract.
- `data/`: provenance rules and dataset-manifest templates.
- `docs/canada-poc-v0.2.md`: curated validation summary of the restored Canada proof of concept.
- `test/`: catalog, renderer, static-build and experiment tests.
- `.github/workflows/`: research validation, GitHub Pages deployment and live production smoke tests.

Routes include the homepage, evidence/data, Canada Lab, the Canada computational POC, indicators, experiments, early warning, candidate actions, methodology, project history, roadmap and changelog. `/api/catalog.json` exports every record version. Versioned records use `/objects/{id}/v/{version}`.

## Canada computational POC

The restored Canada proof of concept uses five linked models:

- **Occupational Transition Pressure Model (OTPM):** separates technical artificial-intelligence exposure, observed deployment, labour deterioration and attribution.
- **Population Exposure Model (PEXM):** preserves population heterogeneity rather than treating migrants or non-permanent residents as one exposure category.
- **Vulnerability and Adaptive Capacity Model (VACM):** separates labour exposure from household financial fragility and Financial Runway.
- **Policy Buffer and Protection Gap Model (PBGM):** encodes policy eligibility, timing, replacement and duration while exposing policy gaps.
- **Transition Velocity and Protected Transition Margin Model (TVPM):** tests whether warning lead time and protected runway create enough time for a sustainable transition.

The v0.2 validation retained the architecture but tightened its claims. The broad structural AI-displacement alarm did not trigger. The top-10 NPR exposure ranking was downgraded because of incomplete population coverage. Financial Runway is source-feasible but not yet estimated from microdata. Policy-rule encoding works but Work-Sharing has an unresolved AI shock-fit question. PTM/TTP mechanics pass structural tests, while transition-time calibration remains too uncertain for operational thresholds.

See `docs/canada-poc-v0.2.md` and the public Canada proof of concept page for the validation gate and numerical sensitivity results.

## Canada Quantitative Engine v1.0 - next

The next empirical phase is data ingestion and calibration:

1. ingest the full population × occupation matrix with suppression and coverage metadata;
2. construct Financial Runway from SFS, SHS and MBM sources with explicit synthetic-linkage uncertainty where necessary;
3. estimate pathway-specific time to sustainable employment, including credentials and training;
4. encode policy eligibility and realized take-up;
5. extend historical negative controls and run the rolling-origin forecasting experiment on versioned inputs.

No operational trigger is active.

## Public-language standard

Public-facing content follows a strict rule: write the full name first and put the abbreviation in parentheses. Any abbreviation that remains in the interface must be defined in `src/glossary.js` and appear on the public `/glossary` page. Research record pages also show the terms used on that page. Internal shorthand should not be treated as reader knowledge.

## Publish research updates

Make changes on a branch. Never edit or remove an already published record version: append a new version with the same permanent ID when a research object changes. Keep dependency links pinned to exact versions. Add a changelog entry, run validation and tests, and review a pull request. CI checks preservation of published records against the base commit.

Source metadata is not a copied dataset. Before ingesting data, verify licence and coverage, pin the release vintage, store original artifact checksums and capture transformation code/environment provenance. Never publish personal or restricted data to this repository.

## Deployment

Primary public deployment:

`https://yamans86.github.io/anticipatory-action/`

GitHub Pages deploys the static build from `main`. A separate production smoke workflow checks the public homepage, Canada Lab, Evidence and Canada proof of concept routes after changes.

The earlier Vercel deployment remains outside the critical production path.

## Content status and reuse

v0.5 includes 51 versioned research records and a redesigned conceptual framework, including restored Canada proof of concept results and source-backed validation objects. The POC is not equivalent to a production-grade data pipeline: several inputs were derived from published summaries or chart transcriptions, and the raw-source ingestion/calibration layer remains the next engineering step.

Project ownership, software/content licensing and editorial roles should be explicitly assigned before broader reuse or operational adoption. No software or content licence is currently granted by this repository.
