# StellarLearn Architecture

## High-Level System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                       │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │  Landing     │  │  Course       │  │  User Dashboard  │   │
│  │  Page        │  │  Marketplace  │  │  (Profile/NFTs)  │   │
│  └─────────────┘  └──────────────┘  └──────────────────┘   │
│         │                │                    │              │
│  ┌──────┴────────────────┴────────────────────┴──────┐     │
│  │              Stellar Wallet Kit                    │     │
│  │         (Freighter, Lobstr, etc.)                  │     │
│  └─────────────────────┬──────────────────────────────┘     │
└────────────────────────┼────────────────────────────────────┘
                         │
┌────────────────────────┼────────────────────────────────────┐
│                Next.js API Routes                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ /api/courses   │  │ /api/health   │  │ /api/auth/*      │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┼────────────────────────────────────┐
│           Stellar SDK / Soroban RPC Client                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  invokeContract(course_id, quiz_score, wallet_addr)  │   │
│  └──────────────────────┬───────────────────────────────┘   │
└─────────────────────────┼───────────────────────────────────┘
                          │
┌─────────────────────────┼───────────────────────────────────┐
│              Stellar Network (Testnet / Mainnet)             │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ ProofOfLearning  │  │  RewardPool       │                │
│  │ Contract          │  │  Contract         │                │
│  │ - mint()          │  │  - deposit()      │                │
│  │ - get_metadata()  │  │  - distribute()   │                │
│  └──────────────────┘  └──────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
```

## Component Breakdown

### Frontend (apps/web)
- **Framework**: Next.js 16 with App Router
- **Styling**: CSS Modules with design tokens
- **Wallet**: Stellar Wallet Kit for Freighter, Lobstr, and other Stellar wallets
- **State**: React hooks for wallet state, course data, and quiz state

### API Layer (apps/web/src/app/api)
- **REST endpoints** under `/api/` for course data, health checks, and future auth
- **Server-side validation** of quiz submissions before contract calls
- **Environment-based configuration** for Stellar network selection

### Soroban Smart Contracts (apps/contracts)
- **ProofOfLearning**: Mints NFTs as verifiable certificates upon quiz completion
- **RewardPool**: Handles XLM/USDC distribution to successful learners
- **ScholarshipPool** (planned): Manages crowdfunded education grants

### Data Flow
1. User connects wallet via Stellar Wallet Kit
2. User browses courses (fetched from API)
3. User takes a quiz; answers are submitted to an API route
4. API route validates the score and calls the Soroban contract
5. Smart contract mints a Proof-of-Learning NFT and triggers reward payout
6. Frontend displays the new certificate and payout confirmation

## Deployment

- **Web app**: Vercel (preview deployments on every PR)
- **Smart contracts**: Deployed via Stellar CLI to Testnet/Mainnet
- **Environment**: Configured via `.env` variables (see `.env.example`)
