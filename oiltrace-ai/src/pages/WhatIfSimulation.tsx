import { useState } from "react";

interface SimulationProps { navigate: (page: string) => void; }

export default function WhatIfSimulation({ navigate }: SimulationProps) {
  const [windSpeed, setWindSpeed] = useState(14);
  const [windDir, setWindDir] = useState(22);
  const [currentSpeed, setCurrentSpeed] = useState(0.8);
  const [currentDir, setCurrentDir] = useState(112);
  const [simRun, setSimRun] = useState(false);

  const dirLabel = (deg: number) => {
    const dirs = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return dirs[Math.round(deg / 22.5) % 16];
  };

  const windDelta = windSpeed - 14;
  const simX = 42 + (windSpeed / 14) * 8 + Math.sin((windDir * Math.PI) / 180) * 5;
  const simY = 52 + (currentSpeed / 0.8) * 4 + Math.cos((currentDir * Math.PI) / 180) * 3;

  return (
    <div className="fade-in" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>What-If Simulation</h1>
          <p style={{ margin: "4px 0 0", color: "var(--text-3)", fontSize: 13 }}>Adjust environmental parameters and compare spill trajectories</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("report")}>Investigation Report →</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Simulation Controls</div>

            {[
              { label: "🌬️ Wind Speed", val: windSpeed, set: setWindSpeed, min: 0, max: 35, step: 1, unit: "kt", color: "var(--blue)" },
              { label: "🧭 Wind Direction", val: windDir, set: setWindDir, min: 0, max: 360, step: 1, unit: `° ${dirLabel(windDir)}`, color: "var(--blue)" },
              { label: "🌊 Current Speed", val: currentSpeed, set: setCurrentSpeed, min: 0, max: 3, step: 0.1, unit: "kt", color: "var(--cyan)" },
              { label: "🧭 Current Direction", val: currentDir, set: setCurrentDir, min: 0, max: 360, step: 1, unit: `° ${dirLabel(currentDir)}`, color: "var(--cyan)" },
            ].map(ctrl => (
              <div key={ctrl.label} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-3)" }}>{ctrl.label}</label>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, fontWeight: 700, color: ctrl.color }}>{typeof ctrl.val === "number" ? ctrl.val.toFixed(ctrl.step < 1 ? 1 : 0) : ctrl.val} {ctrl.unit}</span>
                </div>
                <input type="range" min={ctrl.min} max={ctrl.max} step={ctrl.step} value={ctrl.val}
                  onChange={e => ctrl.set(+e.target.value as never)}
                  style={{ width: "100%", accentColor: ctrl.color }} />
              </div>
            ))}

            <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setSimRun(true)}>▶ Run Simulation</button>
            <button className="btn btn-secondary btn-sm" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
              onClick={() => { setWindSpeed(14); setWindDir(22); setCurrentSpeed(0.8); setCurrentDir(112); setSimRun(false); }}>Reset to Baseline</button>
          </div>

          {simRun && (
            <div className="card fade-in" style={{ padding: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Δ vs Baseline</div>
              {[
                { label: "Wind Δ", value: `${windDelta > 0 ? "+" : ""}${windDelta} kt`, color: Math.abs(windDelta) > 5 ? "var(--red)" : "var(--teal)" },
                { label: "Drift distance Δ", value: `+${(Math.abs(windDelta) * 0.8).toFixed(1)} km`, color: "var(--amber)" },
                { label: "Spill displacement", value: `${(Math.hypot(simX - 42, simY - 52)).toFixed(1)} km`, color: "var(--blue)" },
                { label: "Area change (est.)", value: `+${(Math.abs(windDelta) * 0.4).toFixed(1)} km²`, color: "var(--red)" },
              ].map(row => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--border)", fontSize: 13 }}>
                  <span style={{ color: "var(--text-3)" }}>{row.label}</span>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 700, color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Trajectory Comparison</div>
              <div style={{ display: "flex", gap: 12, fontSize: 11, alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 16, height: 3, background: "var(--cyan)", display: "inline-block" }}></span>Baseline</span>
                {simRun && <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 16, height: 3, background: "var(--amber)", display: "inline-block" }}></span>Simulated</span>}
              </div>
            </div>
            <div style={{ position: "relative", height: 380 }} className="ocean-map">
              <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none">
                {[20, 40, 60, 80].map(v => (
                  <g key={v} opacity="0.1"><line x1={v} y1="0" x2={v} y2="100" stroke="#7ec8e3" strokeWidth="0.3" /><line x1="0" y1={v} x2="100" y2={v} stroke="#7ec8e3" strokeWidth="0.3" /></g>
                ))}
                <circle cx="44" cy="46" r="1.5" fill="#ffd700" opacity="0.9" />
                <circle cx="44" cy="46" r="3" stroke="#ffd700" strokeWidth="0.4" fill="none" opacity="0.6" />
                <ellipse cx="42" cy="52" rx="18" ry="10" fill="rgba(198,40,40,0.45)" />
                <ellipse cx="42" cy="52" rx="18" ry="10" fill="none" stroke="#00e5ff" strokeWidth="0.6" strokeDasharray="2 1" opacity="0.8" />
                <path d="M44 46 Q43 49 42 52" stroke="#00e5ff" strokeWidth="0.8" fill="none" strokeDasharray="1.5 0.5" />
                {simRun && (
                  <>
                    <ellipse cx={simX} cy={simY} rx="18" ry="10" fill="rgba(245,124,0,0.35)" />
                    <ellipse cx={simX} cy={simY} rx="18" ry="10" fill="none" stroke="#ffa726" strokeWidth="0.6" strokeDasharray="2 1" opacity="0.8" />
                    <path d={`M44 46 Q${(44 + simX) / 2} ${(46 + simY) / 2 - 2} ${simX} ${simY}`} stroke="#ffa726" strokeWidth="0.8" fill="none" strokeDasharray="1.5 0.5" />
                    <text x={simX + 2} y={simY - 2} fontSize="2.5" fill="#ffa726" fontFamily="JetBrains Mono, monospace">SIM</text>
                  </>
                )}
                <text x="38" y="50" fontSize="2.5" fill="#00e5ff" fontFamily="JetBrains Mono, monospace">BASELINE</text>
                <line x1="5" y1="92" x2="25" y2="92" stroke="rgba(255,255,255,0.5)" strokeWidth="0.4" />
                <text x="5" y="95" fontSize="2.5" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace">10 km</text>
              </svg>
              <div style={{ position: "absolute", top: 10, right: 12, background: "rgba(0,0,0,0.65)", borderRadius: 8, padding: "8px 12px", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ color: "#ffd700" }}>Wind: {windSpeed} kt {dirLabel(windDir)}</div>
                <div style={{ color: "#00bcd4" }}>Current: {currentSpeed.toFixed(1)} kt {dirLabel(currentDir)}</div>
                {simRun && <div style={{ color: "#ffa726", marginTop: 4 }}>● Simulation active</div>}
              </div>
            </div>
          </div>

          <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", fontWeight: 700, fontSize: 14 }}>Scenario Comparison</div>
            <table className="data-table">
              <thead><tr><th>Parameter</th><th>Baseline (Actual)</th><th>Simulated</th><th>Impact</th></tr></thead>
              <tbody>
                {[
                  { p: "Wind Speed", base: "14 kt NNE", sim: `${windSpeed} kt ${dirLabel(windDir)}`, impact: Math.abs(windDelta) > 5 ? "High" : Math.abs(windDelta) > 2 ? "Moderate" : "Low" },
                  { p: "Current Speed", base: "0.8 kt ESE", sim: `${currentSpeed.toFixed(1)} kt ${dirLabel(currentDir)}`, impact: Math.abs(currentSpeed - 0.8) > 0.5 ? "High" : "Low" },
                  { p: "Drift Distance (18h)", base: "22.4 km", sim: `${(22.4 + Math.abs(windDelta) * 0.8).toFixed(1)} km`, impact: "Trajectory shift" },
                  { p: "Estimated Spill Area", base: "12.4 km²", sim: `${(12.4 + Math.abs(windDelta) * 0.4).toFixed(1)} km²`, impact: "Spread change" },
                ].map(row => (
                  <tr key={row.p}>
                    <td style={{ fontWeight: 600, fontSize: 13 }}>{row.p}</td>
                    <td><span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "var(--cyan)" }}>{row.base}</span></td>
                    <td><span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: simRun ? "var(--amber)" : "var(--text-muted)" }}>{simRun ? row.sim : "—"}</span></td>
                    <td><span className={`badge badge-${simRun ? (row.impact === "High" ? "critical" : row.impact === "Moderate" ? "high" : "low") : "closed"}`}>{simRun ? row.impact : "Pending"}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}