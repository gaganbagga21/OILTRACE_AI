import React from "react";

interface OriginProps {
  navigate: (page: string) => void;
}

export default function OriginReconstruction({ navigate }: OriginProps) {
  return (
    <div className="fade-in" style={{
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: "calc(100vh - 80px)",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>
      {/* Page Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>Drift Modeling & Backward Origin Reconstruction</h1>
          <p style={{ margin: "2px 0 0", color: "var(--text-3)", fontSize: 12.5 }}>
            Backward Hydrodynamic Particle Tracking (12-Hour Wind/Current Simulation)
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("evidence")}>
          View Evidence Graph →
        </button>
      </div>

      {/* Main Container set up to prevent bottom clipping */}
      <div className="card" style={{
        flex: 1,
        minHeight: 480,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        {/* Top Data Bar */}
        <div style={{
          padding: "10px 16px",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface-2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-2)" }}>
            📍 Converged Coordinates: <span style={{ fontFamily: "monospace", color: "var(--blue)" }}>19.52° N, 62.71° E</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span className="badge badge-high">91% Origin Probability</span>
            <span className="badge badge-low">Current Vector: 1.4 kt SSW</span>
          </div>
        </div>

        {/* Dynamic Satellite Drift Canvas */}
        <div className="ocean-map" style={{
          flex: 1,
          width: "100%",
          position: "relative",
          minHeight: 360,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff"
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            {/* Trajectory Drift Path */}
            <path
              d="M 180 340 Q 340 260 490 190 T 720 120"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="3"
              strokeDasharray="6 4"
            />
            {/* Slick Origin Hotspot */}
            <circle cx="490" cy="190" r="18" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="2" />
            <circle cx="490" cy="190" r="6" fill="#ef4444" />
          </svg>

          {/* Floating Map Legend (Positioned clearly inside canvas) */}
          <div style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "rgba(15, 23, 42, 0.88)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: 11,
            color: "#f0f4f8"
          }}>
            <div>🔵 Current Slick Location (14 Nov 08:22 UTC)</div>
            <div>🔴 Estimated Release Point (13 Nov 14:05 UTC)</div>
          </div>
        </div>
      </div>
    </div>
  );
}