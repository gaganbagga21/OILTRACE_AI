import React, { useState, useEffect } from "react";

export default function IncidentReplay() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { time: "02:15 UTC", x: 15, y: 30, title: "Vessel Entry", desc: "MV OCEAN STAR enters EEZ coordinates." },
    { time: "03:10 UTC", x: 35, y: 45, title: "AIS Gap Initiated", desc: "Transponder turned off near high-risk channel." },
    { time: "03:45 UTC", x: 55, y: 50, title: "Discharge Event", desc: "Slick discharge detected via radar hindcast." },
    { time: "06:30 UTC", x: 75, y: 65, title: "AIS Restored", desc: "Transponder reactivated 18nm east." },
    { time: "08:15 UTC", x: 90, y: 80, title: "Sentinel-1A SAR Match", desc: "12.4 km² slick matched with vessel trajectory." },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const activePos = steps[currentStep];

  return (
    <div className="fade-in" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", margin: 0 }}>Incident Replay</h1>
        <button className="btn btn-primary btn-sm" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸️ Pause Replay" : "▶️ Start Moving Replay"}
        </button>
      </div>

      {/* Radar Map Container */}
      <div
        className="card"
        style={{
          position: "relative",
          height: 440,
          background: "radial-gradient(circle, #0b192c 0%, #030811 100%)",
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        {/* Radar Ring Visuals */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 300, height: 300, border: "1px solid rgba(0, 255, 200, 0.15)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 180, height: 180, border: "1px solid rgba(0, 255, 200, 0.2)", borderRadius: "50%" }} />

        {/* Trail Dots */}
        {steps.map((s, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: idx <= currentStep ? "var(--teal)" : "rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
            }}
          />
        ))}

        {/* Moving Vessel Indicator */}
        <div
          style={{
            position: "absolute",
            left: `${activePos.x}%`,
            top: `${activePos.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.8s ease-in-out",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 28, filter: "drop-shadow(0 0 8px #00f2fe)" }}>🚢</span>
          <span className="badge badge-high" style={{ marginTop: 4, fontSize: 10 }}>
            {activePos.time}
          </span>
        </div>

        {/* Info Card Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            background: "rgba(10, 18, 30, 0.85)",
            padding: 16,
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(8px)",
            maxWidth: 320,
          }}
        >
          <div style={{ fontSize: 11, color: "var(--teal)", fontWeight: 800 }}>STEP {currentStep + 1} OF 5</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginTop: 2 }}>{activePos.title}</div>
          <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 4 }}>{activePos.desc}</div>
        </div>
      </div>
    </div>
  );
}