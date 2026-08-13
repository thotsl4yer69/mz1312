# GitHub Cleanup — 2026-08-13

This is the permanent audit record for the MAZLABZ / Jack Mazzini GitHub cleanup performed on 13 August 2026.

The objective was not to make every repository look equally important. It was to turn a raw independent R&D workspace into a legible technical portfolio while preserving project history, technical evidence and provenance.

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

## Presentation and credibility changes

The cleanup replaced or bounded inflated language such as:

- blanket `production ready` claims;
- universal hardware/vehicle compatibility;
- unaudited cryptographic/security claims;
- static “deployed” badges tied to old private-LAN states;
- model/provider support presented as permanent compatibility;
- prototype payment/revenue concepts presented as current income;
- scientific/medical/safety implications not justified by evidence.

Prominent repositories now use controlled maturity language:

- Concept
- Software prototype
- Bench validated
- Hardware-integrated prototype
- Deployed prototype
- Production
- Archived

`Production` is intentionally reserved for projects with repeatable deployment, recovery, security and acceptance evidence.

The historical `mazlabz-enterprise-terminal` security/pentest UI is explicitly labelled as simulated interface content, not evidence that the depicted exploitation occurred or that the repository establishes professional penetration-testing expertise.

## Provenance changes

Research/upstream repositories now contain explicit fork notes where practical. The account does not claim authorship of upstream projects such as OpenMemory, libedgetpu, the MCP registry, SGLang, BitChat upstream, RuView, Intercept, Freenove vendor code or other research forks.

Modified forks distinguish upstream code from local adapters/bridges/configuration changes. Learning/starter repositories are labelled as learning history rather than products.

AI-assisted development is disclosed consistently: coding agents are normal implementation/research/refactoring/testing tools; architecture, system definition, integration, hardware decisions, debugging, verification and deployment remain the project owner's responsibility. Substantially autonomous-agent-generated experiments are labelled more explicitly.

## Repository hygiene

Changes made across the account include:

- evidence-based `PROJECT_STATUS.md` records on flagship and supporting repositories;
- repaired/reframed flagship READMEs;
- hardened `.gitignore` rules for local environment files, signing keys, private-key formats, databases, logs, backups and generated state;
- removal of stale committed backup configuration where found;
- clearer predecessor/successor links;
- archive-candidate markers on empty/superseded shells;
- explicit fork/template provenance notes;
- a reusable evidence-first [`README_TEMPLATE.md`](README_TEMPLATE.md);
- a prepared [`GITHUB_PROFILE_README.md`](GITHUB_PROFILE_README.md) for the future profile repository;
- a settings-only follow-up manifest in [`GITHUB_SETTINGS_TODO.md`](GITHUB_SETTINGS_TODO.md);
- a provider/device-side rotation checklist in [`SECURITY_ROTATIONS_REQUIRED.md`](SECURITY_ROTATIONS_REQUIRED.md).

## Security incidents found and current-tree remediation

### Myceliyum — exposed Google API key

A real Google API key was found hard-coded in the Android build configuration and removed from the current tree.

**External action still required:** revoke/rotate that key in Google Cloud. Source removal is not revocation because the old value exists in public Git history.

The Android build now obtains optional Google configuration from private local/environment/CI configuration and documents that any API key distributed in an APK is extractable and must use provider-supported restrictions/quotas.

### Myceliyum — exposed Android debug signing key

A base64-encoded debug signing keystore was committed publicly and has been removed.

**External action still required:** discontinue that signing identity for trusted distribution and generate a new private development/release identity.

CI was changed so signing material comes from GitHub Actions Secrets rather than the repository. Public builds do not inject the optional backend bearer token.

The repaired Android CI was verified after the change: unit tests passed, the debug APK assembled successfully, a verification artifact uploaded successfully, and the rolling-release gate completed successfully while correctly skipping publication because the replacement private signing identity is not yet configured.

See `Myceliyum/SECURITY.md` for the current signing/credential model.

### Sentient Core — exposed/reused MQTT credential

A literal MQTT password was found reused across active source/default configuration and older documentation.

The current public project tree was sanitized in one pass. Five affected Python services now require `MQTT_PASS` from runtime environment configuration and were syntax-checked successfully before the temporary sanitation workflow was removed.

