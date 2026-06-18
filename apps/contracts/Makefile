.PHONY: build test deploy-testnet

build:
	stellar contract build

test:
	cargo test

deploy-testnet:
	stellar contract deploy \
		--wasm target/wasm32-unknown-unknown/release/proof_of_learning.wasm \
		--network testnet
	stellar contract deploy \
		--wasm target/wasm32-unknown-unknown/release/reward_pool.wasm \
		--network testnet
