import { NextResponse } from 'next/server';
import { 
  Contract, 
  TransactionBuilder, 
  Networks, 
  rpc, 
  Keypair,
  xdr,
  Address
} from '@stellar/stellar-sdk';

const RPC_URL = 'https://soroban-testnet.stellar.org';
const NETWORK_PASSPHRASE = Networks.TESTNET;

// In a real app, these would be in environment variables
const ADMIN_SECRET = process.env.SOROBAN_ADMIN_SECRET;
const POL_CONTRACT_ID = process.env.NEXT_PUBLIC_POL_CONTRACT_ID || '';

// Mock questions/answers (should be synced with the frontend)
const QUESTIONS = [
  { correct: 1 }, // SCP
  { correct: 2 }, // XDR
  { correct: 0 }  // Source Account
];

const COURSE_METADATA: Record<string, { name: string; image: string; description: string }> = {
  "stellar-101": {
    name: "Stellar Fundamentals",
    image: "https://stellarlearn.org/certs/stellar-101.png",
    description: "Mastered the core concepts of the Stellar network."
  },
  "soroban-rust": {
    name: "Soroban Smart Contracts",
    image: "https://stellarlearn.org/certs/soroban-rust.png",
    description: "Learned how to build and deploy Soroban contracts in Rust."
  },
  "defi-stellar": {
    name: "Building DeFi on Stellar",
    image: "https://stellarlearn.org/certs/defi-stellar.png",
    description: "Advanced DeFi implementation on the Stellar network."
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || !body.answers) {
      return NextResponse.json({ success: false, message: 'Invalid request body' }, { status: 400 });
    }
    const { courseId, userAddress, answers } = body;

    // 1. Validate the quiz answers
    let correctCount = 0;
    answers.forEach((ans: number, idx: number) => {
      if (idx < QUESTIONS.length && ans === QUESTIONS[idx]?.correct) {
        correctCount++;
      }
    });

    const passed = correctCount >= 2;

    if (!passed) {
      return NextResponse.json({ success: false, message: 'Quiz failed' }, { status: 400 });
    }

    // 2. Trigger administrative minting of POL NFT
    if (!ADMIN_SECRET) {
      console.warn("ADMIN_SECRET not set. Skipping real minting in demo.");
      return NextResponse.json({ 
        success: true, 
        message: 'Quiz passed! (Real minting skipped: ADMIN_SECRET missing)',
        minted: false
      });
    }

    const adminKeypair = Keypair.fromSecret(ADMIN_SECRET!);
    const server = new rpc.Server(RPC_URL);
    const adminAccount = await server.getAccount(adminKeypair.publicKey());
    
    const contract = new Contract(POL_CONTRACT_ID);
    
    const meta = COURSE_METADATA[courseId] || { 
      name: courseId, 
      image: "", 
      description: "Completed course on StellarLearn" 
    };

    // PolMetadata struct fields: course_name, date, learner_name, image_url, description, issuer_name
    const metadataScVal = xdr.ScVal.scvMap([
      new xdr.ScMapEntry({
        key: xdr.ScVal.scvSymbol('course_name'),
        val: xdr.ScVal.scvString(meta.name)
      }),
      new xdr.ScMapEntry({
        key: xdr.ScVal.scvSymbol('date'),
        val: xdr.ScVal.scvString(new Date().toISOString().split('T')[0] || '')
      }),
      new xdr.ScMapEntry({
        key: xdr.ScVal.scvSymbol('learner_name'),
        val: xdr.ScVal.scvString(userAddress.slice(0, 4) + '...' + userAddress.slice(-4))
      }),
      new xdr.ScMapEntry({
        key: xdr.ScVal.scvSymbol('image_url'),
        val: xdr.ScVal.scvString(meta.image)
      }),
      new xdr.ScMapEntry({
        key: xdr.ScVal.scvSymbol('description'),
        val: xdr.ScVal.scvString(meta.description)
      }),
      new xdr.ScMapEntry({
        key: xdr.ScVal.scvSymbol('issuer_name'),
        val: xdr.ScVal.scvString('StellarLearn Academy')
      })
    ]);

    // Build the 'mint' transaction
    const tx = new TransactionBuilder(adminAccount, {
      fee: '1000',
      networkPassphrase: NETWORK_PASSPHRASE,
    })
    .addOperation(
      contract.call(
        'mint',
        new Address(adminKeypair.publicKey()).toScVal(),
        new Address(userAddress).toScVal(),
        xdr.ScVal.scvSymbol(courseId.replace(/-/g, '_')),
        metadataScVal
      )
    )
    .setTimeout(30)
    .build();

    tx.sign(adminKeypair);

    // Submit transaction
    const response = await server.sendTransaction(tx);
    
    if (response.status === 'ERROR') {
      throw new Error(`Soroban RPC Error: ${JSON.stringify(response.errorResult)}`);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'NFT Minted successfully',
      txHash: response.hash,
      minted: true 
    });
  } catch (error: any) {
    console.error('Quiz submission error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
