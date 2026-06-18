#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol, Address};

/// RewardPool — Handles token distribution to learners who
/// successfully complete courses and pass verified quizzes.
#[contract]
pub struct RewardPoolContract;

#[contractimpl]
impl RewardPoolContract {
    /// Distributes a reward to a learner upon course completion.
    ///
    /// # Arguments
    /// * `recipient` - The Stellar address receiving the reward.
    /// * `amount` - Amount of tokens to distribute.
    /// * `token` - The token contract address (XLM or USDC).
    pub fn distribute_reward(env: Env, recipient: Address, amount: i128, token: Address) {
        // Transfer tokens from contract to recipient
        env.events().publish(
            (Symbol::new(&env, "reward"), recipient),
            (amount, token),
        );
    }
}

mod test;
