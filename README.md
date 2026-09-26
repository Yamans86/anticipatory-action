# Anticipatory Action

An evidence-first public research platform investigating whether AI-related labour-market change can inform earlier, accountable support. Canada is the first pilot.

**Canada evidence build:** the source architecture now includes immigrant labour-market outcomes, occupation employment, detailed vacancies, Canadian AI-exposure research and observed generative-AI use. No real observations have yet been ingested and no research result or operational trigger is published. The first rolling-origin experiment is executable and tested, but remains unrun on real data until its versioned inputs are ready.

## Run and verify

Requires Node.js 22 or newer (deployment uses Node 24). There are no third-party runtime dependencies or secrets.

```sh
npm start
npm run validate
npm test
```

Open http://localhost:3000. Set `PORT` to override the port. The service binds to `0.0.0.0`; `/health` returns readiness after catalog validation.

## Structure

- `content/records.json`: research objects and exact-version evidence links.
- `content/countries.json`: country registry; adding a country creates its lab route.
- `src/catalog.js`: validation, lookup and filters.
- `src/pages.js`: narrative and reusable catalog/detail views.
- `src/server.js`: read-only HTML and JSON endpoints.
- `public/style.css`: responsive editorial design.
- `analysis/canada/`: executable Canada experiment code and input contracts.
- `data/`: provenance rules and dataset-manifest templates; no unversioned live-data dump.
- `test/`: catalog integrity, route traversal, filters, escaping, HTTP tests and experiment tests.
- `docs/`: architecture, editorial and deployment decisions.

Routes include narrative, evidence/data, Canada Lab, hypotheses in the full catalog, indicators, experiments, early warning, actions, methodology, history, roadmap and changelog. `/api/catalog.json` exports all versions. `/objects/{id}/v/{version}` is a version permalink; `/objects/{id}` redirects to the latest version. Unknown records and versions return 404.

## Publish research updates

Make changes on a branch. Never edit or remove a published record version: append a new version with the same permanent ID and updated metadata. Keep dependency links pinned to exact versions. Add a changelog entry, run validation and tests, and review a pull request. CI checks the preservation of published records against the base commit.

Source metadata is not a copied dataset. Before ingesting data, verify licence and coverage, pin the release vintage, store original artifact checksums and capture transformation code/environment provenance. Never publish personal or restricted data to this repository.

## Deployment

Production target: Vercel, deployed from the `main` branch of this repository. The public site is `https://anticipatory-action.vercel.app/`. The Dockerfile and Railway configuration remain in the repository as portable fallback deployment options. No database or environment secrets are required for the current read-only release. See [deployment notes](docs/deployment.md).

## Canada v0.3 evidence status

The current Canada pilot catalogs Statistics Canada sources for monthly immigrant labour-force outcomes (14-10-0471-01), monthly occupation employment (14-10-0310-02), quarterly detailed occupation vacancies (14-10-0444-01), the Canadian C-AIOE exposure framework, and March 2026 observed generative-AI use. The unresolved constraint is a defensible monthly HELC employment series at sufficient occupational detail. The site documents that gap explicitly rather than manufacturing a proxy.

## Content status and reuse

The prior conversation preview and current task brief supplied the architecture. The synced source folder was empty when this release was built. Earlier findings have not been reconstructed. Statistics Canada's publisher page was checked on 2026-09-26; its data are not bundled. Project ownership, licensing and editorial roles should be explicitly assigned before broader reuse or operational adoption. No software or content licence is granted by this repository yet.
