import React from "react";

interface VesselIntelligenceProps {
  navigate: (page: string) => void;
}

export default function VesselIntelligence({ navigate }: VesselIntelligenceProps) {
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
      scoreColor: "var(--red)",
      aisGap: "4h 22min",
      gapColor: "var(--amber)",
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
      scoreColor: "var(--amber)",
      aisGap: "1h 05min",
      gapColor: "var(--amber)",
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
      scoreColor: "var(--teal)",
      aisGap: "None",
      gapColor: "var(--teal)",
      status: "Low Priority",
      priority: "Low",
      priorityBadge: "badge-low",
    },
  ];

  return (
    <div className="fade-in" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "var(--text)" }}>Vessel Intelligence</h1>
          <p style={{ margin: "4px 0 0", color: "var(--text-3)", fontSize: 13 }}>
            Dark Fleet Tracking & Proximity Ranking Analysis
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("evidence")}>
          View Evidence Graph →
        </button>
      </div>

      {/* Candidate Vessel Ranking Table */}
      <div className="card" style={{ padding: 24, width: "100%", overflowX: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "var(--text)" }}>Candidate Vessel Ranking</h3>
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>
            847 vessels cross-checked · <strong style={{ color: "var(--text)" }}>3 with significant proximity</strong>
          </span>
        </div>

        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 12px" }}>
          <thead>
            <tr style={{ color: "var(--text-3)", fontSize: 11, textAlign: "left", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <th style={{ padding: "0 12px", width: "70px" }}>Rank</th>
              <th style={{ padding: "0 16px" }}>Vessel Identity</th>
              <th style={{ padding: "0 16px" }}>Type & Flag</th>
              <th style={{ padding: "0 16px", textAlign: "center" }}>Score</th>
              <th style={{ padding: "0 16px" }}>AIS Gap</th>
              <th style={{ padding: "0 16px" }}>Status</th>
              <th style={{ padding: "0 16px" }}>Priority</th>
              <th style={{ padding: "0 12px", textAlign: "right" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidateVessels.map((v) => (
              <tr
                key={v.rank}
                style={{
                  background: "var(--surface-2)",
                  borderRadius: 8,
                }}
              >
                <td style={{ padding: "16px 12px" }}>
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

                <td style={{ padding: "16px" }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text)" }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4, fontFamily: "monospace" }}>
                    MMSI {v.mmsi} · IMO {v.imo}
                  </div>
                </td>

                <td style={{ padding: "16px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-2)" }}>{v.type}</div>
                  <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4 }}>
                    🏴 {v.flag} · {v.gt}
                  </div>
                </td>

                <td style={{ padding: "16px", textAlign: "center" }}>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 10px",
                    borderRadius: 20,
                    border: `2px solid ${v.scoreColor}`,
                    fontWeight: 800,
                    fontSize: 13,
                    color: v.scoreColor,
                    background: "var(--surface)"
                  }}>
                    {v.score}
                  </div>
                </td>

                <td style={{ padding: "16px" }}>
                  <span style={{ fontWeight: 700, fontSize: 13, color: v.gapColor, fontFamily: "monospace" }}>
                    {v.aisGap}
                  </span>
                </td>

                <td style={{ padding: "16px", fontSize: 13, fontWeight: 600, color: "var(--text-2)" }}>
                  {v.status}
                </td>

                <td style={{ padding: "16px" }}>
                  <span className={`badge ${v.priorityBadge}`}>{v.priority}</span>
                </td>

                <td style={{ padding: "16px 12px", textAlign: "right" }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => navigate("evidence")}
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