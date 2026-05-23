import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType =
  "image/png";

export default function OGImage() {

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "#020617",
          color: "white",
        }}
      >

        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
          }}
        >
          Nag&apos;s Overflow
        </h1>

        <p
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#94a3b8",
          }}
        >
          React, JavaScript, AI Engineering & System Design
        </p>

      </div>
    ),
    size
  );
}
