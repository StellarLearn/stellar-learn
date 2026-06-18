#![cfg(test)]
use super::*;
use soroban_sdk::{Env, Address};

#[test]
fn test_distribute_reward() {
    let env = Env::default();
    let contract_id = env.register_contract(None, RewardPoolContract);
    let client = RewardPoolContractClient::new(&env, &contract_id);

    let recipient = Address::generate(&env);
    let token = Address::generate(&env);
    let amount: i128 = 100;

    client.distribute_reward(&recipient, &amount, &token);
}
