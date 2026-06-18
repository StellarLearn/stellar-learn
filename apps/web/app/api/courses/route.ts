import { NextResponse } from "next/server";

const courses = [
  {
    id: "course-1",
    title: "Intro to Stellar",
    description: "Learn the fundamentals of the Stellar blockchain network.",
    difficulty: "Beginner",
    rewardAmount: 50,
    rewardToken: "XLM",
  },
  {
    id: "course-2",
    title: "Soroban Smart Contracts 101",
    description: "Build your first Soroban smart contract in Rust.",
    difficulty: "Intermediate",
    rewardAmount: 100,
    rewardToken: "USDC",
  },
  {
    id: "course-3",
    title: "DeFi on Stellar",
    description: "Explore decentralized finance primitives on Stellar.",
    difficulty: "Advanced",
    rewardAmount: 150,
    rewardToken: "XLM",
  },
];

export async function GET() {
  return NextResponse.json({ courses });
}
