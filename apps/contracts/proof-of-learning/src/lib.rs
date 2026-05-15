#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Env, Symbol, Address, storage::PersistentDataKeyByAddress};

#[contracttype]
#[derive(Clone)]
enum DataKey {
    Admin,
    LearnerCourse(Address, Symbol), // To track completion
}

#[contract]
pub struct ProofOfLearningContract;

#[contractimpl]
impl ProofOfLearningContract {
    /// Initialize the contract with an admin address
    pub fn init(env: Env, admin: Address) {
        if env.storage().persistent().has(&DataKey::Admin) {
            panic!("Already initialized");
        }
        env.storage().persistent().set(&DataKey::Admin, &admin);
    }

    /// Mint a Proof-of-Learning NFT for a learner who passed a course
    pub fn mint(env: Env, admin: Address, learner: Address, course_id: Symbol) {
        // Only the admin can authorize minting (e.g., the backend after verifying quiz)
        admin.require_auth();

        let stored_admin: Address = env.storage().persistent().get(&DataKey::Admin).expect("Not initialized");
        if admin != stored_admin {
            panic!("Unauthorized: Only the admin can mint");
        }

        let key = DataKey::LearnerCourse(learner.clone(), course_id.clone());
        if env.storage().persistent().has(&key) {
            panic!("Course already completed by this learner");
        }

        // Store the completion record
        env.storage().persistent().set(&key, &true);

        // Emit event for the UI/Indexer to pick up
        env.events().publish(
            (Symbol::new(&env, "pol_minted"), learner),
            course_id
        );
    }

    /// Check if a course is completed by a learner
    pub fn has_completed(env: Env, learner: Address, course_id: Symbol) -> bool {
        let key = DataKey::LearnerCourse(learner, course_id);
        env.storage().persistent().has(&key)
    }
}

mod test;
