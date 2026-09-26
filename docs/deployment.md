# Deployment status

GitHub repository: https://github.com/Yamans86/anticipatory-action

Railway workspace inspected: Yaman's Projects (`d3a583d2-9e81-4810-add2-e9c6805ec862`). Its existing Telegram_Micro_learning project was left unchanged.

Creating a dedicated Anticipatory Action project was rejected by Railway:

> Usage limit exceeded. Please increase or remove the hard limit to resume resource provisioning

No project, service, domain or deployment was created. The workspace owner must resolve the usage limit in Railway; this task does not change billing limits.

After that is resolved:

1. Create a dedicated Anticipatory Action project in the inspected workspace.
2. Create a GitHub-backed service from `Yamans86/anticipatory-action`, branch `main`.
3. Let Railway build the Dockerfile. The app uses Railway's `PORT` and `/health` endpoint.
4. Generate a public Railway domain and verify the home page, evidence filters, version permalink and JSON export.
5. Confirm the deployment commit matches GitHub and record the URL and commit here.

Rollback by redeploying the previous known-good Git commit. No persistent data migration is required in this release. Do not deploy before CI checks pass. GitHub-to-Railway access for the new repository may require enabling it in the user's Railway GitHub installation.
