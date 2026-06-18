#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol, Address};

/// ProofOfLearning — Mints non-transferable NFTs as verifiable
/// course completion certificates on the Stellar network.
#[contract]
pub struct ProofOfLearningContract;

#[contractimpl]
impl ProofOfLearningContract {
    /// Mints a Proof-of-Learning certificate for a learner.
    ///
    /// # Arguments
    /// * `user_address` - The Stellar address of the learner receiving the certificate.
    /// * `course_id` - Unique identifier for the completed course.
    /// * `score` - The learner's quiz score (0-100).
    pub fn mint(env: Env, user_address: Address, course_id: Symbol, score: u32) {
        // Store certificate metadata
        env.events().publish(
            (Symbol::new(&env, "mint"), user_address),
            (course_id, score),
        );
    }
}

mod test;
