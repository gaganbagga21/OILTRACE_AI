import React from "react";

interface DashboardProps {
  navigate: (page: string) => void;
}

export default function Dashboard({ navigate }: DashboardProps) {
  return (
    <div className="fade-in" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Incident Overview & Intelligence</h1>
          <p style={{ margin: "4px 0 0", color: "var(--text-3)", fontSize: 13 }}>
            Active Spill Investigation · Case OT-2024-0891
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("ocean-map")}>
          Open Ocean Map →
        </button>
      </div>

      {/* Metric Cards Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {[
          { title: "Slick Coverage Area", value: "12.4 km²", detail: "Sentinel-1A SAR", color: "var(--red)" },
          { title: "Likely Origin Point", value: "19.52°N 62.71°E", detail: "Confidence 91%", color: "var(--amber)" },
          { title: "Suspect Vessel", value: "MV OCEAN STAR", detail: "MMSI 477123456", color: "var(--blue)" },
          { title: "AIS Disruption Window", value: "4h 22m", detail: "Silent loitering detected", color: "var(--cyan)" },
        ].map((item) => (
          <div key={item.title} className="card" style={{ padding: 18, borderLeft: `4px solid ${item.color}` }}>
            <div style={{ fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", fontWeight: 700 }}>
              {item.title}
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, margin: "6px 0 2px", fontFamily: "monospace" }}>
              {item.value}
            </div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{item.detail}</div>
          </div>
        ))}
      </div>

      {/* Quick Navigation Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <div className="card" style={{ padding: 20, cursor: "pointer" }} onClick={() => navigate("origin-reconstruction")}>
          <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700 }}>Backward Drift Model →</h3>
          <p style={{ margin: 0, fontSize: 12.5, color: "var(--text-3)", lineHeight: 1.5 }}>
            Reconstruct oil slick trajectory backwards using HYCOM hydrodynamic current vectors and ERA5 wind data.
          </p>
        </div>

        <div className="card" style={{ padding: 20, cursor: "pointer" }} onClick={() => navigate("evidence")}>
          <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700 }}>Evidence Graph →</h3>
          <p style={{ margin: 0, fontSize: 12.5, color: "var(--text-3)", lineHeight: 1.5 }}>
            Inspect legal node connections between radar anomaly detections, dark fleet AIS tracks, and vessel ownership.
          </p>
        </div>

        <div className="card" style={{ padding: 20, cursor: "pointer" }} onClick={() => navigate("simulation")}>
          <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700 }}>What-If Simulation →</h3>
          <p style={{ margin: 0, fontSize: 12.5, color: "var(--text-3)", lineHeight: 1.5 }}>
            Adjust current speed, wind direction, and slick decay parameters to evaluate counter-arguments.
          </p>
        </div>
      </div>
    </div>
  );
}