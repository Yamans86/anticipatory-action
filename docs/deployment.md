# Deployment status

Production site: https://anticipatory-action.vercel.app/

GitHub repository: https://github.com/Yamans86/anticipatory-action

## Current deployment path

Vercel is the active production host. The project is connected to the `main` branch of `Yamans86/anticipatory-action`, so approved changes merged to `main` are intended to trigger production deployments automatically.

The current release is a small read-only Node service with no database, persistent volume or environment secrets. The application exposes `/health` for readiness and keeps all public research records in Git-backed JSON.

## Verification

Before treating a release as production-ready:

1. Run catalog validation and the Node test suite.
2. Confirm the merged commit on `main`.
3. Confirm Vercel builds that commit successfully.
4. Verify the home page, Canada Lab, evidence catalog, experiments, roadmap, version permalinks, JSON export and `/health`.
5. Check runtime/build logs for errors.

## Fallback portability

The Dockerfile and `railway.json` remain in the repository as portable fallback deployment options. Railway was evaluated first but new resource provisioning was blocked by plan limits. No existing Railway project was modified.

## Rollback

Rollback by redeploying or restoring the previous known-good Git commit. No persistent data migration is required in this release.
