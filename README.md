# StellarLearn: Learn-to-Earn for African Developers

> Helping African developers learn blockchain through reward-based education powered by Stellar.

StellarLearn is a decentralized education platform that incentivizes learning through verifiable rewards (XLM/USDC) and Proof-of-Learning NFTs. Our mission is to bridge the gap between blockchain education and economic opportunity for developers across the African continent.

[![CI](https://github.com/StellarLearn/stellar-learn/actions/workflows/ci.yml/badge.svg)](https://github.com/StellarLearn/stellar-learn/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Vision

We believe that education should be an investment that pays back immediately. By leveraging the Stellar network's low fees and fast settlement, StellarLearn provides:

- **Course Marketplace**: High-quality blockchain curriculum tailored for real-world utility.
- **Quiz Rewards**: Instant payouts in stablecoins upon quiz completion.
- **Proof-of-Learning NFTs**: Verifiable digital credentials for your professional portfolio.
- **Scholarship Pools**: Crowdfunded education grants for promising developers.

## 🛠 Tech Stack

- **Monorepo**: [Turborepo](https://turbo.build/)
- **Frontend**: [Next.js](https://nextjs.org/) + [Stellar Wallet Kit](https://github.com/stellar/stellar-wallet-kit)
- **Smart Contracts**: [Soroban](https://soroban.stellar.org/) (Rust)
- **Styling**: Vanilla CSS / Tailwind
- **Backend**: Next.js API Routes / PostgreSQL

## 📂 Repository Structure

```txt
.
├── apps
│   ├── web          # Next.js Frontend
│   ├── docs         # Documentation site
│   └── contracts    # Soroban Smart Contracts (Rust)
├── packages
│   ├── ui           # Shared component library
│   ├── eslint-config
│   └── typescript-config
└── .github          # Workflows and templates
```

## 🏗 Getting Started

### Prerequisites

- Node.js 20+
- Rust & Cargo (for Soroban contracts)
- [Stellar CLI](https://developers.stellar.org/docs/tools/stellar-cli/install)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/StellarLearn/stellar-learn.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🤝 Contributing

We love contributors! Whether you're fixing a bug, improving documentation, or proposing new features, please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Check out our [Good First Issues](https://github.com/StellarLearn/stellar-learn/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) to get started.

## 🗺 Roadmap

See [ROADMAP.md](ROADMAP.md) for our current progress and future plans.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
