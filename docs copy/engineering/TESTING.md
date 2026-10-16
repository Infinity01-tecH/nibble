# Testing Strategy

## 1. Domain unit tests

Prioritise tests for pure bundle calculations:
- allowance and remaining balance validation;
- daily target with valid cycle dates;
- zero remaining days;
- expired renewal date;
- zero remaining bytes;
- missing remaining balance;
- partial-day boundary behaviour;
- timezone and date-boundary rules;
- usage pace from valid intervals;
- insufficient history for forecasts;
- zero consumption pace;
- negative, non-finite, or implausibly large values;
- manual correction of the remaining balance;
- display-unit conversions and rounding.

Use fixed clocks or injected date/time inputs so tests are deterministic.

## 2. Adapter tests

Test normalisation of Android usage results, empty results, unavailable results, and errors. Mock the native adapter in domain and UI tests.

## 3. Permission and resilience tests

- Usage Access granted.
- Usage Access denied.
- User returns from Settings without granting permission.
- Statistics unsupported or unavailable.
- App is restarted.
- No internet connection.
- Local storage read/write failure, if the chosen storage layer can report it.
- App receives stale usage data.
- No bundle has been configured.

## 4. Device validation

Before relying on per-app usage statistics, test on a small selection of real Android devices representative of the intended Nigerian audience. Record model, Android version, permission path, whether mobile usage data is returned, and any known limitation. Do not generalise from a single device.

## 5. UX validation

Ask target users to:
1. configure a bundle;
2. explain the daily target in their own words;
3. identify whether the displayed remaining balance is entered or estimated;
4. interpret an ahead-of-pace warning;
5. recover when usage access is denied.

Record confusion, completion, and whether advice feels practical. Do not treat a successful build as proof of product-market fit.

## 6. Commands

Use the commands already defined in the repository. Do not invent or document lint, typecheck, or test commands until package manifests have been inspected. The implementation agent must report which commands were actually run and their results.
