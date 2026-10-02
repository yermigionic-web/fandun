import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          background: "#F6E4DE",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2A2422",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        F:D
      </div>
    ),
    { ...size },
  );
}
