import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StellarLearn | Learn-to-Earn for African Developers",
  description:
    "The decentralised education platform empowering African developers to master blockchain and earn XLM rewards.",
  openGraph: {
    title: "StellarLearn",
    description: "Learn blockchain. Earn rewards. Build the future.",
    siteName: "StellarLearn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
