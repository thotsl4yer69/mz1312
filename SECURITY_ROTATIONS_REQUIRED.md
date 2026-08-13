# Security Rotations Required — 2026-08-13

This file lists provider/device-side actions that **cannot be completed by editing Git**. The affected values have been removed from current repository trees where found, but any secret that existed in Git history must still be considered compromised until revoked or rotated at its issuing system.

**Do not copy historical secret values out of Git to perform these rotations. Generate new identities/credentials at the provider instead.**

## Priority 1 — rotate now

### Myceliyum — Google API key

- [ ] Revoke/rotate the Google API key that previously existed in `Myceliyum/app/build.gradle.kts`.
- [ ] Create a replacement only if the optional Google integration is still required.
- [ ] Restrict the replacement to the minimum required API(s), Android package/signing identity where supported, quota and billing limits.
- [ ] Store the replacement in local/CI configuration, not source.

### Myceliyum — Android signing identity

A base64-encoded debug signing keystore was publicly committed.

- [ ] Do **not** reuse that private key as a trusted distribution identity.
- [ ] Generate a new private stable development key if rolling development APK updates are still wanted.
- [ ] Configure GitHub Actions secret `DEBUG_KEYSTORE_BASE64` with the new key.
- [ ] Configure `DEBUG_KEYSTORE_PASSWORD`, `DEBUG_KEY_ALIAS` and `DEBUG_KEY_PASSWORD` if the new key does not use standard development values.
- [ ] For proper release builds, create/retain a separate release key and configure:
  - `RELEASE_KEYSTORE_BASE64`
  - `RELEASE_STORE_PASSWORD`
  - `RELEASE_KEY_PASSWORD`
  - `RELEASE_KEY_ALIAS`
- [ ] Back up the release identity securely outside GitHub.

Installed APKs signed by the compromised old debug identity may need uninstall/reinstall before installing a build signed by a new identity unless a valid signed migration path exists.

### Sentient Core — MQTT credential

A reusable MQTT password existed in public source/documentation and has been removed from the current tree.

On every broker/node that used the historical credential:

- [ ] Create a new high-entropy MQTT credential.
- [ ] Prefer per-service/per-role credentials and topic ACLs where practical.
- [ ] Provision the new value privately as runtime `MQTT_PASS` configuration.
- [ ] Restart clients in a controlled order and verify publish/subscribe operation.
- [ ] Revoke/remove the historical broker credential.
- [ ] Review broker logs for unexpected use where available.

### Private sentient_core predecessor — OpenAI credential

- [ ] Revoke/rotate the OpenAI API credential that was committed in `companionscape/config.json`.
- [ ] Supply any replacement only through `OPENAI_API_KEY` runtime configuration.
- [ ] Review provider usage/billing logs for unexpected activity.

### Private sentient_core predecessor — ElevenLabs credential

- [ ] Revoke/rotate the ElevenLabs API credential that was committed in `companionscape/config.json`.
- [ ] Supply any replacement only through `ELEVENLABS_API_KEY` runtime configuration.
- [ ] Review provider usage/billing logs for unexpected activity.

## Priority 1 — Mixdown public workflow credential bundle

The historical public `.github/workflows/android-build.yml` embedded a set of live-looking provider credentials. The current workflow has been rewritten and no longer contains those values.

Review the issuing provider dashboards and revoke/rotate every non-public credential from that historical block, including at minimum:

- [ ] Supabase privileged/secret key.
- [ ] APITube credential.
- [ ] SearchCans credential.
- [ ] SociaVault credential.
- [ ] Apify credential.
- [ ] Opus API credential.
- [ ] Zernio credential.
- [ ] TikTok client secret.
- [ ] TikHub credential.
- [ ] NewsAPI credential.
- [ ] Any additional provider key from the same old workflow that authorizes requests, spends quota or exposes private account capability.

Values explicitly designed to be public clients — such as a Supabase publishable/anon key, Supabase project URL, JWKS URL, provider client ID or a provider-labelled public key — should be assessed according to provider semantics rather than automatically treated as secret.

### Mixdown architecture after cleanup

The Android workflow now receives only client-safe configuration used by `app.config.js`:

- Supabase URL;
- Supabase anon/publishable key;
- optional EAS project ID.

Third-party ingestion/provider credentials belong in Supabase Edge Function secrets or another server-side secret store and must not be compiled into the APK.

## Priority 2 — rotate if the historical Cortana bootstrap was ever deployed

The private `cortana` predecessor contained predictable development credentials in old bootstrap/deployment scripts.

If any real node was installed using those values, rotate:

- [ ] PostgreSQL user password.
- [ ] MQTT user/password.
- [ ] application/JWT secret.
- [ ] default security PINs / panic codes.
- [ ] any Home Assistant token or other real integration secret substituted into tracked files.

The current `.env.example` no longer supplies working secret defaults and `SECURITY.md` marks old bootstrap credentials as unsafe historical configuration.

## History and artifact cleanup

Credential rotation is the security action. History cleanup is secondary hygiene.

After provider rotations are complete:

- [ ] enable/review GitHub secret scanning where available;
- [ ] consider a history-aware scan of every owned repository and release artifact;
- [ ] remove sensitive release/workflow artifacts where feasible;
- [ ] consider `git filter-repo`/equivalent history rewriting for known credential files/values if you want to reduce accidental rediscovery;
- [ ] remember that rewriting Git history does not invalidate a credential that was already exposed.

## Verification rule

A credential is considered remediated only when:

1. the old value no longer works at the provider/service;
2. current source does not contain it;
3. any replacement is stored according to the correct client/server trust boundary;
4. the affected application/service has been tested with the replacement configuration.
