# GitHub Settings Cleanup Manifest

**Generated:** 2026-08-13  
**Purpose:** account-level cleanup tasks that require GitHub repository/profile settings rather than normal file commits.

The repository content has been classified and cleaned separately. This list is intentionally limited to controls that cannot be changed through the current connected GitHub file/PR interface.

## 1. Archive obvious dead/superseded repositories

Archive rather than delete so history and URLs remain intact.

### Strong archive recommendations

- `chill` — abandoned one-off experiment.
- `Ghostprotocol` — empty/superseded public shell.
- `mazlabz-frontend` — empty superseded split-repo shell.
- `mazlabz-backend` — tiny superseded split-repo experiment.
- `mazlabz-penetration-live` — empty abandoned shell.
- `MAZLABZHOMEHUB` — empty duplicate/superseded by `mazlabz-homehub`.
- `Openaivwrs-` — empty abandoned shell.
- `qFlipper` — empty shell; separate private source-modification work exists.
- `awal-windows-fix` — one-off historical fix.
- `MotivateAI` — private abandoned shell.
- `CLOUDG` — private abandoned shell.

### Already correct

- `mycelium-mapper` — already archived; retain as predecessor to `Myceliyum`.

### Optional archive candidates

Archive these only if you no longer want learning history visible:

- `Starter-Kit-Basic-Scene`
- `Starter-Kit-FPS`
- `Starter-Kit-3D-Platformer`
- `Starter-Kit-City-Builder`
- `multiplayer-globe-template`

They now contain explicit learning/template provenance, so keeping them public is no longer misleading.

## 2. Normalize the odd Sentient predecessor default branch

`sentient-core-v4` currently has an old agent-generated update branch as the repository default:

```text
claude/update-installation-guides-011CUotZmDGZKrwZB5srmQeY
```

Recommended action:

1. confirm the intended historical branch (`main` if complete);
2. set the correct branch as default;
3. archive the repository if it is purely predecessor history;
4. do not delete the old branch until its unique commits are checked.

The canonical public Sentient project is `sentient-core`.

## 3. Pin the portfolio signal, not the repository chronology

Recommended six public pins **now**:

1. `sentient-core`
2. `drifter`
3. `Myceliyum`
4. `Hexplayer`
5. `akari-android`
6. `mazlabz-homehub` or `thegame`, depending on target audience

When `bench` is scrubbed, documented and made public, it should replace the sixth slot and become a flagship pin.

## 4. Create the GitHub profile repository

Create a **public** repository named exactly:

```text
thotsl4yer69
```

GitHub will render `thotsl4yer69/README.md` on the profile page.

Recommended profile headline:

> **Jack Mazzini — AI-Native Systems Integrator & Technical Prototyper**

Recommended subhead:

> I build unusual products at the intersection of AI, software and physical hardware — local AI systems, edge-compute nodes, native Android apps, connected devices and automation.

Profile sections should be short:

- Current focus
- Flagship builds
- Technical range
- AI-assisted development disclosure
- Portfolio/contact link

Do not display dozens of badges or an auto-generated language leaderboard; the account's value is system integration, not repository gamification.

## 5. Repository descriptions

Use descriptions to make the account scannable from the repository list. Suggested copy:

### Flagships

- **sentient-core** — `Local-first edge AI system for NVIDIA Jetson: local inference, voice, memory, MQTT/Redis services and PWA tooling.`
- **drifter** — `Raspberry Pi vehicle intelligence prototype: OBD-II/CAN telemetry, diagnostics, MQTT, logging and driver interfaces.`
- **Myceliyum** — `Offline-first Kotlin/Compose mycology field-research app with maps, local data, iNaturalist and environmental context.`
- **Hexplayer** — `Physical NFC-to-music bench prototype for Raspberry Pi: tap a tile to trigger mapped playback.`
- **akari-android** — `Private local-first Android energy diary built with Kotlin/Compose, Room, CI and accessibility-minded QA.`
- **bench** — `AI-native electronics bench: component inventory to buildable project, pin/power/netlist planning and firmware guidance.`

### Strong lab

- **mazlabz-homehub** — `Containerised home-lab integration: Home Assistant, MQTT, reverse proxy, networking and local services.`
- **maz-ai-orchestrator** — `Early multi-provider AI orchestration prototype with routing, agents, tools, streaming and memory.`
- **thegame** — `Phaser/TypeScript browser-game project with combat, UI, PWA packaging and automated browser QA.`
- **mixdown** — `Mobile product/ranking prototype spanning React Native, native Android integration and Supabase-backed data.`
- **survival-companion** — `Offline edge-compute field-companion prototype with explicit separation between real and hardware-pending sensor data.`

### Historical/superseded

Prefix descriptions with `Historical:` or `Superseded:` where useful so repository-list visitors understand the hierarchy before opening them.

### Forks

Where GitHub permits an editable description, prefix with:

`Research fork — upstream project not authored by me; retained for integration/source study.`

For `intercept`, `RuView`, `Reworkedfreenove` and similar modified forks, use:

`Integration fork — upstream project + documented local bridge/adaptor modifications.`

## 6. Topics

Apply a small, consistent topic set. Do not keyword-stuff.

### sentient-core
`edge-ai`, `jetson`, `local-ai`, `python`, `mqtt`, `redis`, `fastapi`, `voice-assistant`, `linux`

### drifter
`raspberry-pi`, `obd2`, `can-bus`, `vehicle-telemetry`, `mqtt`, `python`, `edge-computing`

### Myceliyum
`android`, `kotlin`, `jetpack-compose`, `offline-first`, `room`, `openstreetmap`, `field-research`

### Hexplayer
`raspberry-pi`, `nfc`, `spotify`, `python`, `physical-computing`, `iot`

### akari-android
`android`, `kotlin`, `jetpack-compose`, `privacy`, `offline-first`, `accessibility`, `room`

### bench
`electronics`, `hardware`, `ai`, `embedded`, `prototyping`, `schematics`, `firmware`

## 7. Visibility decisions

Do **not** mass-publish private repositories merely to make the portfolio look bigger.

Keep private until deliberately scrubbed:

- deployment/state repositories;
- projects likely to contain hostnames, network information or local paths;
- source-modification work with unclear redistribution/provenance implications;
- unfinished product repositories with claims not yet reconciled to evidence;
- repositories containing customer/personal/private information.

`bench` is the strongest candidate for deliberate public release after its documented release gate is met.

## 8. Profile/account identity

Current GitHub login is intentionally distinctive, but a technical portfolio should make the real professional identity immediately visible in the profile display name and bio.

Recommended display name:

```text
Jack Mazzini
```

Recommended bio:

```text
AI-native systems integrator & technical prototyper · Edge AI · Embedded Linux · Android · Connected hardware · Automation
```

Keep `thotsl4yer69` as the account handle if desired; the profile name/bio can carry the professional context.

## 9. Homepage / portfolio URL

Once the portfolio site is deployed, set the GitHub profile website field to the primary portfolio URL. Do not point the profile at an obsolete MAZLABZ storefront.

## 10. Final verification after settings changes

Open GitHub logged out/incognito and check the account as a stranger would:

- real identity/role visible immediately;
- six pins tell a coherent technical story;
- no empty shell occupies the first page of active repos;
- forks visibly look like research forks;
- current flagships have screenshots/demo evidence;
- no stale `production ready` claims remain on prominent projects;
- no secrets, local IPs, real tokens or private operational details appear in public documentation;
- predecessor repositories point toward their canonical successors.

The target impression should be: **one person has run a serious independent applied-technology lab and can integrate hardware, software and AI into demonstrable systems.**
