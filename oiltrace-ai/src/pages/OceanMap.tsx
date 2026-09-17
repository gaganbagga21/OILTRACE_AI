import React from "react";

interface OceanMapProps {
  navigate: (page: string) => void;
}

export default function OceanMap({ navigate }: OceanMapProps) {
  return (
    <div className="fade-in" style={{
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: "calc(100vh - 60px)",
      boxSizing: "border-box"
    }}>
      {/* Header Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>Maritime Satellite Ocean Map</h1>
          <p style={{ margin: "2px 0 0", color: "var(--text-3)", fontSize: 12.5 }}>
            Copernicus Sentinel-1A SAR & Live AIS Track Overlay
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("origin-reconstruction")}>
          Origin Drift Model →
        </button>
      </div>

      {/* Full-Height Ocean Canvas Box */}
      <div className="card" style={{
        flex: 1,
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        <div style={{
          padding: "10px 16px",
          background: "var(--surface-2)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12
        }}>
          <div><strong>Active Region:</strong> Arabian Sea Central Sector (19.5°N, 62.7°E)</div>
          <div style={{ display: "flex", gap: 12 }}>
            <span style={{ color: "var(--cyan)", fontWeight: 600 }}>● SAR Slick Overlay</span>
            <span style={{ color: "var(--amber)", fontWeight: 600 }}>▲ MV OCEAN STAR AIS</span>
          </div>
        </div>

        {/* Map Canvas Background */}
        <div className="ocean-map" style={{
          flex: 1,
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            {/* Grid Lines */}
            <line x1="0" y1="200" x2="100%" y2="200" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <line x1="0" y1="400" x2="100%" y2="400" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <line x1="300" y1="0" x2="300" y2="100%" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <line x1="600" y1="0" x2="600" y2="100%" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

            {/* Slick Detection Polygon */}
            <path d="M 350 220 Q 420 180 500 240 T 380 310 Z" fill="rgba(2, 132, 199, 0.35)" stroke="var(--cyan)" strokeWidth="2" />
          </svg>

          <div style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "10px 14px",
            borderRadius: 8,
            fontSize: 11,
            color: "var(--text-2)"
          }}>
            <div><strong>Resolution:</strong> 10m Ground Pixel</div>
            <div><strong>Sensor Band:</strong> C-Band VV Synthetic Aperture Radar</div>
          </div>
        </div>
      </div>
    </div>
  );
}