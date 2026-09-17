interface SpillAnalysisProps { navigate: (page: string) => void; }

const detections = [
  { band: "C-band VV", value: "−4.2 dB", note: "Strong contrast" },
  { band: "C-band VH", value: "−5.8 dB", note: "Cross-pol damping" },
  { band: "Wind speed", value: "14 kt NNE", note: "Optimal detection range" },
  { band: "Sea state", value: "Beaufort 3", note: "Good SAR visibility" },
];

export default function SpillAnalysis({ navigate }: SpillAnalysisProps) {
  return (
    <div className="fade-in" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Spill Analysis</h1>
          <p style={{ margin: "4px 0 0", color: "var(--text-3)", fontSize: 13 }}>OT-2024-0891 · Sentinel-1A SAR · 14 Nov 2024 08:22 UTC</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("origin")}>Origin Reconstruction →</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16 }}>
        <div className="card" style={{ overflow: "hidden" }}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>SAR Image — AI Segmentation Overlay</div>
            <div style={{ display: "flex", gap: 6 }}>
              {["Oil Spill", "Lookalike", "Clear Water"].map((l, i) => (
                <span key={l} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, display: "inline-block", background: i === 0 ? "var(--red)" : i === 1 ? "var(--amber)" : "var(--teal)" }} />
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", background: "linear-gradient(145deg, #0a1520 0%, #0d2038 40%, #081828 100%)", height: 380, overflow: "hidden" }}>
            <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none">
              {[...Array(200)].map((_, i) => (
                <circle key={i} cx={Math.random() * 100} cy={Math.random() * 100} r={0.15 + Math.random() * 0.2} fill="rgba(255,255,255,0.04)" />
              ))}
              {[...Array(80)].map((_, i) => (
                <rect key={`r${i}`} x={Math.random() * 100} y={Math.random() * 100} width={0.5 + Math.random() * 1.5} height={0.5} fill="rgba(100,160,200,0.08)" />
              ))}
              <ellipse cx="42" cy="52" rx="22" ry="12" fill="rgba(0,0,0,0.75)" />
              <ellipse cx="46" cy="56" rx="12" ry="7" fill="rgba(0,0,0,0.6)" />
              <ellipse cx="36" cy="50" rx="8" ry="4" fill="rgba(0,0,0,0.55)" />
              <ellipse cx="42" cy="52" rx="22" ry="12" fill="none" stroke="#ef5350" strokeWidth="0.5" strokeDasharray="1.5 0.8" opacity="0.9" />
              <ellipse cx="46" cy="56" rx="12" ry="7" fill="none" stroke="#ef5350" strokeWidth="0.4" strokeDasharray="1 0.5" opacity="0.8" />
              <radialGradient id="conf">
                <stop offset="0%" stopColor="#ef5350" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ef5350" stopOpacity="0" />
              </radialGradient>
              <ellipse cx="42" cy="52" rx="25" ry="15" fill="url(#conf)" />
              <ellipse cx="72" cy="30" rx="8" ry="4" fill="rgba(0,0,0,0.4)" />
              <ellipse cx="72" cy="30" rx="8" ry="4" fill="none" stroke="#ffa726" strokeWidth="0.4" strokeDasharray="1 0.8" opacity="0.7" />
              <line x1="5" y1="92" x2="25" y2="92" stroke="rgba(255,255,255,0.6)" strokeWidth="0.4" />
              <text x="5" y="95" fontSize="2.8" fill="rgba(255,255,255,0.6)" fontFamily="JetBrains Mono, monospace">0          10 km</text>
              <text x="90" y="10" fontSize="3" fill="rgba(255,255,255,0.6)" fontFamily="JetBrains Mono, monospace">N↑</text>
              <text x="20" y="46" fontSize="2.5" fill="#ef5350" fontFamily="JetBrains Mono, monospace" opacity="0.9">12.4 km² · crude oil</text>
              <text x="62" y="27" fontSize="2.2" fill="#ffa726" fontFamily="JetBrains Mono, monospace" opacity="0.8">lookalike</text>
            </svg>
            <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.7)", color: "#fff", padding: "6px 12px", borderRadius: 8, fontSize: 12, fontFamily: "JetBrains Mono, monospace", border: "1px solid rgba(239,83,80,0.4)" }}>
              Detection Confidence: <strong style={{ color: "#ef5350" }}>91%</strong>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Classification</div>
            {[
              { k: "Substance", v: "Crude Oil", conf: 91, color: "var(--red)" },
              { k: "Emulsification", v: "Moderate (30%)", conf: 72, color: "var(--amber)" },
              { k: "Surface type", v: "Continuous film", conf: 88, color: "var(--blue)" },
              { k: "Weathering stage", v: "18–24 hours", conf: 79, color: "var(--teal)" },
            ].map(row => (
              <div key={row.k} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: "var(--text-3)" }}>{row.k}</span>
                  <span style={{ fontSize: 12, fontFamily: "JetBrains Mono, monospace", color: row.color, fontWeight: 600 }}>{row.v}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${row.conf}%`, background: row.color }} />
                </div>
                <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>Confidence: {row.conf}%</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Geometry</div>
            {[
              { k: "Area", v: "12.4 km²" },
              { k: "Length", v: "8.7 km" },
              { k: "Width (max)", v: "2.1 km" },
              { k: "Orientation", v: "NNE–SSW" },
              { k: "Elongation", v: "4.1:1" },
              { k: "Perimeter", v: "23.6 km" },
            ].map(row => (
              <div key={row.k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--border)", fontSize: 13 }}>
                <span style={{ color: "var(--text-3)" }}>{row.k}</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, fontWeight: 600 }}>{row.v}</span>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>SAR Parameters</div>
            {detections.map(row => (
              <div key={row.band} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "6px 0", borderBottom: "1px solid var(--border)", fontSize: 12 }}>
                <span style={{ color: "var(--text-3)" }}>{row.band}</span>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}>{row.value}</div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)" }}>{row.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}