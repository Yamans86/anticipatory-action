# ADR-001: A small, versioned research platform

Status: adopted for the initial skeleton, 2026-09-26.

Use server-rendered Node HTML with file-backed JSON in Git. This read-only public platform does not yet require a database, login, analytics, client framework or build pipeline. The tradeoff is that editorial updates require Git review and redeployment rather than a CMS. A later database must retain permanent IDs, exact-version routes and export compatibility.

The six conceptual layers are narrative, evidence, analytical objects, results, anticipatory action and reproducibility. Results remain explicitly empty until an experiment has been executed; future result records need an experiment version, immutable artifact manifest and review before publication.

## Identity and evidence

IDs follow `AA-TYP-CC-NNN` and are never recycled. Country codes come from the country registry. Record versions use three numeric components; a material definition change should increment the major component, additive metadata the minor component, and corrections the patch component. Old versions remain in the catalog. Exact-version dependencies are validated at startup and in CI. Latest-object routes use temporary redirects so later versions can become current.

An evidence link records a relationship, not automatic validation. Provenance distinguishes publisher metadata from project-authored definitions. Null artifact, checksum and code-commit fields explicitly mean no executed artifact exists. The Git history records editorial provenance; it is distinct from the commit used to run an analysis.

## Future ingestion contract

For each original/derived artifact capture: publisher and release URL, retrieval timestamp, licence, immutable storage URI, SHA-256, observation coverage, revision vintage, transformation commit, dependencies/environment, parameters and missingness policy. Store restricted data outside the public repository. A future result object must reference its exact experiment and artifact manifest, report uncertainty and preserve unsuccessful runs.

## Multi-country growth

Add a registry entry and country-scoped objects; country routes derive automatically from the registry. No implicit comparability is assumed. Harmonisation needs a documented protocol. Narrative home navigation intentionally highlights the current Canada pilot while the registry lists all labs.

## Editorial design

White backgrounds; navy text; teal links; Georgia headings; Arial body. Open editorial rows, fine rules, a typographic evidence chain, and reusable searchable tables. Mobile layouts stack the homepage and detail columns. Catalog tables scroll within their container. No status colour implies a live warning.
