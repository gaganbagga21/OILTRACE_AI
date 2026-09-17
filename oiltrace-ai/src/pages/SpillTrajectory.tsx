import React, { useState } from "react";

interface Props {
  navigate: (page: string) => void;
}

export default function SpillTrajectory({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<"hindcast" | "current" | "forecast">("hindcast");

  return (
    <div className="fade-in" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>🌊 Spill Trajectory & Hindcasting</h1>
          <p style={{ margin: "4px 0 0", color: "var(--text-3)", fontSize: 13 }}>
            Hydrodynamic ocean drift models, backward origin reconstruction, and coastal risk forecasting
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("vessel-correlation")}>
          Correlate Vessels →
        </button>
      </div>

      {/* Trajectory Controls & Mode Switcher */}
      <div className="card" style={{ padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, background: "var(--surface-2)", padding: 4, borderRadius: 8 }}>
          <button
            onClick={() => setActiveTab("hindcast")}
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: "none",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              background: activeTab === "hindcast" ? "var(--blue)" : "transparent",
              color: activeTab === "hindcast" ? "#fff" : "var(--text-2)",
            }}
          >
            ⏪ Hindcast (Origin Reconstruction)
          </button>
          <button
            onClick={() => setActiveTab("current")}
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: "none",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              background: activeTab === "current" ? "var(--blue)" : "transparent",
              color: activeTab === "current" ? "#fff" : "var(--text-2)",
            }}
          >
            📍 Current Position
          </button>
          <button
            onClick={() => setActiveTab("forecast")}
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: "none",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              background: activeTab === "forecast" ? "var(--blue)" : "transparent",
              color: activeTab === "forecast" ? "#fff" : "var(--text-2)",
            }}
          >
            ⏩ Forecast (+24h Coastal Risk)
          </button>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 12, color: "var(--text-2)" }}>
          <div><strong>Wind Vectors:</strong> 14.2 kts SW ↙</div>
          <div><strong>Current Vectors:</strong> 1.1 kts NE ↗</div>
        </div>
      </div>

      {/* Main Map Viewport */}
      <div className="card" style={{ width: "100%", height: "480px", position: "relative", overflow: "hidden", background: "#08111e" }}>
        <svg style={{ width: "100%", height: "100%", display: "block" }}>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Hindcast Trajectory Line */}
          {(activeTab === "hindcast" || activeTab === "current") && (
            <>
              <path d="M 220 380 Q 320 300 450 200" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" />
              {/* Origin Area Box */}
              <rect x="180" y="340" width="80" height="80" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" rx="8" />
              <circle cx="220" cy="380" r="6" fill="#ef4444" />
              <text x="140" y="440" fill="#ef4444" fontSize="12" fontWeight="700">Probable Origin Zone</text>
            </>
          )}

          {/* Forecast Trajectory Line */}
          {(activeTab === "forecast" || activeTab === "current") && (
            <>
              <path d="M 450 200 Q 580 120 720 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 4" />
              <circle cx="720" cy="90" r="28" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="680" y="135" fill="#f59e0b" fontSize="12" fontWeight="700">24h Predicted Impact Zone</text>
            </>
          )}

          {/* Current Oil Slick Polygon */}
          <path d="M 410 180 Q 480 160 510 210 T 430 230 Z" fill="rgba(6, 182, 212, 0.35)" stroke="var(--cyan)" strokeWidth="2" />
          <circle cx="450" cy="200" r="5" fill="#06b6d4" />
        </svg>

        {/* Map Information Card */}
        <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 12 }}>
          {activeTab === "hindcast" && (
            <div>
              <div style={{ color: "#ef4444", fontWeight: 800 }}>PROBABLE RELEASE ORIGIN</div>
              <div>Coordinates: 19.12° N, 72.82° E</div>
              <div>Estimated Time Window: 14:20 – 17:10 UTC</div>
            </div>
          )}
          {activeTab === "current" && (
            <div>
              <div style={{ color: "var(--cyan)", fontWeight: 800 }}>CURRENT DETECTED SLICK</div>
              <div>Area: 4.82 km² · Length: 5.6 km</div>
              <div>Center: 19.52° N, 62.71° E</div>
            </div>
          )}
          {activeTab === "forecast" && (
            <div>
              <div style={{ color: "#f59e0b", fontWeight: 800 }}>⚠️ COASTAL RISK WARNING</div>
              <div>Potential Landfall: 18 Hours</div>
              <div>Target Region: Northern Marine Protected Sanctuary</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}