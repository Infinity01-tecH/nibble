# Nibble — Revised Product Requirements Document

**Status:** Draft for team review  
**Source baseline:** `Nibble – Product Requirements Document`, draft v0.1, October 2026  
**Revision:** Data Coach; Nigeria-first; VPN blocking deferred

## Requirement status

- **AGREED** — explicitly chosen for this revision.
- **INHERITED** — appears in the original PRD but needs confirmation if not explicitly reaffirmed.
- **PROPOSED** — added or changed in this revision; requires team approval.
- **OPEN** — needs research, technical validation, or a decision.

## 1. Overview

**AGREED:** Nibble's direction is a Data Coach that helps users make their mobile-data bundle last longer, initially for Nigerian prepaid-data users.

**PROPOSED:** The core experience combines user-entered bundle details with locally available usage statistics to show a usage summary, a daily target, and simple guidance when usage is ahead of pace.

## 2. Problem

Users on limited data bundles can run out before renewal and may not understand their consumption pace or which changes could help. A list of high-usage apps is useful, but it does not alone connect usage to the user's bundle allowance and renewal date.

## 3. Audience

- **AGREED:** Nigeria first, focused on local prepaid bundles.
- **INHERITED:** Students are the primary initial audience; other people on tight data budgets are secondary.
- **OPEN:** Validate the audience with interviews and usability tests before narrowing the product to a single demographic.

## 4. Goals and proposed success measures

The original PRD proposes a top-10 list within 30 seconds, 60% of users restricting an app in their first session, 20%+ average monthly savings, and 40% day-30 retention. These were not backed by evidence in the original document and should not automatically remain the product's primary targets.

**PROPOSED initial validation metrics:**
- A new user can complete bundle setup and understand their daily pace without assistance.
- Users can correctly explain their remaining data and the forecast's assumptions.
- Users return during the bundle cycle to check progress.
- Users report taking a practical action based on a recommendation.
- Core screens and calculations remain useful offline.

**OPEN:** Set numerical thresholds after baseline testing. Do not promise a specific savings percentage before measurement.

## 5. Core user stories

1. As a user, I can enter my bundle allowance and renewal date so Nibble can calculate a target pace.
2. As a user, I can enter or correct my current remaining data if Android cannot provide the carrier's exact bundle balance.
3. As a user, I can view available mobile-data usage statistics by app when the required Android access is granted.
4. As a user, I can see how much data I have used against my target pace.
5. As a user, I can understand that a run-out forecast is an estimate, not a guarantee.
6. As a user, I can receive plain-language suggestions for reducing avoidable consumption.
7. As a user, I can mark apps or activities as essential and avoid recommendations that would interfere with them.
8. As a user, I can use the core budget and coaching features without creating an account or having an internet connection.
9. As a user, I can continue to use the app if usage access is denied, with a clear explanation and a manual-input or limited-mode path where feasible.

## 6. Proposed MVP scope

### Must-have candidates
- Bundle setup: allowance, start/renewal date, and current remaining amount if known.
- A clear dashboard showing remaining bundle amount, elapsed/remaining time, and daily target.
- Deterministic calculations for daily pace and estimated run-out timing.
- A usage view using Android's available per-app mobile-data statistics, subject to a technical spike.
- Plain-language coaching based on usage pace and available data.
- Local persistence and offline operation.
- Permission education and graceful handling of denied or unavailable access.
- Accessible, readable UI suitable for budget Android phones.

### Deferred
- **AGREED:** Direct VPN-based blocking is deferred until the core product is validated.
- Floating overlay helper.
- Scheduled blocking.
- Cloud sync and accounts.
- iOS.
- Social or gamified features.
- AI assistant and paid inference.
- Network/carrier integrations.

### Open feature question
- **OPEN:** Whether to retain the original PRD's top-10 ranked list in the first release or place it after the bundle dashboard. Recommendation: the bundle dashboard is the primary screen; app-level usage is supporting detail.

## 7. Bundle calculations

