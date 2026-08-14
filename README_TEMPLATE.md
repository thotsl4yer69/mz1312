# `<PROJECT NAME>`

**One sentence explaining what the project does in language a non-specialist can understand.**

[![Status](https://img.shields.io/badge/status-software%20prototype-blue)](PROJECT_STATUS.md)

> **Maturity: `<Concept | Software prototype | Bench validated | Hardware-integrated prototype | Deployed prototype | Production | Archived>`.** One sentence stating what has actually been demonstrated. See [PROJECT_STATUS.md](PROJECT_STATUS.md).

## What it is

Explain the problem and the product idea. Avoid opening with a list of frameworks.

## Why it exists

What was missing? What real user/system problem motivated it?

## Architecture

```text
input / physical world
        │
        ▼
   core system
    │       │
    ▼       ▼
 service   state
    │
    ▼
 output / user
```

Use a diagram that exposes integration boundaries, not decorative complexity.

## Demonstrated engineering work

- thing actually implemented/tested;
- thing actually integrated;
- hardware actually exercised;
- deployment path actually used;
- test/QA mechanism that exists.

## Evidence

Link the strongest proof:

- demo video;
- screenshots;
- hardware photographs;
- architecture diagram;
- test output;
- CI workflow;
- tagged build/release;
- deployment runbook.

## Known limitations

State what does **not** work or has not been validated yet. This increases credibility.

## Setup

Document the shortest reproducible path from a clean environment. Separate required prerequisites from optional integrations.

```bash
# exact commands
```

Do not put real secrets, local credentials or personal tokens in examples.

## Testing

```bash
# exact test commands
```

Explain what the tests prove and what they do not prove.

## Project status

Use `PROJECT_STATUS.md` as the source of truth for maturity and release gates.

Suggested structure:

```markdown
# Project Status — <name>

**Portfolio class:** Flagship / Lab / Historical / Research fork
**Maturity:** <controlled vocabulary>
**Reviewed:** YYYY-MM-DD

## Demonstrated
...

## Evidence boundary
...

## Known work remaining
...
```

## Development provenance

For an authored AI-assisted project:

> This is an authored MAZLABZ project developed with AI coding agents as part of the engineering workflow. AI is used for implementation, research, refactoring and testing; system definition, architecture, integration, debugging, verification and deployment remain the project owner's responsibility.

For a substantially autonomous-agent-generated experiment:

> This project was generated substantially by an autonomous coding agent under user direction. It is presented as evidence of specification, agent supervision, integration and evaluation rather than wholly hand-authored implementation.

For a research fork:

> Research fork of `<upstream>`. The upstream project and authorship are not mine. This repository is retained for experimentation, integration and source-level study.

For a modified fork:

> Integration fork of `<upstream>`. Upstream project and authorship remain with the original maintainers; MAZLABZ authorship is limited to the documented local adapters, bridges, configuration and modifications.

## Portfolio significance

End with the 4–8 capabilities this project actually proves, for example:

**Raspberry Pi · Linux · Python · MQTT · physical integration · deployment**

## License

State the license only if the repository actually contains/uses that license and upstream licensing obligations have been checked.

---

## Claims checklist before publishing

- [ ] No `production ready` claim without release evidence.
- [ ] No `universal` / `works with any` wording without a real compatibility matrix.
- [ ] No unsupported benchmark numbers.
- [ ] No upstream/framework authorship ambiguity.
- [ ] AI contribution stated at the appropriate level.
- [ ] No live API keys, tokens or credentials.
- [ ] No screenshots containing secrets/private account data.
- [ ] Exact hardware revision identified for wiring claims.
- [ ] External API/model names treated as versioned dependencies, not permanent guarantees.
- [ ] Known limitations are visible.
- [ ] Current screenshots/demo/test evidence exists.
