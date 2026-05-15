"use client";

import { useState } from 'react';
import { 
  Contract, 
  TransactionBuilder, 
  Networks, 
  rpc, 
  Keypair,
  xdr
} from '@stellar/stellar-sdk';
import { StellarWalletsKit } from '@creit.tech/stellar-wallets-kit';

// Update these with actual deployed addresses
const REWARDS_CONTRACT_ID = process.env.NEXT_PUBLIC_REWARDS_CONTRACT_ID || '';
const RPC_URL = 'https://soroban-testnet.stellar.org';
const NETWORK_PASSPHRASE = Networks.TESTNET;

export function useContract(kit: StellarWalletsKit) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const claimReward = async (userAddress: string, courseId: string, amount: bigint) => {
    setLoading(true);
    setError(null);

    try {
      const server = new rpc.Server(RPC_URL);
      const account = await server.getAccount(userAddress);
      
      const contract = new Contract(REWARDS_CONTRACT_ID);
      
      // Building the 'claim' invocation
      const tx = new TransactionBuilder(account, {
        fee: '1000',
        networkPassphrase: NETWORK_PASSPHRASE,
      })
      .addOperation(
        contract.call(
          'claim',
          xdr.ScVal.scvAddress(xdr.ScAddress.scAddressTypeAccount(Keypair.fromPublicKey(userAddress).xdrPublicKey())),
          xdr.ScVal.scvSymbol(courseId),
          xdr.ScVal.scvI128(xdr.Int128.fromBigInt(amount))
        )
      )
      .setTimeout(30)
      .build();

      // Sign with the kit
      const { result } = await kit.signTransaction(tx.toXDR());
      
      // Submit
      const sendResponse = await server.sendTransaction(TransactionBuilder.fromXDR(result, NETWORK_PASSPHRASE));
      
      if (sendResponse.status === 'PENDING') {
        let getResponse = await server.getTransaction(sendResponse.hash);
        while (getResponse.status === 'NOT_FOUND' || getResponse.status === 'PENDING') {
          await new Promise(resolve => setTimeout(resolve, 1000));
          getResponse = await server.getTransaction(sendResponse.hash);
        }
        
        if (getResponse.status === 'SUCCESS') {
          return getResponse.resultMetaXdr;
        } else {
          throw new Error('Transaction failed');
        }
      } else {
        throw new Error('Submission failed');
      }

    } catch (err: any) {
      setError(err.message || 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { claimReward, loading, error };
}
