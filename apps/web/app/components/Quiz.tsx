"use client";

import { useState } from "react";
import Link from "next/link";

const QUESTIONS = [
  {
    question: "What is the primary consensus mechanism used by Stellar?",
    options: [
      "Proof of Work",
      "Stellar Consensus Protocol (SCP)",
      "Proof of Stake",
      "Delegated Proof of Stake"
    ],
    correct: 1
  },
  {
    question: "What is the low-level data format used for Stellar transactions?",
    options: [
      "JSON",
      "Protobuf",
      "XDR",
      "YAML"
    ],
    correct: 2
  },
  {
    question: "Which account is required to pay for transaction fees on Stellar?",
    options: [
      "The Source Account",
      "The Destination Account",
      "The Sequence Account",
      "The Asset Issuer"
    ],
    correct: 0
  }
];

export default function Quiz({ courseId }: { courseId: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (optionIdx: number) => {
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getScore = () => {
    return answers.reduce((acc, curr, idx) => {
      return curr === QUESTIONS[idx].correct ? acc + 1 : acc;
    }, 0);
  };

  if (isFinished) {
    const score = getScore();
    const passed = score >= 2;

    return (
      <div className="card animate" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
          {passed ? '🎉 You Passed!' : '⌛ Try Again'}
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2.5rem' }}>
          Your score: <strong>{score} / {QUESTIONS.length}</strong>
        </p>
        
        {passed ? (
          <div>
            <p style={{ color: '#ec4899', fontWeight: 600, marginBottom: '2rem' }}>
              Requirement met! You are eligible for the 50 XLM reward.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn btn-primary">
                Claim Reward
              </button>
              <Link href="/dashboard" className="btn btn-secondary">
                Back to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
              Don't give up! Review the curriculum and try the quiz again.
            </p>
            <button className="btn btn-primary" onClick={() => {
              setCurrentStep(0);
              setAnswers([]);
              setIsFinished(false);
            }}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    );
  }

  const q = QUESTIONS[currentStep];

  return (
    <div className="card animate" style={{ padding: '3rem' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#3b82f6', fontWeight: 600 }}>Question {currentStep + 1} of {QUESTIONS.length}</span>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', width: '100px', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ 
            height: '100%', 
            background: 'var(--primary)', 
            width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', lineHeight: '1.4' }}>{q.question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {q.options.map((option, idx) => (
          <button 
            key={idx} 
            className="card" 
            style={{ 
              textAlign: 'left', 
              padding: '1.25rem 2rem', 
              cursor: 'pointer',
              background: 'rgba(255,255,255,0.02)',
              borderColor: 'rgba(255,255,255,0.1)',
              transition: 'all 0.2s ease',
              width: '100%'
            }}
            onClick={() => handleAnswer(idx)}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            <span style={{ marginRight: '1rem', color: '#64748b' }}>{String.fromCharCode(65 + idx)}.</span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
