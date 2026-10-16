# Agent instructions for Nibble

## Before making changes

1. Inspect the repository tree, package manifests, lockfile, existing docs, app entry points, test setup, environment examples, and git status.
2. Identify the actual package manager, workspace tooling, frameworks, Android setup, and any existing native modules. Do not assume the repository matches the illustrative architecture in the docs.
3. Read `README.md` and all relevant files under `docs/`.
4. Report the current state, gaps, conflicts, risks, and a small implementation plan before performing broad refactors.
5. Preserve working code and the existing design. Do not replace tooling or restructure the monorepo without a clear reason and an explicit plan.

## Product boundaries

- Nibble is a **data coach** for Nigeria-first prepaid mobile-data users.
- The core outcome is helping users understand and manage a bundle so it is more likely to last until renewal.
- Direct VPN-based blocking is **deferred** until the core product is validated. Do not implement a VPN service in the initial milestone.
- Do not add signup, cloud sync, AI APIs, payments, social features, or analytics infrastructure unless explicitly approved.
- The app's core budgeting and coaching must work offline.
- Never claim exact data savings or guaranteed bundle exhaustion dates. Label forecasts as estimates and explain the assumptions.
- Do not assume a carrier's bundle balance or renewal date can be read from Android. Allow users to enter or correct information when necessary.

## Engineering rules

- Follow the conventions already present in the repository where they are reasonable.
- Use TypeScript for JavaScript/TypeScript code and strict types where the current stack supports them. Avoid `any`; model unknown values explicitly.
- Keep business logic separate from UI and native Android integration.
- Put platform-specific usage access behind a small typed interface. Do not spread Android-specific calls throughout UI components.
- Make permission-denied, unavailable-statistics, unsupported-device, and offline states explicit. Never dead-end or crash because a permission is denied.
- Validate inputs and handle empty, zero, negative, stale, and inconsistent values.
- Use deterministic calculations for budgets and forecasts. No LLM is needed for arithmetic or core recommendations.
- Keep personal usage data on-device by default. Do not send app names/package names, per-app usage values, or usage snapshots to a server.
- Never log secrets, personal information, or per-app usage data.
- Add tests for domain calculations and important permission/error states.
- Avoid adding dependencies without explaining why they are needed.
- Do not create backend services merely because they appear in a proposed architecture.

## Workflow

1. Inspect.
2. Summarize findings and plan.
3. Implement one coherent milestone at a time.
4. Run the repository's existing lint, typecheck, and test commands where available.
5. Report files changed, decisions made, tests run, failures, and unresolved questions.
6. Update documentation and roadmap to reflect what was actually implemented.

Do not claim tests passed unless they were run and passed.
