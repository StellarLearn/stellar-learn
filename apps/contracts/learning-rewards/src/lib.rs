#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Env, Symbol, Address, token, vec, IntoVal};

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

        if amount <= 0 {
            panic!("Amount must be positive");
        }

        let pol_contract_id: Address = env.storage().persistent().get(&DataKey::PolContract).expect("Not initialized");
        
        // Use cross-contract call to verify completion
        let has_completed: bool = env.invoke_contract(
            &pol_contract_id,
            &Symbol::new(&env, "has_completed"),
            vec![&env, learner.clone().into_val(&env), course_id.clone().into_val(&env)].into(),
        );

        if !has_completed {
            panic!("Course not completed. Proof of Learning required.");
        }

        let token_id: Address = env.storage().persistent().get(&DataKey::Token).expect("Not initialized");
        let token_client = token::Client::new(&env, &token_id);

        // Check if contract has enough balance
        let balance = token_client.balance(&env.current_contract_address());
        if balance < amount {
            panic!("Insufficient contract balance for reward");
        }

        // Transfer rewards from the contract to the learner
        token_client.transfer(&env.current_contract_address(), &learner, &amount);

        // Emit event
        env.events().publish(
            (Symbol::new(&env, "reward_claimed"), learner),
            (course_id, amount)
        );
    }

    /// Admin function to withdraw funds (emergency or rebalancing)
    pub fn withdraw(env: Env, admin: Address, amount: i128) {
        let stored_admin: Address = env.storage().persistent().get(&DataKey::Admin).expect("Not initialized");
        stored_admin.require_auth();
        
        if admin != stored_admin {
            panic!("Unauthorized: Only the stored admin can withdraw");
        }

        if amount <= 0 {
            panic!("Amount must be positive");
        }

        let token_id: Address = env.storage().persistent().get(&DataKey::Token).expect("Not initialized");
        let token_client = token::Client::new(&env, &token_id);
        
        let balance = token_client.balance(&env.current_contract_address());
        if balance < amount {
            panic!("Insufficient balance");
        }

        token_client.transfer(&env.current_contract_address(), &admin, &amount);
        
        env.events().publish(
            (Symbol::new(&env, "funds_withdrawn"), admin),
            amount
        );
    }
}

mod test;
