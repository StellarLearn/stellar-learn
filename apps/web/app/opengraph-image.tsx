import { ImageResponse } from "next/og";

export const alt = "StellarLearn — Learn Blockchain. Earn Crypto. Get Certified.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
          padding: "60px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: "0 0 20px",
          }}
        >
          StellarLearn
        </h1>
        <p
          style={{
            fontSize: 36,
            color: "#f59e0b",
            margin: 0,
            textAlign: "center",
          }}
        >
          Learn Blockchain. Earn Crypto. Get Certified.
        </p>
      </div>
    ),
    { ...size }
  );
}
