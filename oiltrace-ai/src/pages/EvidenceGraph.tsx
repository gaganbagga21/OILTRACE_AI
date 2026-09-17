import { useState } from "react";
import {
  SatelliteIcon,
  OilDrumIcon,
  LocationIcon,
  ClockIcon,
  VesselIcon,
  SignalIcon,
  ChartIcon,
  ZapIcon
} from "../components/Icons";

interface EvidenceGraphProps { navigate: (page: string) => void; }

interface Node {
  id: string;
  label: string;
  sub: string;
  type: string;
  x: number;
  y: number;
  color: string;
}

const nodes: Node[] = [
  { id: "sat", label: "SAR Observation", sub: "Sentinel-1A · Nov 14", type: "satellite", x: 8, y: 50, color: "#1565c0" },
  { id: "spill", label: "Oil Spill", sub: "12.4 km² · 91% conf.", type: "spill", x: 26, y: 50, color: "#c62828" },
  { id: "origin", label: "Origin Point", sub: "19.52°N 62.71°E", type: "origin", x: 44, y: 50, color: "#f57c00" },
  { id: "window", label: "Release Window", sub: "Nov 13 · 12:00–16:00", type: "time", x: 62, y: 50, color: "#7b1fa2" },
  { id: "vessel", label: "MV OCEAN STAR", sub: "MMSI 477123456", type: "vessel", x: 80, y: 50, color: "#00796b" },
  { id: "ais", label: "AIS Trajectory", sub: "4h 22min gap", type: "ais", x: 80, y: 22, color: "#0097a7" },
  { id: "behaviour", label: "Behaviour Signal", sub: "Loitering · Course Δ", type: "behaviour", x: 80, y: 78, color: "#558b2f" },
  { id: "score", label: "Association Score", sub: "91% · Priority 1", type: "score", x: 96, y: 50, color: "#c62828" },
];

const edges = [
  { from: "sat", to: "spill", label: "SAR detects" },
  { from: "spill", to: "origin", label: "Backward drift" },
  { from: "origin", to: "window", label: "Temporal match" },
  { from: "window", to: "vessel", label: "AIS proximity" },
  { from: "vessel", to: "ais", label: "has track" },
  { from: "vessel", to: "behaviour", label: "shows" },
  { from: "ais", to: "score", label: "contributes" },
  { from: "behaviour", to: "score", label: "contributes" },
  { from: "window", to: "score", label: "contributes" },
];

const renderIcon = (type: string, color: string) => {
  switch (type) {
    case "satellite": return <SatelliteIcon size={20} color={color} />;
    case "spill": return <OilDrumIcon size={20} color={color} />;
    case "origin": return <LocationIcon size={20} color={color} />;
    case "time": return <ClockIcon size={20} color={color} />;
    case "vessel": return <VesselIcon size={20} color={color} />;
    case "ais": return <SignalIcon size={20} color={color} />;
    case "behaviour": return <ChartIcon size={20} color={color} />;
    case "score": return <ZapIcon size={20} color={color} />;
    default: return null;
  }
};

