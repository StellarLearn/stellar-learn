# Issues for StellarLearn

These issues align with the "Good First Issue" strategy and demonstrate a clear path for contributors.

## ✅ [Good First Issue] Implement Wallet Connection UI
**Title**: [Good First Issue] Implement Wallet Connection UI using Stellar Wallet Kit
**Status**: **COMPLETE**
**Description**:
A premium wallet connection button is integrated into the header of `apps/web` using `@creit.tech/stellar-wallets-kit`.

**Tasks**:
- [x] Install `@creit.tech/stellar-wallets-kit` in `apps/web`.
- [x] Create a `ConnectWallet` component in `apps/web/app/components`.
- [x] Handle wallet selection and account display (stored in `localStorage`).

---

## ✅ [Enhancement] Complete Proof-of-Learning NFT Contract
**Title**: [Enhancement] Implement SEP-3 Metadata in Proof-of-Learning Contract
**Status**: **COMPLETE**
**Description**:
The `proof-of-learning` Soroban contract is fully implemented with rich NFT metadata.

**Tasks**:
- [x] Add metadata storage for `course_name`, `date`, `learner_name`, `image_url`, `description`, and `issuer_name`.
- [x] Implement `get_metadata` function.
- [x] Tests cover `mint` flow, metadata retrieval, and double-mint prevention.

---

## ✅ [Feature] Add Learning Rewards Escrow logic
**Title**: [Feature] Implement time-locked escrow for scholarship funds
**Status**: **COMPLETE**
**Description**:
The `learning-rewards` contract verifies a Proof-of-Learning via cross-contract call before transferring XLM rewards to the learner.

**Tasks**:
- [x] Cross-contract call to `has_completed` in the POL contract validates eligibility.
- [x] `claim` and `withdraw` (admin) functions implemented with balance checks.
- [x] `reward_claimed` and `funds_withdrawn` events emitted for indexer support.

---

## ✅ [Docs] Initial African Developer Ecosystem Overview
**Title**: [Docs] Research and document African blockchain developer communities
**Status**: **COMPLETE**
**Description**:
Published in `apps/docs/african-ecosystem.md`.

**Tasks**:
- [x] Listed top 5 developer hubs (Nigeria, Kenya, South Africa, Ghana, Rwanda).
- [x] Documented common pain points (connectivity, power, regulatory, educational).
- [x] Proposed four initial course topics tailored to the African context.

---

## ✅ [Enhancement] Fully build and submit AdminSigned Soroban transaction in quiz API
**Title**: [Enhancement] Replace placeholder `scvVoid` with real `PolMetadata` ScVal construction
**Status**: **COMPLETE**
**Description**:
The `/api/quiz/submit` route constructs and signs a Soroban `mint` transaction but uses `scvVoid` as a placeholder for the `PolMetadata` struct argument. A follow-up is needed to manually build the `ScMap` / `ScVec` XDR for the struct so the transaction can be fully submitted on Testnet.

**Tasks**:
- [x] Build `ScMap` for `PolMetadata` fields using `xdr.ScVal` helpers.
- [x] Uncomment `server.sendTransaction(tx)` and wire up proper error handling.
- [x] Add `SOROBAN_ADMIN_SECRET` and contract IDs to Vercel environment variables.
