#![cfg(test)]
use super::*;
use soroban_sdk::{Env, Address};

#[test]
fn test_claim() {
    let env = Env::default();
    let contract_id = env.register_contract(None, LearningRewardsContract);
    let client = LearningRewardsContractClient::new(&env, &contract_id);

    let learner = Address::generate(&env);
    client.claim(&learner, &100);
}
