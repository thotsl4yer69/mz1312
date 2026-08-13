# GitHub Cleanup — 2026-08-13

This is the permanent audit record for the MAZLABZ / Jack Mazzini GitHub cleanup performed on 13 August 2026.

The objective was not to make every repository look equally important. It was to turn a raw independent R&D workspace into a legible technical portfolio while preserving project history and provenance.

## Account model established

Repositories are now treated as one of these classes:

- **Flagship** — strongest current public evidence.
- **Engineering Lab** — authored/integrated work showing a specific capability.
- **Historical / Predecessor** — real earlier work retained to show progression.
- **Research Fork** — upstream code retained for source study/integration; upstream authorship not claimed.
- **Learning Template** — starter/template code retained as learning history, not a built product.
- **Archive Candidate** — dead/superseded shell retained until repository settings can archive it safely.
- **Private R&D** — active, sensitive, predecessor or release work not suitable for automatic publication.

The canonical account map is [`PORTFOLIO_INDEX.md`](PORTFOLIO_INDEX.md). Repository presentation/provenance rules are in [`REPOSITORY_POLICY.md`](REPOSITORY_POLICY.md).

## Flagship public story

Current flagship evidence is centred on:

1. `sentient-core` — local-first Jetson edge AI and Linux service integration.
2. `drifter` — Raspberry Pi vehicle telemetry/diagnostics/edge integration.
3. `Myceliyum` — native Android/Kotlin offline-first field-research application.
4. `Hexplayer` — physical NFC-to-music Raspberry Pi bench prototype.
5. `akari-android` — local-first Android application with privacy/accessibility/CI evidence.
6. `bench` — private active BenchForge build; intended future public flagship after its release gate.

Secondary evidence includes `mazlabz-homehub`, `mixdown`, `thegame`, `maz-ai-orchestrator`, `survival-companion`, `bitchat-android`, `hydra_universal_remote`, `oracle` and other classified lab projects.

## Presentation changes

The cleanup replaced or bounded inflated language such as:

- blanket `production ready` claims;
- universal hardware/vehicle compatibility;
- unaudited cryptographic/security claims;
- static “deployed” badges tied to old private-LAN states;
- model/provider support presented as permanent compatibility;
- prototype payment/revenue concepts presented as current income;
- scientific/medical/safety implications not justified by the evidence.

Prominent repositories now use controlled maturity language:

- Concept
- Software prototype
- Bench validated
- Hardware-integrated prototype
- Deployed prototype
- Production
- Archived

`Production` is intentionally reserved for projects with repeatable deployment, recovery, security and acceptance evidence.

## Provenance changes

Research/upstream repositories now contain explicit fork notes where practical. The account does not claim authorship of upstream projects such as OpenMemory, libedgetpu, the MCP registry, SGLang, BitChat upstream, RuView, Intercept, Freenove vendor code or other research forks.

Modified forks distinguish the upstream project from local adapters/bridges/configuration changes.

Learning/starter repositories are labelled as learning history rather than products.

AI-assisted development is disclosed consistently: coding agents are normal implementation/research/refactoring/testing tools; architecture, system definition, integration, hardware decisions, debugging, verification and deployment remain the project owner's responsibility. Substantially autonomous-agent-generated experiments are labelled more explicitly.

## Repository hygiene

Changes made across the account include:

- evidence-based `PROJECT_STATUS.md` records on flagship and supporting repositories;
- repaired/reframed flagship READMEs;
- hardened `.gitignore` rules for local environment files, signing keys, private-key formats, databases, logs, backups and generated state;
- removal of stale committed backup configuration where found;
- clearer predecessor/successor links;
- archive-candidate markers on empty/superseded shells;
- a reusable evidence-first [`README_TEMPLATE.md`](README_TEMPLATE.md);
- a settings-only follow-up manifest in [`GITHUB_SETTINGS_TODO.md`](GITHUB_SETTINGS_TODO.md).

## Security incidents found during cleanup

### Myceliyum — exposed Google API key

A real Google API key was found hard-coded in the Android build configuration and removed from the current tree.

**Required external action:** revoke/rotate that key in Google Cloud. The old value existed in public Git history, so source removal is not revocation.

The Android build now obtains optional Google configuration from private local/environment/CI configuration and documents that any API key distributed in an APK is extractable and must use provider-supported restrictions/quotas.

### Myceliyum — exposed Android debug signing key

A base64-encoded debug signing keystore was found committed publicly and removed.

**Required external action:** discontinue that signing identity for trusted distribution and generate a new private development/release identity. The old private key existed publicly and therefore cannot be trusted.

CI was changed so signing material comes from GitHub Actions Secrets rather than the repository. Public builds do not inject the optional backend bearer token.

See the project's `SECURITY.md` for the exact current signing/credential model.

### Sentient Core — exposed/reused MQTT credential

A literal MQTT password was found reused across active source/default configuration and older documentation.

The current project tree was sanitized in one pass. The affected Python services now require `MQTT_PASS` from runtime environment configuration, and the sanitized service files were syntax-checked before the temporary sanitation workflow was removed.

**Required external action:** rotate the MQTT credential at the actual broker on every Sentient node that used the historical value, provision the replacement privately at runtime, verify clients, then revoke the old broker credential.

See `sentient-core/SECURITY.md` for the deployment-side rotation policy.

## Secret-scan boundary

A targeted high-signal current-tree scan was performed for common AWS, GitHub, OpenAI, Anthropic, Google, Slack and private-key patterns across the main public portfolio repositories. It uncovered the real issues described above and did not identify additional live credentials in the inspected current trees.

This should **not** be interpreted as proof that all Git history, releases, workflow artifacts, binary files, forks or every one of ~80 repositories has undergone a forensic secret scan. Historical exposed credentials remain compromised until revoked even if current files are clean.

A dedicated history scan with GitHub secret scanning and/or a local history-aware scanner is still worthwhile as a separate security exercise.

## Settings-level work still required

Normal repository file access cannot perform several account-level operations. The exact list is maintained in [`GITHUB_SETTINGS_TODO.md`](GITHUB_SETTINGS_TODO.md), including:

- archive dead/superseded repositories;
- set the six portfolio pins;
- create the profile README repository;
- apply concise repository descriptions/topics;
- set professional display name/bio/homepage;
- normalise the old `sentient-core-v4` default branch;
- configure new private Myceliyum signing secrets.

## Target public impression

The desired result is not “Jack has dozens of unrelated repositories.”

It is:

> **Jack Mazzini runs an independent applied-technology lab and repeatedly turns unusual ideas into demonstrable systems spanning AI, software and physical hardware. His strongest capability is systems integration.**

That is the standard future repository cleanup and portfolio work should preserve.
