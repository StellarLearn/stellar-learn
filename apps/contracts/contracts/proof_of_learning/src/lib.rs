#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol};

#[contract]
pub struct ProofOfLearningContract;

#[contractimpl]
impl ProofOfLearningContract {
    pub fn mint(env: Env, to: Symbol, course_id: Symbol) {
        // Implement NFT minting logic here
        env.events().publish((Symbol::new(&env, "mint"), to), course_id);
    }
}

mod test;
