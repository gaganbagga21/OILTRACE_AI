import React from "react";

interface IncidentDetailsProps {
  navigate: (page: string) => void;
}

export default function IncidentDetails({ navigate }: IncidentDetailsProps) {
  const candidateVessels = [
    {
      rank: 1,
      name: "MV OCEAN STAR",
      mmsi: "477123456",
      imo: "9472831",
      type: "Crude Oil Tanker",
      flag: "Panama",
      gt: "82,540 GT",
      score: "91%",
      scoreColor: "#ef4444",
      aisGap: "4h 22min",
      gapColor: "#f59e0b",
      status: "Under Investigation",
      priority: "Immediate",
      priorityBadge: "badge-high",
    },
    {
      rank: 2,
      name: "MT GULF PIONEER",
      mmsi: "636015892",
      imo: "9381204",
      type: "Product Tanker",
      flag: "Liberia",
      gt: "41,200 GT",
      score: "67%",
      scoreColor: "#f59e0b",
      aisGap: "1h 05min",
      gapColor: "#f59e0b",
      status: "Monitoring",
      priority: "High",
      priorityBadge: "badge-medium",
    },
    {
      rank: 3,
      name: "MV ARABIAN SPIRIT",
      mmsi: "538007124",
      imo: "9609012",
      type: "VLCC",
      flag: "Marshall Islands",
      gt: "158,300 GT",
      score: "48%",
      scoreColor: "#10b981",
      aisGap: "None",
      gapColor: "#10b981",
      status: "Low Priority",
      priority: "Low",
      priorityBadge: "badge-low",
    },
  ];

  return (
    <div className="fade-in" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Incident Details</h1>
          <p style={{ margin: "4px 0 0", color: "var(--text-3)", fontSize: 13 }}>
            Case OT-2024-0891 · Arabian Sea Anomaly Sector
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("spill-analysis")}>
          Spill Analysis →
        </button>
      </div>

      {/* 1. Satellite Spill Map Component (Fixed Dimensions) */}
      <div className="card" style={{
        width: "100%",
        height: "480px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxSizing: "border-box"
      }}>
        {/* Map Header */}
        <div style={{
          padding: "10px 16px",
          height: "44px",
          background: "var(--surface-2)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box"
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>
            🛰 Satellite Spill Map · Sentinel-1A SAR (C-Band VV)
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 11 }}>
            <span style={{ color: "var(--cyan)", fontWeight: 600 }}>● Active Slick Anomaly</span>
            <span style={{ color: "#ef4444", fontWeight: 600 }}>▲ Suspect Track Segment</span>
          </div>
        </div>

        {/* Map Fixed Height Canvas */}
        <div className="ocean-map" style={{
          width: "100%",
          height: "calc(480px - 44px)",
          position: "relative",
          background: "#08111e",
          overflow: "hidden"
        }}>
          <svg style={{ width: "100%", height: "100%", display: "block" }}>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Slick Overlay */}
            <path
              d="M 280 180 Q 360 140 450 200 T 360 290 Z"
              fill="rgba(6, 182, 212, 0.25)"
              stroke="var(--cyan)"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />

            {/* Vessel Track */}
            <path
              d="M 120 360 L 320 220 L 580 140"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            <circle cx="320" cy="220" r="14" fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth="2" />
            <circle cx="320" cy="220" r="5" fill="#ef4444" />
          </svg>

          {/* Map Overlay Badge */}
          <div style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            background: "rgba(15, 23, 42, 0.9)",
            backdropFilter: "blur(6px)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: 11,
            color: "#f0f4f8",
            lineHeight: 1.5
          }}>
            <div><strong>Coord:</strong> 19.52° N, 62.71° E</div>
            <div><strong>Acquisition:</strong> 14 Nov 2024 08:22 UTC</div>
          </div>
        </div>
      </div>

      {/* 2. Decluttered Candidate Vessel Ranking Table */}
      <div className="card" style={{ padding: 20, width: "100%", overflowX: "auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>Candidate Vessel Ranking</h3>
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>
            847 vessels cross-checked · <strong>3 with significant proximity</strong>
          </span>
        </div>

        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
          <thead>
            <tr style={{ color: "var(--text-3)", fontSize: 11, textAlign: "left", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              <th style={{ padding: "8px 12px", width: "60px" }}>Rank</th>
              <th style={{ padding: "8px 12px", width: "220px" }}>Vessel Identity</th>
              <th style={{ padding: "8px 12px", width: "200px" }}>Type & Flag</th>
              <th style={{ padding: "8px 12px", width: "130px", textAlign: "center" }}>Score</th>
              <th style={{ padding: "8px 12px", width: "110px" }}>AIS Gap</th>
              <th style={{ padding: "8px 12px", width: "150px" }}>Status</th>
              <th style={{ padding: "8px 12px", width: "110px" }}>Priority</th>
              <th style={{ padding: "8px 12px", width: "100px", textAlign: "right" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidateVessels.map((v) => (
              <tr
                key={v.rank}
                style={{
                  background: "var(--surface-2)",
                  borderRadius: 10,
                  transition: "all 0.15s ease-in-out",
                }}
              >
                <td style={{ padding: "14px 12px" }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: v.scoreColor,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 13
                  }}>
                    {v.rank}
                  </div>
                </td>

                <td style={{ padding: "14px 12px" }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text)", lineHeight: 1.2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4, fontFamily: "monospace" }}>
                    MMSI {v.mmsi} · IMO {v.imo}
                  </div>
                </td>

                <td style={{ padding: "14px 12px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-2)", lineHeight: 1.2 }}>{v.type}</div>
                  <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4 }}>
                    🏴 {v.flag} · {v.gt}
                  </div>
                </td>

                <td style={{ padding: "14px 12px", textAlign: "center" }}>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: `3px solid ${v.scoreColor}`,
                    fontWeight: 800,
                    fontSize: 13,
                    color: v.scoreColor
                  }}>
                    {v.score}
                  </div>
                </td>

                <td style={{ padding: "14px 12px" }}>
                  <span style={{ fontWeight: 700, fontSize: 12.5, color: v.gapColor, fontFamily: "monospace" }}>
                    {v.aisGap}
                  </span>
                </td>

                <td style={{ padding: "14px 12px", fontSize: 12.5, fontWeight: 600, color: "var(--text-2)" }}>
                  {v.status}
                </td>

                <td style={{ padding: "14px 12px" }}>
                  <span className={`badge ${v.priorityBadge}`}>{v.priority}</span>
                </td>

                {/* Working Details -> Button Routes to Vessel Intel Page */}
                <td style={{ padding: "14px 12px", textAlign: "right" }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => navigate("vessel-intelligence")}
                    style={{
                      padding: "6px 14px",
                      fontSize: 12,
                      fontWeight: 700,
                      borderRadius: 6,
                      cursor: "pointer"
                    }}
                  >
                    Details →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}