# Initial Issues for StellarLearn

These issues are designed to align with the "Good First Issue" strategy and demonstrate a clear path for contributors.

---

## Known Limitations

The following are known limitations of the current codebase:

1. **Wallet integration not yet complete** — The Connect Wallet button and Stellar Wallet Kit integration are stubbed but not functional. Users cannot yet authenticate or sign transactions.
2. **Soroban contracts on Testnet only** — All smart contracts are currently deployed and tested solely on Stellar Testnet. Mainnet deployment is pending security audits and further testing.
3. **No authentication layer yet** — There is no user authentication, session management, or JWT flow. NEXTAUTH configuration is templated but not implemented.
4. **Course content is placeholder** — The course listing page uses hardcoded mock data. No real curriculum, quiz engine, or content management system exists yet.
5. **No automated reward payouts** — The reward distribution pipeline from quiz completion to XLM/USDC payout is not implemented on the frontend or backend.
6. **Single-language support** — All UI text is in English. Internationalization (i18n) scaffolding, particularly for French, has not been started.

We track these limitations and are actively working to resolve them. Contributions are welcome!

---

## [Good First Issue] Implement Wallet Connection UI
**Title**: [Good First Issue] Implement Wallet Connection UI using Stellar Wallet Kit
**Description**: 
We need a clean, premium button in the header of the `apps/web` application to allow users to connect their wallets (Freighter, Lobstr, etc.) using the Stellar Wallet Kit.

**Tasks**:
- [ ] Install `@stellar/stellar-wallet-kit` in `apps/web`.
- [ ] Create a `ConnectWallet` component in `apps/web/components`.
- [ ] Handle wallet selection and account display.

---

## [Enhancement] Complete Proof-of-Learning NFT Contract
**Title**: [Enhancement] Implement SEP-3 Metadata in Proof-of-Learning Contract
**Description**:
The current `proof-of-learning` contract is a stub. We need to implement the full SEP-3 standard for NFT metadata so that certificates can be viewed in wallets.

**Tasks**:
- [ ] Add metadata storage for course name, date, and learner name.
- [ ] Implement `get_metadata` function.
- [ ] Ensure tests cover metadata retrieval.

---

## [Feature] Add Learning Rewards Escrow logic
**Title**: [Feature] Implement time-locked escrow for scholarship funds
**Description**:
Scholarship funds should be held in the `learning-rewards` contract and only claimable after a successful proof-of-learning NFT has been minted for the learner.

**Tasks**:
- [ ] Add address validation for the minter of POL NFTs.
- [ ] Implement deposit/claim logic.
- [ ] Add event for claims.

---

## [Docs] Initial African Developer Ecosystem Overview
**Title**: [Docs] Research and document African blockchain developer communities
**Description**:
We want to tailor our courses to existing communities like those in Nigeria, Kenya, and South Africa. This issue is for researching and documenting these communities in our `apps/docs`.

**Tasks**:
- [ ] List top 5 developer hubs in West Africa.
- [ ] Document common pain points for African developers in Web3.
- [ ] Propose initial course topics based on research.
