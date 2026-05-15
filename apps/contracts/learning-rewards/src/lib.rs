#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Env, Symbol, Address, token};

#[contracttype]
#[derive(Clone)]
enum DataKey {
    Admin,
    Token,
    PolContract,
}

#[contract]
pub struct LearningRewardsContract;

#[contractimpl]
impl LearningRewardsContract {
    /// Initialize the rewards contract
    pub fn init(env: Env, admin: Address, token: Address, pol_contract: Address) {
        if env.storage().persistent().has(&DataKey::Admin) {
            panic!("Already initialized");
        }
        env.storage().persistent().set(&DataKey::Admin, &admin);
        env.storage().persistent().set(&DataKey::Token, &token);
        env.storage().persistent().set(&DataKey::PolContract, &pol_contract);
    }

    /// Claim reward for completing a course
    pub fn claim(env: Env, learner: Address, course_id: Symbol, amount: i128) {
        learner.require_auth();

        let pol_contract_id: Address = env.storage().persistent().get(&DataKey::PolContract).expect("Not initialized");
        
        // Use cross-contract call to verify completion
        // Equivalent to: pol_contract.has_completed(learner, course_id)
        let has_completed: bool = env.invoke_contract(
            &pol_contract_id,
            &Symbol::new(&env, "has_completed"),
            (learner.clone(), course_id.clone()).into(),
        );

        if !has_completed {
            panic!("Course not completed. Proof of Learning required.");
        }

        let token_id: Address = env.storage().persistent().get(&DataKey::Token).expect("Not initialized");
        let token_client = token::Client::new(&env, &token_id);

        // Transfer rewards from the contract to the learner
        token_client.transfer(&env.current_contract_address(), &learner, &amount);

        // Emit event
        env.events().publish(
            (Symbol::new(&env, "reward_claimed"), learner),
            (course_id, amount)
        );
    }

    /// Admin function to withdraw funds (emergency)
    pub fn withdraw(env: Env, admin: Address, amount: i128) {
        admin.require_auth();
        let stored_admin: Address = env.storage().persistent().get(&DataKey::Admin).expect("Not initialized");
        if admin != stored_admin {
            panic!("Unauthorized");
        }

        let token_id: Address = env.storage().persistent().get(&DataKey::Token).expect("Not initialized");
        let token_client = token::Client::new(&env, &token_id);
        token_client.transfer(&env.current_contract_address(), &admin, &amount);
    }
}

mod test;
