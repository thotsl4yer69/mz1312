# Repository Presentation & Provenance Policy

This account is an applied R&D workspace. To keep it credible as a public portfolio, repositories should state what they are, what is verified, and where upstream work begins.

## Required public-repo header

Every authored public repository should make these points obvious near the top of its README:

1. **Purpose** — one sentence a non-specialist can understand.
2. **Status** — Concept / Software prototype / Bench validated / Hardware-integrated prototype / Deployed prototype / Production / Archived.
3. **Evidence** — what has actually been run, tested or integrated.
4. **Known limitations** — hardware or deployment claims still unverified.
5. **Role / provenance** — authored project, AI-assisted project, autonomous-agent-generated experiment, modified fork or research fork.

## AI-assisted development

Preferred wording:

> This project was developed with AI coding agents as part of the engineering workflow. AI was used for implementation, research, refactoring and testing; system definition, architecture, integration, hardware decisions, debugging, verification and deployment remain the project owner's responsibility.

For substantially autonomous-agent-generated projects, say so directly rather than implying hand-authorship.

## Forks and upstream work

For a pure research fork:

> Research fork of `<upstream>`. Upstream project and authorship are not mine. This repository is retained for experimentation, integration and source-level study.

For a modified fork:

> Integration fork of `<upstream>`. Upstream project and authorship remain with the original maintainers; MAZLABZ authorship is limited to the local adapters, bridges, configuration and documented modifications in this fork.

## Claims policy

Do not use **production ready**, **enterprise grade**, **secure**, **universal**, **fully autonomous**, **works with any device/vehicle**, or numerical performance claims unless the repository contains evidence supporting the exact claim.

Prefer bounded language:

- `targets OBD-II vehicles using standardized PIDs` instead of `works with any car`
- `bench validated on <hardware>` instead of `hardware agnostic`
- `prototype running on target hardware` instead of `production ready`
- `designed for local inference` instead of `no cloud dependencies` if optional network services remain

## Archive policy

Archive a repository when it is superseded, abandoned, an empty shell, or a one-off learning template that no longer adds useful public evidence. Archive rather than delete when historical context may still matter.

Do not archive:

- active deployment code;
- a predecessor that is directly referenced by a case study and still provides useful history;
- a fork with local modifications still used by an active system;
- a private repository merely because it is unfinished.

## Recommended public hierarchy

### Flagship
`sentient-core`, `drifter`, `Myceliyum`, `Hexplayer`, `akari-android`, and the public version of `bench` when ready.

### Lab
Useful authored experiments that show a specific capability.

### Research fork
Clearly attributed upstream code used for learning/integration.

### Archived
Superseded or dead work retained for history.

The goal is not to make the account look smaller. The goal is to make the signal immediately legible.
