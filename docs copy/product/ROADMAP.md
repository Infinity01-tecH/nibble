# Roadmap and Validation Plan

**Status:** Proposed. Sequence is more reliable than calendar estimates at this stage.

## Phase 0 — Repository and technical discovery

- Inspect existing workspace, app, native setup, tests, and dependencies.
- Confirm the actual framework and development commands.
- Build a tiny technical spike to learn whether the target Android versions expose useful per-app mobile-data statistics with the intended permissions.
- Record device and OS limitations.
- Resolve the first open product questions.

**Exit condition:** A short report explains what exists, what is feasible, and what needs to change before the MVP.

## Phase 1 — Validate the problem and value proposition

- Speak with a small group of Nigerian prepaid-data users, including students.
- Learn how they buy bundles, track renewal dates, check balances, and react when data runs low.
- Test whether daily pace and bundle-aware advice are more useful than a simple ranked app list.
- Test a clickable or paper prototype before polishing the UI.

**Exit condition:** Evidence supports a clear first user, recurring problem, and understandable core workflow.

## Phase 2 — Core Data Coach

- Bundle setup and local persistence.
- Deterministic budget and daily pace calculations.
- Dashboard with clear distinction between entered, measured, and estimated values.
- Offline support and empty/error states.
- Automated domain tests.

**Exit condition:** Users can understand and use the budget features without needing app-level usage access.

## Phase 3 — Usage insights and practical guidance

- Integrate available Android usage statistics behind a typed adapter.
- Show app-level usage when data is available.
- Add plain-language, deterministic recommendations.
- Validate permission flows and behaviour on representative phones.

**Exit condition:** Usage information enriches the coaching experience without making the app fragile or misleading.

## Phase 4 — Pilot and iterate

- Test with target users across a bundle cycle where practical.
- Measure setup completion, comprehension, repeat use, recommendation usefulness, and reported problems.
- Revise assumptions and numerical targets from evidence.
- Update website promises and store materials to match the shipped features.

**Exit condition:** The team has a documented decision to continue, revise, or narrow the product.

## Deferred until validation

- Direct VPN blocking.
- Floating overlay helper.
- Accounts and cloud sync.
- Carrier plan database or integrations.
- AI assistant.
- iOS.

## Revisit criteria for VPN blocking

Only reconsider direct blocking if user research shows that settings guidance is insufficient, the feature has a clear user benefit over its cost, and a technical/store-policy proof of concept supports the intended behaviour. Do not treat VPN work as an automatic next milestone.