export default function EvidenceGraph({ navigate }: EvidenceGraphProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedNode = nodes.find(n => n.id === selected);

  return (
    <div className="fade-in" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Evidence Graph</h1>
          <p style={{ margin: "4px 0 0", color: "var(--text-3)", fontSize: 13 }}>OT-2024-0891 · Knowledge graph of evidentiary chain</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("simulation")}>What-If Simulation →</button>
      </div>

      <div className="card" style={{ overflow: "hidden" }}>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", fontWeight: 700, fontSize: 14 }}>Evidentiary Chain — Click nodes to inspect</div>
        <div style={{ position: "relative", height: 400, background: "var(--surface-2)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border-2)" />
              </marker>
            </defs>
            {edges.map(e => {
              const from = nodes.find(n => n.id === e.from)!;
              const to = nodes.find(n => n.id === e.to)!;
              const isHighlighted = selected === e.from || selected === e.to;
              return (
                <g key={`${e.from}-${e.to}`}>
                  <line x1={`${from.x}%`} y1={`${from.y}%`} x2={`${to.x}%`} y2={`${to.y}%`}
                    stroke={isHighlighted ? "var(--blue)" : "var(--border-2)"}
                    strokeWidth={isHighlighted ? 2 : 1} strokeOpacity={isHighlighted ? 1 : 0.5}
                    markerEnd="url(#arrow)" />
                  <text x={`${(from.x + to.x) / 2}%`} y={`${(from.y + to.y) / 2 - 1}%`}
                    fontSize="9" fill="var(--text-muted)" textAnchor="middle"
                    style={{ pointerEvents: "none", userSelect: "none" }}>{e.label}</text>
                </g>
              );
            })}
          </svg>

          {nodes.map(node => {
            const isSelected = selected === node.id;
            return (
              <button key={node.id}
                onClick={() => setSelected(isSelected ? null : node.id)}
                style={{
                  position: "absolute", left: `${node.x}%`, top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                  background: isSelected ? node.color : "var(--surface)",
                  color: isSelected ? "#fff" : node.color,
                  border: `2px solid ${node.color}`, borderRadius: "var(--radius-lg)",
                  padding: "8px 12px", cursor: "pointer", textAlign: "center", minWidth: 110,
                  boxShadow: isSelected ? `0 4px 16px ${node.color}55` : "var(--shadow-sm)",
                  transition: "all 0.2s", zIndex: 2,
                  display: "flex", flexDirection: "column", alignItems: "center"
                }}>
                <div style={{ marginBottom: 4 }}>
                  {renderIcon(node.type, isSelected ? "#fff" : node.color)}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}>{node.label}</div>
                <div style={{ fontSize: 9, opacity: 0.8, marginTop: 2 }}>{node.sub}</div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedNode && (
        <div className="card fade-in" style={{ padding: 20, borderLeft: `4px solid ${selectedNode.color}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              background: `${selectedNode.color}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {renderIcon(selectedNode.type, selectedNode.color)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: selectedNode.color }}>{selectedNode.label}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }}>{selectedNode.sub}</div>
            </div>
          </div>
          <div style={{ fontSize: 13.5, color: "var(--text-2)", lineHeight: 1.65 }}>
            {selectedNode.id === "sat" && "Sentinel-1A C-band SAR observation acquired 14 November 2024 at 08:22 UTC. Detection confidence 91%. NRCS contrast −4.2 dB (VV polarization). Elongated slick oriented NNE–SSW consistent with wind-driven spread."}
            {selectedNode.id === "spill" && "AI-segmented oil spill polygon: 12.4 km², classified as crude oil with moderate emulsification (30%). Estimated age at time of detection: 18–24 hours. Geometric analysis: elongation 4.1:1, length 8.7 km."}
            {selectedNode.id === "origin" && "Reconstructed origin: 19.52°N 62.71°E. Uncertainty radius 2.4 km. Determined via Lagrangian backward particle tracking with 500-member ensemble (HYCOM + ERA5). Confidence: 87%."}
            {selectedNode.id === "window" && "Estimated release window: Nov 13 12:00–16:00 UTC (±2 hours). Probability distribution peaks at 14:05 UTC. Based on oil weathering model, SAR detection time, and backward trajectory convergence."}
            {selectedNode.id === "vessel" && "MV OCEAN STAR (MMSI 477123456, IMO 9472831). Panama-flagged crude oil tanker, 82,540 GT, 243m. Operated by Pacific Maritime Holdings Ltd. Association Score: 91%. Ranked #1 of 847 vessels cross-checked."}
            {selectedNode.id === "ais" && "AIS trajectory analysis shows a 4h 22min transmission gap from 13:42–18:04 UTC Nov 13, overlapping with estimated release window. Pre-gap speed: 0.2 kt (loitering). Post-gap course reversal: 038°→214°."}
            {selectedNode.id === "behaviour" && "Behavioural signals: loitering at <1 kt for extended period, unexpected course reversal (180°), AIS gap during release window, proximity to maritime boundary. Historical pattern: two prior detentions at Fujairah."}
            {selectedNode.id === "score" && "Composite Association Score: 91%. Weighted combination of: Origin Proximity (28%), Drift Consistency (22%), Time Correlation (20%), Trajectory Match (16%), AIS Anomaly (10%), Behaviour Signal (4%). Investigation Priority: Immediate."}
          </div>
        </div>
      )}

      <div className="card" style={{ padding: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Node Types</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {nodes.map(n => (
            <span key={n.id} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: n.color }}>
              {renderIcon(n.type, n.color)} <span style={{ color: "var(--text-3)" }}>{n.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}