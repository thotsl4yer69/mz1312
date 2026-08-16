# MAZLABZ Portfolio Release Checklist

Use this before treating a portfolio change as publishable.

## Build integrity

- [ ] `npm ci` succeeds from a clean checkout.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes with static export enabled.
- [ ] `out/index.html` exists.
- [ ] `out/_next/` exists.
- [ ] `/start/` is present in the static output.
- [ ] `/capabilities/` is present in the static output.
- [ ] `/ghost/` is present in the static output.
- [ ] All flagship case-study routes are present in the static output.
- [ ] No stale `/mz1312/_next/` asset paths are emitted for the custom-domain build.

## Conversion path

- [ ] Hero **Build Something With Me** link reaches `/start/`.
- [ ] Header **Start a Build** link reaches `/start/`.
- [ ] Services CTA reaches `/start/`.
- [ ] Case-study footers expose **Start a Build**.
- [ ] Generated brief contains problem, current state, target, uncertainty, desired output, budget signal and timeline.
- [ ] Email action opens a local mail client rather than submitting data to a hidden backend.

## Evidence integrity

- [ ] Real screenshots/assets are labelled as real repository evidence.
- [ ] Representative terminals, telemetry and diagrams are labelled as representative / not live.
- [ ] No maturity claim has been silently promoted beyond `PROJECT_STATUS.md` evidence.
- [ ] No private IPs, credentials, tokens, customer names or unsupported revenue/client claims are introduced.
- [ ] Private projects expose architecture/evidence only; private source is not implied to be public.

## Accessibility / resilience

- [ ] Flagship selector remains keyboard reachable.
- [ ] Interactive controls have visible focus states.
- [ ] Decorative animation respects `prefers-reduced-motion`.
- [ ] Custom 404 route builds and links back to the lab and project brief.
- [ ] Mobile layout remains usable at narrow viewport widths.
- [ ] Hidden-shell unlock does not trigger while typing into form controls.
- [ ] Hidden-shell unlock uses the correct base path on historical GitHub Pages hosting.

## Search / metadata

- [ ] Page title and description still match current positioning.
- [ ] `sitemap.xml` includes home, `/start/`, `/capabilities/` and flagship case studies.
- [ ] `/ghost/` is absent from `sitemap.xml`.
- [ ] `/ghost/` carries `noindex` / `nofollow` metadata.
- [ ] `robots.txt` references the sitemap.
- [ ] `NEXT_PUBLIC_SITE_URL` is set to `https://mazlabz.us.kg` for production.
- [ ] Structured data names Jack Mazzini / MAZLABZ without inventing employers, clients or credentials.

## Dependency / CI hygiene

- [ ] Permanent CI runs read-only with the minimum GitHub token permissions it needs.
- [ ] Temporary write-capable patch workflows are deleted after use.
- [ ] Dependency audit is reviewed separately from build success.
- [ ] Breaking dependency upgrades are tested deliberately rather than accepted through `npm audit fix --force`.

## Publishing

- [ ] GitHub Pages is enabled and serving the latest static artifact.
- [ ] GitHub Pages **Custom domain** is set to `mazlabz.us.kg`.
- [ ] DNS resolves the apex domain to GitHub Pages.
- [ ] HTTPS is enforced on the custom domain.
- [ ] Repository description no longer says `MZ-1312 Streaming`.
- [ ] Canonical URL is reflected in metadata and sitemap configuration.
- [ ] Desktop and mobile visual QA has been performed on the deployed site.
- [ ] Deep routes and the hidden shell have been checked on the deployed origin.
