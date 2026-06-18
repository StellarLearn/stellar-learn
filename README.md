# StellarLearn: Learn-to-Earn for African Developers

> Helping African developers learn blockchain through reward-based education powered by Stellar.

StellarLearn is a decentralized education platform that incentivizes learning through verifiable rewards (XLM/USDC) and Proof-of-Learning NFTs. Our mission is to bridge the gap between blockchain education and economic opportunity for developers across the African continent.

[![CI](https://github.com/StellarLearn/stellar-learn/actions/workflows/ci.yml/badge.svg)](https://github.com/StellarLearn/stellar-learn/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 💡 How It Works

1. **Connect Wallet** — Developer connects their Stellar wallet (Freighter, Lobstr, etc.).
2. **Enroll in a Course** — Browse the marketplace and enroll in a blockchain course.
3. **Complete a Quiz** — Pass a verified quiz that tests your understanding of the material.
4. **Smart Contract Verifies Score** — A Soroban smart contract on Stellar validates the quiz result.
5. **Get Paid Instantly** — XLM or USDC is paid out automatically to your wallet.
6. **Mint Proof-of-Learning NFT** — A verifiable on-chain certificate is minted as an NFT for your portfolio.

## 💡 The Problem

Millions of African developers are eager to enter blockchain development but face a critical barrier: there is no immediate economic incentive to complete training. StellarLearn solves this by paying developers in XLM/USDC the moment they pass a verified quiz — turning education into an income stream from day one.

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

## 🔗 Links

- **Documentation**: [docs.stellarlearn.xyz](https://docs.stellarlearn.xyz)
- **GitHub**: [github.com/StellarLearn/stellar-learn](https://github.com/StellarLearn/stellar-learn)
- **Twitter / X**: [@StellarLearn](https://x.com/StellarLearn)
- **Discord**: [Join our community](https://discord.gg/stellarlearn)

## 🌍 Why Africa

Africa is home to the world's youngest and fastest-growing developer population, yet traditional education-to-income pipelines remain broken. Key factors make this the perfect opportunity:

- **Underbanked talent**: Over 60% of Sub-Saharan Africans lack access to traditional banking, making crypto-native solutions not just convenient but necessary.
- **Mobile-first internet**: With smartphone penetration soaring, African developers are leapfrogging desktop-centric infrastructure straight to mobile web3.
- **Growing blockchain interest**: Countries like Nigeria, Kenya, and South Africa rank among the top globally for crypto adoption and developer mindshare.
- **Stellar's natural fit**: Stellar's low transaction fees (~0.00001 XLM), fast settlement (3–5 seconds), and built-in decentralized exchange make it ideal for micro-payouts that power learn-to-earn at scale.

StellarLearn is purpose-built to convert this demographic tailwind into real economic outcomes for African developers.

## 👥 Team

- **[@teeschima](https://github.com/teeschima)** — Founder & Lead Developer
- *We're looking for contributors! Open an issue or PR to join the team.*

## 🗺 Roadmap

See [ROADMAP.md](ROADMAP.md) for our current progress and future plans.

## ⚠️ Known Issues

See [ISSUES.md](ISSUES.md) for a list of known issues, limitations, and planned improvements.

## 🏆 Grant Support

StellarLearn is actively seeking grant funding to accelerate development and expand our impact across Africa. We are applying to:

- **[Drips Wave](https://drips.network/wave)** — A funding wave from the Drips protocol that supports open-source projects building on Stellar. StellarLearn's learn-to-earn model aligns perfectly with Drips' mission to fund public goods.
- **[GrantFox](https://grantfox.io)** — A Web3 grant discovery and application platform. Our focus on African developer education and real economic impact makes us a strong candidate for ecosystem growth grants.

If you represent a grant program or ecosystem fund interested in supporting blockchain education in Africa, please reach out to **grants@stellarlearn.xyz**.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
