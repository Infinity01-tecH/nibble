# Nibble

**Nibble helps people make their mobile data bundles last longer.**

Nibble is an Android-first, Nigeria-first mobile data coaching app for people who use prepaid or limited data bundles. It aims to help users understand their data usage, set a bundle budget, estimate a sensible daily pace, and take practical steps before their data runs out.

> **Project status:** Product direction agreed; implementation is minimal or not yet established. This documentation pack is a proposed source of truth to reconcile with the existing repository.

## Product direction

- **Agreed:** Data Coach — help users make their bundle last longer.
- **Agreed:** Nigeria first, with a focus on local prepaid data bundles.
- **Agreed:** Defer direct VPN blocking until the core product is validated.
- **Agreed:** The existing monorepo has little implementation, so inspect it before making structural changes.
- **Inherited from the original PRD, to confirm before release:** Android first; no account required for core value; free/ad-free model; usage data stays on the device.

## Documentation

- [Product definition](docs/product/PRODUCT.md)
- [Revised product requirements](docs/product/PRD.md)
- [Architecture proposal](docs/engineering/ARCHITECTURE.md)
- [Privacy and permissions](docs/engineering/PRIVACY.md)
- [Testing strategy](docs/engineering/TESTING.md)
- [Roadmap and validation](docs/product/ROADMAP.md)
- [Decision log](docs/decisions/DECISIONS.md)
- [Coding-agent prompt](docs/prompts/IMPLEMENTATION_AGENT_PROMPT.md)

## Important implementation principle

Do not start by implementing every feature in the original PRD. First inspect the repository, compare its actual state with these documents, identify any conflicts, and propose the smallest useful implementation plan. The core budget and pacing logic should be deterministic, testable, and usable offline.

## Documentation status labels

- **AGREED** — explicitly chosen in the product discussion.
- **INHERITED** — stated in the uploaded PRD, but should be reconfirmed if it affects implementation.
- **PROPOSED** — a recommendation introduced in this revision, not yet approved.
- **OPEN** — requires a decision, evidence, or a technical experiment.

Do not silently convert PROPOSED or OPEN items into requirements.
