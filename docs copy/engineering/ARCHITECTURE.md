# Architecture Proposal

**Status:** Proposed; reconcile with the actual repository before implementation.

## 1. Principles

1. Local-first core: budgeting, pacing, and recommendations work offline.
2. Deterministic domain logic: calculations are pure functions with tests.
3. Platform isolation: Android usage access stays behind a typed adapter.
4. Graceful degradation: denied permission or missing statistics leads to a useful limited mode.
5. No premature backend: remote services are optional and justified by a specific feature.
6. Privacy by design: per-app usage information stays on the device.

## 2. Logical boundaries

### Presentation
Screens, forms, charts or summaries, permission explanations, and navigation. UI should not calculate budgets directly or call native modules ad hoc.

### Domain
Pure types and functions for:
- bundle configuration;
- daily target and pace calculations;
- forecast validity and confidence/limitations;
- recommendation rules;
- validation and formatting-independent calculations.

Domain logic should not depend on React Native, Kotlin, a database, or a network client.

### Data/local persistence
A repository interface for saving bundle configuration, user preferences, manual corrections, and optional local history. Select a storage implementation only after inspecting current dependencies and constraints.

### Android adapter
A narrow, typed interface for:
- checking usage-access status;
- querying available mobile-data statistics;
- normalising platform results;
- reporting unsupported or unavailable data.

Do not assume that Android provides the carrier's authoritative remaining bundle balance. Do not claim complete statistics where the OS cannot supply them.

### Optional remote services
Only add this layer when an approved feature requires remote content or feedback. The core application must remain useful when the network is unavailable.

## 3. Illustrative data types

Adapt naming and exact representation to the repository. Prefer integer bytes internally to avoid floating-point drift.

```ts
export interface BundlePlan {
  allowanceBytes: number;
  cycleStartAt: string;
  renewsAt: string;
  remainingBytesOverride?: number;
}

export interface AppUsageRecord {
  packageName: string;
  displayName: string;
  mobileBytes: number;
  periodStartAt: string;
  periodEndAt: string;
}

export type UsageAvailability =
  | { status: "available"; records: AppUsageRecord[] }
  | { status: "permission_required" }
  | { status: "unsupported"; reason: string }
  | { status: "unavailable"; reason: string };
```

Treat this as an example, not a requirement to copy blindly. Validate all numeric values and date ranges at system boundaries. Avoid persisting package names unless needed for on-device functionality; never upload them.

## 4. Suggested dependency direction

Presentation → domain interfaces/use cases → repository interfaces.

Platform-specific implementations and storage adapters implement those interfaces. Domain logic should not import screen components or native Android modules.

## 5. Error and empty states

Handle at least:
- usage permission not granted;
- statistics unavailable on the device;
- empty or stale statistics;
- no bundle configured;
- invalid allowance or dates;
- renewal date already passed;
- zero remaining data;
- no elapsed history for a forecast;
- manual remaining-balance correction;
- app process restart;
- offline state.

## 6. Forecasting guardrails

- Forecasts require a valid observation interval and non-zero usable history.
- Avoid extrapolating from a tiny or zero-length sample.
- Clearly state the observation period and assumptions.
- If the pace is zero, do not divide by zero or imply infinite certainty.
- If the remaining balance is unknown, present a pace/usage view without inventing it.
- Separate user-entered balance from a value estimated from historical usage.
- Recalculate when a user edits bundle information or corrects the remaining amount.

## 7. Backend decision

The original PRD describes Cloudflare Workers plus Supabase. This revised direction does not require either for the core MVP. Before adding them, document the exact remote feature, data fields, privacy implications, operational cost, and offline behaviour.

## 8. Repository layout

Do not enforce a folder structure until the repository has been inspected. A possible logical arrangement is:

- mobile app;
- domain logic and shared types if reuse justifies a package;
- Android-native integration;
- optional API;
- product and engineering docs.

Avoid creating workspace packages that only contain a handful of files without a real boundary.
