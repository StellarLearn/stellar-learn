# StellarLearn Smart Contracts

Soroban smart contracts powering the StellarLearn learn-to-earn platform.

## Contracts

| Contract | Path | Description |
|----------|------|-------------|
| ProofOfLearning | `contracts/proof_of_learning/` | Mints verifiable course completion NFTs |
| RewardPool | `contracts/reward_pool/` | Handles XLM/USDC reward distribution |

## Prerequisites

- Rust & Cargo (edition 2021)
- [Stellar CLI](https://developers.stellar.org/docs/tools/stellar-cli/install)

## Build

Build all contracts:

```bash
stellar contract build
```

Or build individually:

```bash
cd contracts/proof_of_learning && stellar contract build
cd contracts/reward_pool && stellar contract build
```

## Test

```bash
cargo test
```

## Deploy to Testnet

1. Build the contract (see above).
2. Deploy:
   ```bash
   stellar contract deploy \
     --wasm target/wasm32-unknown-unknown/release/proof_of_learning.wasm \
     --network testnet

   stellar contract deploy \
     --wasm target/wasm32-unknown-unknown/release/reward_pool.wasm \
     --network testnet
   ```
3. Note the deployed contract IDs — add them to your `.env` file.

## Deploy to Mainnet

Same process, but use `--network mainnet`. Ensure contracts are audited before mainnet deployment.

## Contract Interactions

After deployment, interact via the Stellar CLI:

```bash
stellar contract invoke \
  --id <CONTRACT_ID> \
  --network testnet \
  -- \
  mint \
  --user_address <ADDRESS> \
  --course_id <SYMBOL> \
  --score <u32>
```
