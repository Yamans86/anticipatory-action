# Anticipatory Action

An evidence-first public research platform investigating whether AI-related labour-market change can inform earlier, accountable support. Canada is the first pilot.

**Research scaffold:** no ingested observations, completed experiments, validated forecasts or operational triggers. Seven initial records distinguish a catalogued publisher source from proposed research work.

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
- `test/`: catalog integrity, route traversal, filters, escaping and HTTP tests.
- `docs/`: architecture, editorial and deployment decisions.

Routes include narrative, evidence/data, Canada Lab, hypotheses in the full catalog, indicators, experiments, early warning, actions, methodology, history, roadmap and changelog. `/api/catalog.json` exports all versions. `/objects/{id}/v/{version}` is a version permalink; `/objects/{id}` redirects to the latest version. Unknown records and versions return 404.

## Publish research updates

Make changes on a branch. Never edit or remove a published record version: append a new version with the same permanent ID and updated metadata. Keep dependency links pinned to exact versions. Add a changelog entry, run validation and tests, and review a pull request. CI checks the preservation of published records against the base commit.

Source metadata is not a copied dataset. Before ingesting data, verify licence and coverage, pin the release vintage, store original artifact checksums and capture transformation code/environment provenance. Never publish personal or restricted data to this repository.

## Deploy on Railway

The Dockerfile and `railway.json` are ready for a GitHub-backed service on `main`. No database, volume or environment secrets are required. See [deployment notes](docs/deployment.md).

## Content status and reuse

The prior conversation preview and current task brief supplied the architecture. The synced source folder was empty when this release was built. Earlier findings have not been reconstructed. Statistics Canada's publisher page was checked on 2026-09-26; its data are not bundled. Project ownership, licensing and editorial roles should be explicitly assigned before broader reuse or operational adoption. No software or content licence is granted by this repository yet.
