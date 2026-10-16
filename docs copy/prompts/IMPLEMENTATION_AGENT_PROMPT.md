# Coding-Agent Prompt: Inspect and Prepare the Nibble Monorepo

You are working in the existing Nibble monorepo. The product owner has agreed on this direction:

- Nibble is a **Data Coach** that helps users make their mobile-data bundles last longer.
- The initial market is **Nigeria**, focused on local prepaid bundles.
- **Direct VPN-based blocking is deferred** until the core product is validated.
- The monorepo has been created but has little implementation.
- The uploaded original PRD is the baseline source. The revised documents distinguish agreed decisions, inherited requirements, proposals, and open questions.

Read `AGENTS.md`, `README.md`, and all relevant files under `docs/` before making changes.

## Critical instructions

1. **Inspect before implementing.** Start by reviewing the complete repository tree, git status, manifests, lockfiles, workspace configuration, app entry points, native Android setup, tests, existing documentation, and environment examples.
2. Do not assume a framework, package manager, monorepo tool, or directory structure from the docs. Report what is actually present.
3. Do not overwrite working configuration or perform broad refactors without a clear reason.
4. Do not implement direct VPN blocking, an overlay helper, accounts, cloud sync, AI services, payments, or a backend in this milestone.
5. Do not claim that Android can supply an authoritative carrier bundle balance. Treat bundle allowance/renewal information as user-provided unless a verified supported source exists.
6. Keep calculations deterministic, testable, and independent of UI, native modules, and network services.
7. Keep per-app usage data and package names on-device. Never send them to a remote service or include them in logs.
8. Clearly label proposed changes and unresolved questions. Do not silently turn a proposal into an agreed requirement.
9. Avoid adding dependencies unless necessary and justified.
10. Do not claim commands or tests passed unless you actually ran them.

## Stage A — Repository audit only

Do not modify application code yet.

- Summarise the repository's actual structure and stack.
- Identify which parts of the documentation pack already match the repo and which do not.
- Identify the smallest changes needed to make the repo ready for a first milestone.
- Identify the technical questions around Android per-app mobile-data statistics, permissions, storage, and supported devices.
- Identify missing decisions that block implementation.
- Recommend a concrete first milestone, with files likely to change and tests required.

If the repo contains existing implementation or project-specific rules, treat those as evidence and reconcile them with the proposed docs rather than replacing them blindly.

## Stage B — Documentation reconciliation

After the audit, update or add documentation only if needed.

- Preserve existing useful docs and conventions.
- Ensure `README.md`, `AGENTS.md`, product docs, architecture, privacy, testing, roadmap, and decision log agree.
- If a root document already serves the same purpose, update it instead of creating a duplicate.
- Do not invent commands, environment variables, API endpoints, package names, or release requirements.
- Record meaningful architecture choices and open questions.
- Keep a clear status label: AGREED, INHERITED, PROPOSED, or OPEN.

## Stage C — First implementation milestone (only after Stage A findings are reported)

Implement only the smallest approved vertical slice that fits the actual repository. Unless the repository audit reveals a compelling reason otherwise, prioritise pure bundle-domain logic before native usage integration:

- validated bundle configuration;
- deterministic daily target and pace calculations;
- forecast behaviour for insufficient history and zero values;
- tests for normal and edge cases;
- a minimal way to exercise the logic within the existing app, if that fits its architecture.

Do not build the full UI or native usage module merely to appear complete. If a key product or architecture decision is unresolved, stop and ask rather than guessing.

## Expected final report

Provide:
1. Actual repo stack and structure discovered.
2. Existing files reused and files created/changed.
3. Decisions made versus questions left open.
4. Implementation details.
5. Exact commands run and their results.
6. Tests added and their results.
7. Known limitations and recommended next milestone.

Begin with Stage A. Do not jump directly to implementation.
