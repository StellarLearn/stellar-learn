#![cfg(test)]
use super::*;
use soroban_sdk::{
    testutils::Address as _,
    Env, Address, Symbol,
    token::{self, StellarAssetClient}
};

// Mock Proof-of-Learning Contract for testing cross-contract calls
#[contract]
pub struct MockPolContract;

#[contractimpl]
impl MockPolContract {
    pub fn has_completed(env: Env, learner: Address, _course_id: Symbol) -> bool {
        // Simple logic for mocking completion: 
        // We'll store completion status in contract storage for testing
        env.storage().persistent().has(&learner)
    }

    pub fn set_completed(env: Env, learner: Address) {
        env.storage().persistent().set(&learner, &true);
    }
}

#[test]
fn test_successful_claim() {
    let env = Env::default();
    env.mock_all_auths();

    // 1. Setup Contracts
    let admin = Address::generate(&env);
    let learner = Address::generate(&env);
    
    // Deploy Token (SAC)
    let token_admin = Address::generate(&env);
    let token_address = env.register_stellar_asset_contract_v2(token_admin.clone()).address();
    let token_client = token::Client::new(&env, &token_address);
    let token_dev_client = StellarAssetClient::new(&env, &token_address);

    // Deploy Mock POL Contract
    let pol_address = env.register(MockPolContract, ());
    let pol_client = MockPolContractClient::new(&env, &pol_address);

    // Deploy Rewards Contract
    let rewards_address = env.register(LearningRewardsContract, ());
    let rewards_client = LearningRewardsContractClient::new(&env, &rewards_address);

    // 2. Initialize
    rewards_client.init(&admin, &token_address, &pol_address);

    // 3. Fund Rewards Contract
    token_dev_client.mint(&rewards_address, &1000);
    assert_eq!(token_client.balance(&rewards_address), 1000);

    // 4. Mark course as completed in Mock POL
    pol_client.set_completed(&learner);

    // 5. Claim Reward
    let course_id = Symbol::new(&env, "stellar_101");
    let claim_amount = 100;
    
    rewards_client.claim(&learner, &course_id, &claim_amount);

    // 6. Verify Balances and Events
    assert_eq!(token_client.balance(&learner), 100);
    assert_eq!(token_client.balance(&rewards_address), 900);
}

#[test]
#[should_panic(expected = "Course not completed. Proof of Learning required.")]
fn test_claim_without_completion_fails() {
    let env = Env::default();
    env.mock_all_auths();

    let admin = Address::generate(&env);
    let learner = Address::generate(&env);
    let token_address = env.register_stellar_asset_contract_v2(admin.clone()).address();
    let pol_address = env.register(MockPolContract, ());
    let rewards_address = env.register(LearningRewardsContract, ());
    let rewards_client = LearningRewardsContractClient::new(&env, &rewards_address);

    rewards_client.init(&admin, &token_address, &pol_address);
    
    // Try to claim without setting completion in POL mock
    rewards_client.claim(&learner, &Symbol::new(&env, "stellar_101"), &100);
}

#[test]
#[should_panic(expected = "Insufficient contract balance for reward")]
fn test_insufficient_balance_fails() {
    let env = Env::default();
    env.mock_all_auths();

    let admin = Address::generate(&env);
    let learner = Address::generate(&env);
    let token_address = env.register_stellar_asset_contract_v2(admin.clone()).address();
    let pol_address = env.register(MockPolContract, ());
    let pol_client = MockPolContractClient::new(&env, &pol_address);
    let rewards_address = env.register(LearningRewardsContract, ());
    let rewards_client = LearningRewardsContractClient::new(&env, &rewards_address);

    rewards_client.init(&admin, &token_address, &pol_address);
    pol_client.set_completed(&learner);
    
    // Rewards contract is empty, should panic
    rewards_client.claim(&learner, &Symbol::new(&env, "stellar_101"), &100);
}

#[test]
fn test_admin_withdraw() {
    let env = Env::default();
    env.mock_all_auths();

    let admin = Address::generate(&env);
    let token_address = env.register_stellar_asset_contract_v2(admin.clone()).address();
    let token_client = token::Client::new(&env, &token_address);
    let token_dev_client = StellarAssetClient::new(&env, &token_address);
    let pol_address = env.register(MockPolContract, ());
    let rewards_address = env.register(LearningRewardsContract, ());
    let rewards_client = LearningRewardsContractClient::new(&env, &rewards_address);

    rewards_client.init(&admin, &token_address, &pol_address);
    token_dev_client.mint(&rewards_address, &500);

    rewards_client.withdraw(&admin, &200);

    assert_eq!(token_client.balance(&admin), 200);
    assert_eq!(token_client.balance(&rewards_address), 300);
}

