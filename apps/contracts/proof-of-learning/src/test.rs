#![cfg(test)]
use super::*;
use soroban_sdk::{Env, Symbol};

#[test]
fn test_mint() {
    let env = Env::default();
    let contract_id = env.register_contract(None, ProofOfLearningContract);
    let client = ProofOfLearningContractClient::new(&env, &contract_id);

    client.mint(&Symbol::new(&env, "learner1"), &Symbol::new(&env, "course101"));
}
