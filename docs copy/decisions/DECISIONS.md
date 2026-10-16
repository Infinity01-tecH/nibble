# Product and Technical Decision Log

This log separates explicit decisions from recommendations and inherited statements.

## D-001 — Product direction

**Status:** AGREED  
**Decision:** Nibble is a Data Coach focused on helping users make their mobile-data bundle last longer.  
**Reason:** A ranked usage list alone is not a sufficiently distinct outcome.  
**Implication:** Bundle allowance, renewal date, daily pace, and practical guidance become central to the product.

## D-002 — Initial market

**Status:** AGREED  
**Decision:** Start with Nigeria, focused on local prepaid-data bundles.  
**Implication:** Validate workflows with Nigerian prepaid users. Do not assume carrier integrations or authoritative bundle data are available.

## D-003 — Direct VPN blocking

**Status:** AGREED  
**Decision:** Defer direct VPN-based blocking until the core product is validated.  
**Implication:** Do not implement a VPN service or request VPN permission in the first validation milestone. Revisit only with user evidence and a technical proof of concept.

## D-004 — Repository state

**Status:** AGREED  
**Decision:** The monorepo exists but has little implementation.  
**Implication:** Inspect actual files and tooling before choosing architecture, changing packages, or writing implementation code.

## D-005 — Local-first calculations

**Status:** PROPOSED  
**Decision:** Bundle calculations and recommendations should be deterministic and work offline.  
**Reason:** They do not require a backend or AI model.  
**Needs approval:** Confirm as an engineering requirement before implementation.

## D-006 — No account for core value

**Status:** INHERITED from original PRD  
**Decision in original:** No signup required to reach the main usage list.  
**Revised recommendation:** Preserve no-account access to core coaching.  
**Needs confirmation:** Confirm that this remains a firm requirement.

## D-007 — Usage data stays on-device

**Status:** INHERITED from original PRD  
**Decision in original:** Usage data must not be uploaded or sold.  
**Revised recommendation:** Keep per-app usage records and package names on-device.  
**Needs confirmation:** Confirm and ensure any diagnostics/analytics match this promise.

## D-008 — Backend

**Status:** PROPOSED  
**Decision:** No backend is required for the first validated core experience.  
**Reason:** Budget configuration, calculations, and basic recommendations can be local.  
**Implication:** Do not add Supabase or Cloudflare Workers until a specific approved feature requires remote functionality.

## D-009 — Top-10 list placement

**Status:** OPEN  
**Original PRD:** Top 10 data-hog list is the first screen.  
**Revision proposal:** Bundle dashboard should be the primary screen; app usage is supporting detail.  
**Action:** Validate through prototype testing before finalising navigation.

## D-010 — Free/ad-free model

**Status:** INHERITED from original PRD  
**Original decision:** Completely free, described as the “Infinity model,” with no ads.  
**Action:** Confirm this still stands and document the project's sustainability plan.

## D-011 — Success metrics

**Status:** PROPOSED  
**Decision:** Do not carry forward the original 20% savings target as a claim.  
**Reason:** The original PRD calls its metrics guesses and provides no measurement method.  
**Action:** Establish baseline metrics after initial user testing.
