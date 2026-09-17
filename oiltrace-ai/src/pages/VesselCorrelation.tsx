import React from "react";

export default function VesselCorrelation() {
  const vessels = [
    { rank: 1, name: "MV OCEAN STAR", mmsi: "311000842", score: 96.4, flag: "Panama", type: "Crude Oil Tanker", anomaly: "4h 22m AIS Gap" },
    { rank: 2, name: "MT NORDIC GEM", mmsi: "636018420", score: 81.2, flag: "Liberia", type: "Chemical Tanker", anomaly: "Route Deviation" },
    { rank: 3, name: "SFL TRINITY", mmsi: "538006112", score: 54.0, flag: "Marshall Is.", type: "Bulk Carrier", anomaly: "Speed Drop" },
  ];

  return (
    <div className="fade-in" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: "var(--text)", margin: 0 }}>
          Vessel Correlation & Association Ranking
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-3)", margin: "4px 0 0" }}>
          Rank candidate vessels based on AIS telemetry, trajectory overlap, and spatial-temporal proximity.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {vessels.map((v) => (
          <div
            key={v.mmsi}
            className="card"
            style={{
              padding: 20,
              display: "grid",
              gridTemplateColumns: "60px 1.5fr 1fr 1fr 120px",
              alignItems: "center",
              gap: 16,
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 900, color: v.rank === 1 ? "var(--red)" : "var(--blue)" }}>
              #{v.rank}
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text)" }}>{v.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-3)" }}>MMSI: {v.mmsi} | {v.flag}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "var(--text-3)" }}>TYPE</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-2)" }}>{v.type}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "var(--text-3)" }}>DETECTED ANOMALY</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--amber)" }}>{v.anomaly}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "var(--text-3)" }}>MATCH CONFIDENCE</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: v.score > 90 ? "var(--red)" : "var(--blue)" }}>
                {v.score}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}