import { type JSX } from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ title, children, className, onClick }: CardProps): JSX.Element {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "1.5rem",
        cursor: onClick ? "pointer" : undefined,
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.125rem", fontWeight: 700 }}>{title}</h3>
      <div style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}
