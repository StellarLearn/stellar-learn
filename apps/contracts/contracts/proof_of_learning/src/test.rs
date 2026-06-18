#![cfg(test)]
use super::*;
use soroban_sdk::{Env, Symbol, Address};

#[test]
fn test_mint() {
    let env = Env::default();
    let contract_id = env.register_contract(None, ProofOfLearningContract);
    let client = ProofOfLearningContractClient::new(&env, &contract_id);

    let learner = Address::generate(&env);
    let course_id = Symbol::new(&env, "course101");
    let score: u32 = 85;

    client.mint(&learner, &course_id, &score);
}