**PROPOSED baseline definitions:**
- `allowanceBytes`: user-entered total bundle allowance, converted to a consistent internal unit.
- `remainingBytes`: user-entered or locally estimated remaining allowance. Never label a calculated estimate as carrier-confirmed.
- `daysRemaining`: time until the configured renewal date, using a documented timezone and date-boundary rule.
- `dailyTargetBytes`: remaining bytes divided by remaining days, with explicit handling for zero or invalid days.
- `usagePace`: measured usage over a defined elapsed period divided by elapsed time.
- `projectedExhaustion`: a projection based on observed consumption pace; unavailable when there is insufficient or invalid history.

The implementation must choose and document how partial days, time zones, bundle rollover, missing history, manual corrections, and usage-statistics resets are handled. Do not mix GB and GiB silently; choose a display convention and label it consistently.

## 8. Recommendations

**PROPOSED:** Begin with deterministic rules, for example:
- If observed consumption is ahead of the target pace, explain the difference and suggest reviewing high-usage apps.
- If background-data information is available, explain which apps have background activity and link to supported Android settings.
- Suggest using Wi-Fi for large downloads when appropriate.
- Allow users to dismiss advice or mark an app/activity as essential.

Do not state that an app is wasting data merely because it is high-usage. Do not claim Nibble has saved a specific amount unless the measurement method supports it.

## 9. Platform and technical requirements

- **INHERITED:** Android-first native mobile experience using React Native and TypeScript, with small Kotlin modules where platform APIs require them. Confirm against the existing repository before implementation.
- **INHERITED:** Android usage statistics require user-granted Usage Access and may vary by device and OS.
- **AGREED:** Direct VPN blocking is not part of the initial implementation milestone.
- **PROPOSED:** Isolate Android usage APIs behind a typed interface and provide a mock/manual path for tests and unsupported states.
- **PROPOSED:** Core budget logic must be independent of UI, Android APIs, and network services.
- **OPEN:** Confirm minimum supported Android version and actual per-app mobile-data reporting behaviour on target devices.

## 10. Privacy

- **INHERITED:** The original PRD says usage data must not be uploaded or sold.
- **PROPOSED:** Store bundle settings and any usage history locally by default.
- Do not send app names/package names, per-app usage numbers, or usage snapshots to a remote API.
- Explain each permission at the moment it becomes relevant.
- If analytics are introduced, obtain team approval, minimise collection, provide a control to disable it, and ensure privacy disclosures match the implementation.
- Keep secrets out of source control and client bundles.

## 11. Backend

**PROPOSED:** Do not make a backend a dependency of the core MVP. Add an API only if an approved feature requires centrally maintained guidance, feedback submission, or another clearly defined remote capability.

The original PRD suggests Cloudflare Workers in front of Supabase. This is not automatically required for the revised MVP. Do not implement accounts, Supabase, or a Worker merely to match the old architecture proposal.

## 12. UX requirements

- Show the user's bundle situation and next useful action clearly.
- Use plain language and avoid technical jargon.
- Do not require signup before the core value is visible.
- Explain estimates and their assumptions.
- Show a helpful empty state if usage statistics are unavailable.
- Provide a manual or limited mode if platform permissions prevent a full view.
- Avoid heavy animations and excessive network use.

## 13. Definition of done for the first validation build

- A user can set a bundle allowance and renewal date.
- Nibble calculates and explains a daily target correctly for valid and edge-case inputs.
- The dashboard distinguishes entered values, measured usage, and estimates.
- The core experience works offline.
- Usage access denial or unsupported statistics do not crash or dead-end the app.
- Domain calculations have automated tests.
- No direct VPN service is implemented in this milestone.
- Documentation accurately reflects the actual code and commands.
- The team has run a small user test and recorded the findings before expanding scope.

## 14. Open questions

1. Does the current repository already use React Native, Expo, bare React Native, or another setup?
2. Which Android versions and phone brands are the initial test targets?
3. Can the required per-app mobile-data statistics be obtained reliably on those targets?
4. How will users obtain their exact remaining bundle amount and renewal date? Manual entry is the safe initial assumption.
5. Should the primary dashboard start with manual bundle data and then enrich it with usage statistics, or require Usage Access first?
6. What is the preferred data-unit display convention?
7. Which user interviews or pilot cohort will validate the product?
8. Is the free/ad-free model from the original PRD confirmed?
9. What, if any, anonymous analytics are approved?
10. Which website promises must be revised to match the new MVP?
