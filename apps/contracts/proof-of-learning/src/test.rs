#![cfg(test)]
use super::*;
use soroban_sdk::{testutils::Address as _, Env, Symbol, Address};

#[test]
fn test_mint_flow() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register_contract(None, ProofOfLearningContract);
    let client = ProofOfLearningContractClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    let learner = Address::generate(&env);
    let course_id = Symbol::new(&env, "stellar-101");

    // Initialize
    client.init(&admin);

    // Mint POL
    client.mint(&admin, &learner, &course_id);

    // Verify completion
    assert!(client.has_completed(&learner, &course_id));
}

#[test]
#[should_panic(expected = "Course already completed by this learner")]
fn test_double_mint_fails() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register_contract(None, ProofOfLearningContract);
    let client = ProofOfLearningContractClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    let learner = Address::generate(&env);
    let course_id = Symbol::new(&env, "stellar-101");

    client.init(&admin);
    client.mint(&admin, &learner, &course_id);
    client.mint(&admin, &learner, &course_id); // Should panic
}
