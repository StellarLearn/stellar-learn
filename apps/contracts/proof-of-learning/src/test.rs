#![cfg(test)]
use super::*;
use soroban_sdk::{testutils::Address as _, Env, Symbol, Address, String};

#[test]
fn test_mint_flow() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register(ProofOfLearningContract, ());
    let client = ProofOfLearningContractClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    let learner = Address::generate(&env);
    let course_id = Symbol::new(&env, "stellar_101");

    let metadata = PolMetadata {
        course_name: String::from_str(&env, "Introduction to Stellar"),
        date: String::from_str(&env, "2026-05-15"),
        learner_name: String::from_str(&env, "John Doe"),
        image_url: String::from_str(&env, "https://stellarlearn.org/certs/stellar-101.png"),
        description: String::from_str(&env, "Completed the foundational Stellar course with excellence."),
        issuer_name: String::from_str(&env, "StellarLearn Academy"),
    };

    // Initialize
    client.init(&admin);

    // Mint POL
    client.mint(&admin, &learner, &course_id, &metadata);

    // Verify completion
    assert!(client.has_completed(&learner, &course_id));

    // Verify metadata
    let saved_metadata = client.get_metadata(&learner, &course_id).unwrap();
    assert_eq!(saved_metadata.course_name, metadata.course_name);
}

#[test]
#[should_panic(expected = "Course already completed by this learner")]
fn test_double_mint_fails() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register(ProofOfLearningContract, ());
    let client = ProofOfLearningContractClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    let learner = Address::generate(&env);
    let course_id = Symbol::new(&env, "stellar_101");
    let metadata = PolMetadata {
        course_name: String::from_str(&env, "Introduction to Stellar"),
        date: String::from_str(&env, "2026-05-15"),
        learner_name: String::from_str(&env, "John Doe"),
        image_url: String::from_str(&env, "https://stellarlearn.org/certs/stellar-101.png"),
        description: String::from_str(&env, "Completed the foundational Stellar course with excellence."),
        issuer_name: String::from_str(&env, "StellarLearn Academy"),
    };

    client.init(&admin);
    client.mint(&admin, &learner, &course_id, &metadata);
    client.mint(&admin, &learner, &course_id, &metadata); // Should panic
}

