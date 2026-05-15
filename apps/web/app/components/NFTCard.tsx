"use client";

import React from "react";

interface NFTCardProps {
  metadata: {
    course_name: string;
    date: string;
    learner_name: string;
    image_url: string;
    description: string;
    issuer_name: string;
  };
  loading?: boolean;
}

export default function NFTCard({ metadata, loading }: NFTCardProps) {
  if (loading) {
    return (
      <div className="card animate" style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div className="shimmer" style={{ width: "200px", height: "200px", borderRadius: "var(--radius-lg)", marginBottom: "1rem" }}></div>
          <div className="shimmer" style={{ width: "150px", height: "20px", marginBottom: "0.5rem" }}></div>
          <div className="shimmer" style={{ width: "100px", height: "15px" }}></div>
        </div>
      </div>
    );
  }

  return (
    <article className="card animate" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Certificate Image / Preview */}
      <div 
        style={{ 
          height: "240px", 
          width: "100%", 
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottom: "1px solid var(--border)"
        }}
      >
        {metadata.image_url ? (
          <img 
            src={metadata.image_url} 
            alt={metadata.course_name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center", opacity: 0.5 }}>
            <span style={{ fontSize: "4rem" }}>📜</span>
          </div>
        )}
        
        {/* Holographic overlay effect */}
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(45deg, rgba(59,130,246,0.1) 0%, transparent 40%, rgba(236,72,153,0.1) 100%)",
            pointerEvents: "none"
          }} 
        />
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", margin: 0 }}>{metadata.course_name}</h3>
          <span className="badge badge-success" style={{ fontSize: "0.6rem" }}>Verified POL</span>
        </div>
        
        <p style={{ fontSize: "0.85rem", marginBottom: "1rem", color: "var(--text-secondary)", minHeight: "2.5rem" }}>
          {metadata.description}
        </p>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem" }}>
            <span style={{ color: "var(--text-muted)" }}>Learner</span>
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{metadata.learner_name}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem" }}>
            <span style={{ color: "var(--text-muted)" }}>Issued Date</span>
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{metadata.date}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem" }}>
            <span style={{ color: "var(--text-muted)" }}>Issuer</span>
            <span style={{ color: "var(--primary-light)", fontWeight: 700 }}>{metadata.issuer_name}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
