# Product Definition

**Status:** Revised direction — core direction agreed; supporting details are a mix of inherited and proposed requirements.

## 1. Product in one sentence

Nibble helps Nigerian prepaid-data users make their mobile data bundles last longer by turning usage information and bundle limits into understandable daily guidance.

## 2. Problem

People using limited mobile-data bundles can run out before their expected renewal date. They may not know which apps use the most data, how quickly they are consuming their allowance, or what daily pace would keep them within budget.

The original PRD focuses on identifying data-heavy apps and restricting them. This revision keeps usage awareness but makes the outcome broader: help users plan, understand, and adjust their consumption.

## 3. Target users

### Initial audience
- Nigerian students and other people using prepaid or limited mobile-data bundles.
- People who need a bundle to last for a known period and want practical guidance without technical knowledge.

### Potential later audiences
- Freelancers, remote workers, households, and other cost-conscious mobile-data users.

These secondary audiences are hypotheses, not launch commitments.

## 4. User need

A user should be able to answer:
1. How much data do I have available for this bundle?
2. How much have I used, and how much time remains before renewal?
3. What daily usage pace would help me stay within the bundle?
4. Am I consuming data faster than that pace?
5. What practical changes can I make without disrupting essential apps?

## 5. Product principles

- **Useful before setup becomes a chore:** collect only the information needed to deliver the first useful result.
- **Local-first:** core calculations and core experience work offline.
- **Honest estimates:** distinguish Android-reported usage from user-entered bundle balance and carrier billing.
- **Practical, not judgmental:** recommend changes and explain trade-offs rather than shaming users.
- **User control:** users choose which apps are essential and whether to follow a recommendation.
- **Low-end Android awareness:** keep the app responsive, modest in storage and battery use, and resilient to permission limitations.
- **No unnecessary AI:** budgets and forecasts are deterministic calculations.

## 6. Differentiation

The initial differentiation is not simply “show which apps use the most data.” Existing Android settings and third-party utilities can already provide some usage visibility or blocking.

Nibble's proposed differentiator is **bundle-aware coaching**:
- connect usage to a user-defined allowance and renewal date;
- show a practical daily pace;
- flag when current usage is ahead of that pace;
- suggest understandable next steps;
- help users protect essential connectivity.

This differentiation is a hypothesis to validate with real users, not a proven competitive advantage.

## 7. Non-goals for the first validated version

- Direct VPN-based app blocking.
- iOS support.
- Cloud synchronisation of usage history.
- Account creation as a prerequisite for core value.
- AI chat or paid AI services.
- Social feeds, leaderboards, or gamification systems.
- Carrier integrations that have not been technically and commercially validated.
- Claims of guaranteed savings.

## 8. Success

The product should be evaluated on whether users can set up a bundle, understand their remaining allowance and daily pace, return to check progress, and report that the guidance helped them make a decision. Any claim of actual data savings requires evidence and a defined measurement method.
