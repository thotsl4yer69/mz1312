# MAZLABZ — Jack Mazzini / Applied Technology Portfolio

> **Status: Active portfolio site**  
> Canonical public presentation layer for Jack Mazzini / MAZLABZ technical work across edge AI, embedded Linux, native Android, connected hardware and AI-assisted systems integration.

The repository began as an MZ1312 / Pigeonhole storefront experiment. It has now been deliberately repurposed as the public portfolio rather than preserving an obsolete commerce concept as the main website.

## What the site is trying to prove

Not “I have lots of repositories.”

It should demonstrate that one independent builder can repeatedly take unconventional ideas across boundaries — hardware, software, AI models, APIs, sensors, operating systems and physical interfaces — and turn them into testable systems.

## Public routes

- `/` — primary portfolio, flagship selector, evidence ledger, Lab, method and services.
- `/capabilities/` — interactive capability/proof map connecting marketable skills to project evidence.
- `/start/` — local-only project brief builder and engagement route.
- `/work/sentient-core/` — edge-AI systems case study.
- `/work/drifter/` — Raspberry Pi / vehicle telemetry case study.
- `/work/myceliyum/` — offline-first Android field-app case study.
- `/work/benchforge/` — private AI/electronics tooling case study.
- `/work/hexplayer/` — NFC physical-interface case study.
- `/work/akari/` — privacy-first Android case study.

The `/start/` route does **not** post form data to a server. It builds a structured brief in the browser and only opens the visitor's local mail client when they explicitly choose to send it.

The `/capabilities/` route is deliberately evidence-first. It groups work into commercially legible capabilities — systems integration, edge AI, native Android, embedded/IoT, Linux infrastructure, automotive data, AI agents/tooling and technical product design — and links each capability back to projects that demonstrate it. Capability levels are descriptive working-range labels, not formal accreditation.

## Hidden legacy interface

`/ghost/` is an intentional hidden route preserving the original MZ1312 terminal aesthetic as an easter egg rather than a second public homepage. It is excluded from the sitemap and marked `noindex` / `nofollow`.

Unlocks include typing `MZ1312`, the Konami sequence, or tapping the brand lockup five times on a touch device. The shell contains real portfolio navigation commands such as `help`, `projects`, `open <project>`, `capabilities`, `start`, `github` and `exit`, plus an undocumented legacy `cortana` easter egg.

## Flagship case studies

The home page currently centres six builds:

1. **Sentient Core** — deployed Jetson edge-AI prototype.
2. **DRIFTER** — Raspberry Pi vehicle-intelligence / OBD-II / CAN prototype.
3. **Myceliyum** — offline-first native Android field-research app.
4. **BenchForge** — private electronics-inventory-to-project R&D system.
5. **HexPlayer** — NFC-driven physical music interface.
6. **Akari** — privacy-first local Android energy diary.

Secondary Lab material includes HomeHub, Mixdown, Eyepatch, the browser game, MAZ AI Orchestrator, MURMUR and Ghost Fusion.

## Demonstration policy

The website uses stylised interactive representations of systems to make the work understandable without exposing private deployments or pretending that a visitor is looking at live hardware.

Where telemetry, terminals, maps or device interfaces are illustrative, the UI explicitly labels them as **representative / not live data**. Real application captures and public repository assets are labelled as such.

BenchForge and HexPlayer include small browser interactions rather than static diagrams: BenchForge cycles representative component-constrained build concepts, and HexPlayer advances through the physical interaction state from NFC tile detection to playback handoff. These remain illustrative demos of the product logic, not live hardware sessions.

Public flagship entries in the Evidence Ledger link directly to their current `PROJECT_STATUS.md` where available.

Project maturity vocabulary follows [`REPOSITORY_POLICY.md`](REPOSITORY_POLICY.md) and the canonical account classification lives in [`PORTFOLIO_INDEX.md`](PORTFOLIO_INDEX.md).

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Static export for low-complexity hosting
- Custom responsive design system
- GitHub Actions lint/build verification
- Sitemap, robots metadata and schema.org structured profile data

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Verification:

```bash
npm run lint
npm run build
```

The build is configured as a static export and produces `out/`.

Permanent workflows:

- `.github/workflows/site-ci.yml` — read-only lint/build verification.
- `.github/workflows/deploy-pages.yml` — static bundle build, route/base-path/evidence assertions, artifact upload and GitHub Pages deployment.

Both permanent workflows use Node 22. Temporary write-capable patch workflows are not retained.

## Deployment

Production target:

```text
https://mazlabz.us.kg
```

GitHub Pages is the hosting layer. The build is configured for the custom-domain root while retaining automatic support for the historical GitHub Pages `/mz1312` base path when `NEXT_PUBLIC_SITE_URL` points at that Pages URL.

Set `NEXT_PUBLIC_SITE_URL` to the actual public origin when deploying elsewhere so canonical metadata, `robots.txt` and `sitemap.xml` remain correct.

## Content principles

- **Proof over buzzwords.** Show architecture, interfaces, tests, hardware and trade-offs.
- **Embellish presentation, not evidence.** Cinematic demo UI is fine; invented customers, revenue, field deployments or validation are not.
- **State maturity explicitly.** Concept, software prototype, bench validated, hardware-integrated prototype, deployed prototype, production or archived.
- **Credit upstream work.** Forks, templates and upstream research remain clearly distinguished from authored builds.
- **Disclose AI-native workflow.** Coding agents are implementation/research/testing tools; architecture, integration, hardware decisions and validation remain owner responsibilities.
- **No dead-end portfolio paths.** Flagships and service CTAs should lead either to deeper evidence or to `/start/`.
- **Make skills auditable.** Capabilities should point to projects that prove them rather than relying on a technology keyword cloud.

## Release gate

Use [`PORTFOLIO_RELEASE_CHECKLIST.md`](PORTFOLIO_RELEASE_CHECKLIST.md) before treating a change as publishable. It covers build integrity, conversion links, evidence boundaries, accessibility, metadata, CI permissions and deployment.

## Portfolio source-of-truth

- [`PORTFOLIO_INDEX.md`](PORTFOLIO_INDEX.md) — account/project map
- [`REPOSITORY_POLICY.md`](REPOSITORY_POLICY.md) — maturity/provenance/AI-assistance rules
- [`PORTFOLIO_RELEASE_CHECKLIST.md`](PORTFOLIO_RELEASE_CHECKLIST.md) — website release gate
- [`GITHUB_CLEANUP_2026-08-13.md`](GITHUB_CLEANUP_2026-08-13.md) — repository cleanup audit
- [`GITHUB_PROFILE_README.md`](GITHUB_PROFILE_README.md) — aligned GitHub profile copy

---

**Positioning:** AI-native systems integrator & technical prototyper · Edge AI · Embedded Linux · Android · Connected Hardware · Automation
