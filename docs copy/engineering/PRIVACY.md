# Privacy, Permissions, and Data Handling

**Status:** Proposed implementation rules plus inherited commitments from the original PRD.

## 1. Data minimisation

Core coaching should work without an account. Store bundle setup, user preferences, manual corrections, and any required history on-device by default.

Per-app usage data and package names must not be sent to a server. The original PRD explicitly commits to not uploading or selling usage data; preserve that commitment unless the product owner formally changes it and revises all disclosures.

## 2. Permission principles

- Explain Usage Access before directing the user to Android settings.
- Ask for permission only when a feature needs it.
- Explain what remains available when permission is declined.
- Do not require overlay permission for the core dashboard.
- Direct VPN blocking is deferred; do not request VPN consent in the first validation build.
- Do not use Accessibility Service as a shortcut for unrelated functionality.

## 3. Data categories

| Data | Proposed handling |
|---|---|
| Bundle allowance and renewal date | Local device storage |
| Manually entered remaining balance | Local device storage |
| Per-app usage records | On-device only |
| App package names | On-device only when necessary for functionality |
| User preferences and essential-app choices | Local device storage |
| Feedback message | Do not implement remote submission until approved and disclosed |
| Analytics events | Not enabled by default in the initial validation build; require a separate decision |

## 4. Logging and diagnostics

Do not log per-app usage amounts, package names, bundle details, personal information, or secrets. Crash reports must not include sensitive usage data. If diagnostics are added, inspect the actual fields sent before release.

## 5. Privacy documentation and release

Before public release:
- document all stored and transmitted data;
- provide a privacy policy matching actual behaviour;
- ensure store disclosures match the app and any SDKs;
- verify permission prompts and in-app explanations;
- test that offline use and local calculations work;
- provide a way to clear locally stored settings/history if history is retained.

This document is an engineering policy, not a substitute for a legal review or store-policy verification.
