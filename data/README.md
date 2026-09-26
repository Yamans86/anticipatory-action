# Data architecture

This repository does not commit a live or mutable "latest data" file. Every analytical input must be tied to a source release and a manifest.

## Layers

- `raw/`: immutable source artifacts where redistribution is permitted.
- `processed/`: deterministic transformations of raw artifacts.
- `derived/`: indicators, model inputs and analytical outputs.
- `manifests/`: provenance records that connect every artifact to its source, checksum and transformation code.

Large or restricted artifacts may live outside Git, but their manifests belong here.

## Manifest requirements

Every real-data run must record:

- permanent dataset ID and version;
- publisher and exact source/product URL;
- Statistics Canada table/product identifier where applicable;
- retrieval timestamp and release/reference vintage;
- licence and required acknowledgement;
- SHA-256 of the source artifact;
- observation coverage and grain;
- transformation code commit;
- parameters and missingness policy;
- known quality flags, revisions and suppressions;
- output artifact checksum.

Missing observations stay missing. Suppressed values are never converted to zero. Revised Statistics Canada releases create a new dataset artifact/version rather than silently replacing the evidence used by an earlier result.

No individual-level restricted data belongs in the public repository.
