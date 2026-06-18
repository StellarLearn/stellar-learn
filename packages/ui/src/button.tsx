"use client";

import { type JSX } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "#3b82f6",
    color: "white",
    border: "none",
  },
  secondary: {
    background: "transparent",
    color: "inherit",
    border: "2px solid #d1d5db",
  },
  ghost: {
    background: "transparent",
    color: "inherit",
    border: "none",
  },
};

export function Button({
  children,
  variant = "primary",
  onClick,
  className,
  disabled,
}: ButtonProps): JSX.Element {
  const baseStyle: React.CSSProperties = {
    padding: "0.625rem 1.25rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background 0.2s, opacity 0.2s",
    ...variantStyles[variant],
  };

  return (
    <button style={baseStyle} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
