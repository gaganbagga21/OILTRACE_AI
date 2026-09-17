import React from "react";

interface InvestigationReportProps {
  navigate: (page: string) => void;
}

export default function InvestigationReport({ navigate }: InvestigationReportProps) {
  return (
    <div
      className="fade-in"
      style={{
        padding: "24px 32px",
        maxWidth: "1200px",
        margin: "0 auto",
        color: "var(--text, #0f172a)",
      }}
    >
      {/* Page Header & Navigation Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          borderBottom: "1px solid var(--border, #e2e8f0)",
          paddingBottom: "16px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span
              style={{
                background: "#ef4444",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: "4px",
                textTransform: "uppercase",
              }}
            >
              CRITICAL INCIDENT REPORT
            </span>
            <span style={{ fontSize: "13px", color: "var(--text-3, #64748b)", fontWeight: 600 }}>
              ID: INC-2024-8892
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>
            Official Maritime Incident & Intelligence Analysis
          </h1>
        </div>

        {/* Top Action Buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            onClick={() => navigate("what-if")}
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              outline: "none",
              background: "var(--blue, #0284c7)",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.15s ease",
            }}
          >
            <span>⚡</span>
            <span>Run Simulation</span>
          </button>

          <button
            onClick={() => window.print()}
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              outline: "none",
              background: "var(--surface-2, #f8fafc)",
              color: "var(--text-2, #334155)",
              border: "1px solid var(--border, #cbd5e1)",
              borderRadius: "6px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>📄</span>
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* Summary Banner */}
      <div
        style={{
          background: "var(--surface, #ffffff)",
          border: "1px solid var(--border, #e2e8f0)",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "24px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ margin: "0 0 12px", fontSize: "16px", fontWeight: 800 }}>
          Executive Investigation Summary
        </h2>
        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6", color: "var(--text-2, #334155)" }}>
          On November 12, 2024, at 14:10 UTC, Sentinel-2 SAR satellite telemetry identified a slick covering
          approximately <strong>14.2 km²</strong> in the North Sea region. Backward drift trajectory reconstruction
          indicates a discharge release window between 13:30 UTC and 18:00 UTC. Correlating AIS trajectories identified
          a primary suspect vessel, <strong>MV OCEAN STAR</strong>, exhibiting an anomalous 4h 22min AIS gap during the exact release timeline.
        </p>
      </div>

      {/* Key Details Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {/* Incident Details Card */}
        <div
          style={{
            background: "var(--surface, #ffffff)",
            border: "1px solid var(--border, #e2e8f0)",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 800, color: "var(--blue, #0284c7)" }}>
            1. Incident Overview
          </h3>
          <div style={{ fontSize: "13px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div><strong>Location:</strong> 54.123° N, 3.456° E</div>
            <div><strong>Detection Method:</strong> Sentinel-2 SAR Satellite</div>
            <div><strong>Spill Area:</strong> 14.2 km²</div>
            <div><strong>Classification:</strong> Heavy Crude Oil</div>
          </div>
        </div>

        {/* Environmental Vectors Card */}
        <div
          style={{
            background: "var(--surface, #ffffff)",
            border: "1px solid var(--border, #e2e8f0)",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 800, color: "var(--blue, #0284c7)" }}>
            2. Environmental Vectors
          </h3>
          <div style={{ fontSize: "13px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div><strong>Wind Speed:</strong> 14.2 knots (NE)</div>
            <div><strong>Current Speed:</strong> 1.8 knots (SW)</div>
            <div><strong>Sea State:</strong> Moderate (1.5m waves)</div>
            <div><strong>Hindcast Model:</strong> OpenDrift / OilTrace AI</div>
          </div>
        </div>

        {/* Top Candidate Vessel Card */}
        <div
          style={{
            background: "var(--surface, #ffffff)",
            border: "1px solid var(--border, #e2e8f0)",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 800, color: "var(--blue, #0284c7)" }}>
            3. Primary Candidate Vessel
          </h3>
          <div style={{ fontSize: "13px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div><strong>Vessel Name:</strong> MV OCEAN STAR</div>
            <div><strong>IMO / MMSI:</strong> 9845123 / 211458000</div>
            <div><strong>Association Score:</strong> <span style={{ color: "#ef4444", fontWeight: 800 }}>91%</span></div>
            <div><strong>AIS Anomaly:</strong> 4h 22min Gap</div>
          </div>
        </div>
      </div>

      {/* Candidate Vessel Intelligence Table */}
      <div
        style={{
          background: "var(--surface, #ffffff)",
          border: "1px solid var(--border, #e2e8f0)",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ margin: "0 0 16px", fontSize: "16px", fontWeight: 800 }}>
          Candidate Vessel Association Breakdown
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border, #e2e8f0)", textAlign: "left" }}>
              <th style={{ padding: "8px 12px" }}>Candidate Vessel</th>
              <th style={{ padding: "8px 12px" }}>Flag</th>
              <th style={{ padding: "8px 12px" }}>Association Score</th>
              <th style={{ padding: "8px 12px" }}>Origin Proximity</th>
              <th style={{ padding: "8px 12px" }}>Investigation Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border, #f1f5f9)" }}>
              <td style={{ padding: "10px 12px", fontWeight: 700 }}>MV OCEAN STAR</td>
              <td style={{ padding: "10px 12px" }}>Panama</td>
              <td style={{ padding: "10px 12px", color: "#ef4444", fontWeight: 800 }}>91%</td>
              <td style={{ padding: "10px 12px" }}>0.8 nautical miles</td>
              <td style={{ padding: "10px 12px" }}>
                <span style={{ background: "#fee2e2", color: "#991b1b", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }}>
                  HIGH PRIORITY
                </span>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border, #f1f5f9)" }}>
              <td style={{ padding: "10px 12px", fontWeight: 700 }}>BALTIC TRADER</td>
              <td style={{ padding: "10px 12px" }}>Liberia</td>
              <td style={{ padding: "10px 12px", color: "#d97706", fontWeight: 800 }}>67%</td>
              <td style={{ padding: "10px 12px" }}>3.4 nautical miles</td>
              <td style={{ padding: "10px 12px" }}>
                <span style={{ background: "#fef3c7", color: "#92400e", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }}>
                  MEDIUM PRIORITY
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px 12px", fontWeight: 700 }}>PACIFIC SKY</td>
              <td style={{ padding: "10px 12px" }}>Marshall Islands</td>
              <td style={{ padding: "10px 12px", color: "#16a34a", fontWeight: 800 }}>34%</td>
              <td style={{ padding: "10px 12px" }}>8.1 nautical miles</td>
              <td style={{ padding: "10px 12px" }}>
                <span style={{ background: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }}>
                  LOW PRIORITY
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Action Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--surface-2, #f8fafc)",
          border: "1px solid var(--border, #e2e8f0)",
          borderRadius: "10px",
          padding: "16px 20px",
        }}
      >
        <span style={{ fontSize: "13px", color: "var(--text-3, #64748b)", fontWeight: 600 }}>
          Need to model altered wind or current dynamics for court testimony?
        </span>
        <button
          onClick={() => navigate("what-if")}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            outline: "none",
            background: "var(--blue, #0284c7)",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "8px 18px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>⚡</span>
          <span>Launch What-If Simulation</span>
        </button>
      </div>
    </div>
  );
}