**External action still required:** rotate the MQTT credential at the actual broker on every node that used the historical value, provision the replacement privately, verify clients, then revoke the old broker credential.

See `sentient-core/SECURITY.md`.

### Private sentient_core predecessor — exposed OpenAI and ElevenLabs credentials

The private predecessor repository contained real provider credentials directly in `companionscape/config.json`.

Both values were removed from the current tree. The integration already supports `OPENAI_API_KEY` and `ELEVENLABS_API_KEY` through runtime environment configuration, so committed config now leaves those values blank. The repository `.gitignore` was hardened and `SECURITY.md` added.

**External action still required:** revoke/rotate both historical provider credentials. Private repository visibility does not make a committed credential safe.

### Mixdown — public Android workflow contained privileged provider credentials

The public Mixdown Android workflow contained a large block of live-looking service credentials directly in workflow YAML, including a Supabase privileged key, several content/aggregation API credentials and a TikTok client secret.

The current workflow was rewritten completely:

- no privileged provider values are hard-coded;
- Android receives only client-safe Supabase URL + anon/publishable key + optional EAS project ID;
- ingestion/provider secrets are documented as server-side Supabase Edge Function secrets;
- workflow permission was reduced to `contents: read`;
- `BUILD.md` and `SECURITY.md` now explain the mobile-client/server trust boundary.

**External action still required:** revoke/rotate every non-public credential from the historical workflow. See [`SECURITY_ROTATIONS_REQUIRED.md`](SECURITY_ROTATIONS_REQUIRED.md) for the provider checklist. Public/publishable identifiers should be assessed according to their provider semantics rather than blindly treated as secrets.

### Private Cortana predecessor — predictable legacy deployment credentials

Historical bootstrap/configuration in the private `cortana` predecessor used predictable development PostgreSQL, MQTT, PIN/JWT/application values.

The current `.env.example` has been replaced with a blank-secret template and `SECURITY.md` now marks old bootstrap values as unsafe historical configuration.

**External action still required only if those historical defaults were actually deployed:** rotate the affected database/MQTT/application/PIN credentials on those systems.

## Secret-scan boundary

A high-signal account scan was performed across common credential families including AWS, GitHub, OpenAI, Anthropic, Google, Slack, Stripe, Supabase, Cloudflare, Vercel, npm/PyPI, NVIDIA/NGC, Hugging Face/OpenRouter, private-key markers and database URLs.

The scan uncovered the real issues above. Other inspected hits were provider placeholders, public-client identifiers, GitHub Actions secret references, fictional demo strings or deployment examples rather than additional live credentials.

This is **not a forensic all-history guarantee**. Git search, release artifacts, workflow artifacts, binary files and old commits can preserve exposed values after `main` is clean. Historical exposed credentials remain compromised until revoked.

A dedicated history-aware scan with GitHub secret scanning and/or a local history scanner remains worthwhile after provider rotations are completed.

## Settings-level work still required

Normal repository file access cannot perform several GitHub account/settings operations. The exact list is maintained in [`GITHUB_SETTINGS_TODO.md`](GITHUB_SETTINGS_TODO.md), including:

- archive dead/superseded repositories;
- set the six portfolio pins;
- create the profile README repository and copy in `GITHUB_PROFILE_README.md`;
- apply concise repository descriptions/topics;
- set professional display name/bio/homepage;
- normalise the old `sentient-core-v4` default branch;
- configure new private Myceliyum signing secrets.

## External credential actions still required

Source cleanup is not credential revocation. The authoritative provider/device-side checklist is [`SECURITY_ROTATIONS_REQUIRED.md`](SECURITY_ROTATIONS_REQUIRED.md).

At minimum it covers:

- Myceliyum Google API key;
- Myceliyum compromised Android debug signing identity;
- Sentient MQTT broker credential;
- private predecessor OpenAI and ElevenLabs credentials;
- the historical Mixdown provider-secret bundle;
- legacy Cortana service credentials if those defaults were ever actually deployed.

Do not reuse any historical secret value merely because it has been removed from current files.

## Target public impression

The desired result is not “Jack has dozens of unrelated repositories.”

It is:

> **Jack Mazzini runs an independent applied-technology lab and repeatedly turns unusual ideas into demonstrable systems spanning AI, software and physical hardware. His strongest capability is systems integration.**

That is the standard future repository cleanup and portfolio work should preserve.
