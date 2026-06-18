# Smart Contract Design

## Overview

StellarLearn uses Soroban smart contracts on the Stellar network to handle certificate minting and reward distribution. All contracts are written in Rust and deployed via the Stellar CLI.

---

## ProofOfLearning

Mints non-transferable NFTs as verifiable Proof-of-Learning certificates.

### Storage
| Key | Type | Description |
|-----|------|-------------|
| `owner_of_{course_id}` | `Address` | Learner who completed the course |
| `metadata_{course_id}` | `String` | Course name, completion date, score |
| `total_minted` | `u32` | Total certificates minted |

### Functions
| Function | Params | Returns | Description |
|----------|--------|---------|-------------|
| `mint` | `to: Address, course_id: Symbol, score: u32` | `void` | Mints a certificate for a learner after passing a quiz |
| `get_metadata` | `course_id: Symbol` | `String` | Returns the metadata for a given course certificate |
| `owner_of` | `course_id: Symbol` | `Address` | Returns the owner address for a certificate |

### Events
- `mint` — emitted when a new certificate is minted

---

## RewardPool

Handles token distribution to learners who successfully complete courses.

### Storage
| Key | Type | Description |
|-----|------|-------------|
| `balance` | `i128` | Total reward pool balance |
| `claimed_{address}` | `bool` | Whether a learner has claimed a reward |

### Functions
| Function | Params | Returns | Description |
|----------|--------|---------|-------------|
| `deposit` | `amount: i128, token: Address` | `void` | Adds funds to the reward pool |
| `distribute_reward` | `recipient: Address, amount: i128, token: Address` | `void` | Sends reward to a learner |
| `get_balance` | (none) | `i128` | Returns current pool balance |

### Events
- `reward` — emitted when a reward is distributed
- `deposit` — emitted when funds are added

---

## ScholarshipPool (Planned)

Crowdfunded education grants for promising developers.

### Functions
| Function | Params | Returns | Description |
|----------|--------|---------|-------------|
| `create_pool` | `name: Symbol, target: i128` | `void` | Creates a new scholarship pool |
| `contribute` | `pool_id: Symbol, amount: i128` | `void` | Contribute funds to a pool |
| `grant` | `pool_id: Symbol, recipient: Address` | `void` | Grant scholarship to a learner |

---

## Deployment

### Testnet
```bash
stellar contract build
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/proof_of_learning.wasm \
  --network testnet

stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/reward_pool.wasm \
  --network testnet
```

### Mainnet (Future)
Same process with `--network mainnet` after security audit.

---

## Security Considerations

- All functions should validate that callers are authorized (admin or contract owner)
- `distribute_reward` must check that the recipient has a valid ProofOfLearning certificate
- Integer overflow protection via `overflow-checks = true` in release profile
- Use Stellar's built-in address validation via `Address` type
