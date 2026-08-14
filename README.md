# MAZLABZ — Jack Mazzini / Applied Technology Portfolio

> **Status: Active portfolio site**  
> Canonical public presentation layer for Jack Mazzini / MAZLABZ technical work across edge AI, embedded Linux, native Android, connected hardware and AI-assisted systems integration.

The repository began as an MZ1312 / Pigeonhole storefront experiment. It has now been deliberately repurposed as the public portfolio rather than preserving an obsolete commerce concept as the main website.

## What the site is trying to prove

Not “I have lots of repositories.”

It should demonstrate that one independent builder can repeatedly take unconventional ideas across boundaries — hardware, software, AI models, APIs, sensors, operating systems and physical interfaces — and turn them into testable systems.

## Flagship case studies

The home page currently centres six builds:

1. **Sentient Core** — deployed Jetson edge-AI prototype.
2. **DRIFTER** — Raspberry Pi vehicle-intelligence / OBD-II / CAN prototype.
3. **Myceliyum** — offline-first native Android field-research app.
4. **BenchForge** — private electronics-inventory-to-project R&D system.
5. **HexPlayer** — NFC-driven physical music interface.
6. **Akari** — privacy-first local Android energy diary.

Secondary Lab material includes HomeHub, Mixdown, Eyepatch, the browser game, MAZ AI Orchestrator and Ghost Fusion.

## Demonstration policy

The website uses stylised interactive representations of systems to make the work understandable without exposing private deployments or pretending that a visitor is looking at live hardware.

Where telemetry, terminals, maps or device interfaces are illustrative, the UI explicitly labels them as **representative / not live data**.

Project maturity vocabulary follows [`REPOSITORY_POLICY.md`](REPOSITORY_POLICY.md) and the canonical account classification lives in [`PORTFOLIO_INDEX.md`](PORTFOLIO_INDEX.md).

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Custom responsive design system
- GitHub Actions lint/build verification

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

The repository includes `.github/workflows/site-ci.yml` so the same checks run on GitHub for every push and pull request.

## Content principles

- **Proof over buzzwords.** Show architecture, interfaces, tests, hardware and trade-offs.
- **Embellish presentation, not evidence.** Cinematic demo UI is fine; invented customers, revenue, field deployments or validation are not.
- **State maturity explicitly.** Concept, software prototype, bench validated, hardware-integrated prototype, deployed prototype, production or archived.
- **Credit upstream work.** Forks, templates and upstream research remain clearly distinguished from authored builds.
- **Disclose AI-native workflow.** Coding agents are implementation/research/testing tools; architecture, integration, hardware decisions and validation remain owner responsibilities.

## Portfolio source-of-truth

- [`PORTFOLIO_INDEX.md`](PORTFOLIO_INDEX.md) — account/project map
- [`REPOSITORY_POLICY.md`](REPOSITORY_POLICY.md) — maturity/provenance/AI-assistance rules
- [`GITHUB_CLEANUP_2026-08-13.md`](GITHUB_CLEANUP_2026-08-13.md) — repository cleanup audit
- [`GITHUB_PROFILE_README.md`](GITHUB_PROFILE_README.md) — aligned GitHub profile copy

---

**Positioning:** AI-native systems integrator & technical prototyper · Edge AI · Embedded Linux · Android · Connected Hardware · Automation
