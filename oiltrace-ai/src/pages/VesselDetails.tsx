import OceanMap from "../components/OceanMap";

interface VesselDetailsProps {
  navigate: (page: string) => void;
}

const aiReasons = [
  {
    factor: "AIS Gap During Release Window",
    weight: 28,
    evidence:
      "4h 22min AIS blackout from 13:42–18:04 UTC Nov 13, overlapping perfectly with reconstructed release window (12:00–16:00 UTC). Gap coincides with vessel being within 8.3 km of origin point.",
    score: 94,
    color: "var(--red)",
  },
  {
    factor: "Origin Proximity",
    weight: 22,
    evidence:
      "At time of AIS gap commencement, vessel was positioned 8.3 km from reconstructed origin point. No other vessel in AIS database was within 25 km during release window.",
    score: 94,
    color: "var(--red)",
  },
  {
    factor: "Drift Consistency",
    weight: 20,
    evidence:
      "Spill trajectory simulated from vessel last-known position at gap start is consistent with observed spill location at detection time (residual: 1.2 km). Drift model driven by HYCOM + ERA5.",
    score: 93,
    color: "var(--amber)",
  },
  {
    factor: "Time Correlation",
    weight: 16,
    evidence:
      "Transit through origin zone during release window probability 89%. Vessel course and speed prior to gap place it at reconstructed origin ± 45 minutes.",
    score: 89,
    color: "var(--amber)",
  },
  {
    factor: "Trajectory Match",
    weight: 10,
    evidence:
      "Backward particle tracking from spill centroid converges with vessel's southward track with 88% trajectory overlap. Pre-gap course 038° reverses to 214° post-gap.",
    score: 88,
    color: "var(--blue)",
  },
  {
    factor: "Behaviour Signal",
    weight: 4,
    evidence:
      "Speed reduction to 0.2 kt (loitering) prior to AIS gap. Subsequent course reversal 180°. Historical port calls include Fujairah (bunker) and Kharg Island (load).",
    score: 82,
    color: "var(--blue)",
  },
];

const timeline = [
  {
    t: "Nov 12 · 22:14",
    e: "Vessel departs Kharg Island (Iran) — laden",
    type: "port",
  },
  {
    t: "Nov 13 · 08:30",
    e: "Enters Arabian Sea exclusion zone · Speed 11.4 kt",
    type: "nav",
  },
  {
    t: "Nov 13 · 13:12",
    e: "Speed drops to 0.8 kt → 0.2 kt · Heading variable",
    type: "alert",
  },
  {
    t: "Nov 13 · 13:42",
    e: "AIS transmission ceases (gap begins)",
    type: "gap",
  },
  {
    t: "Nov 13 · 18:04",
    e: "AIS resumes · Course 214° · Speed 10.8 kt",
    type: "gap",
  },
  {
    t: "Nov 14 · 06:20",
    e: "AIS position: 19.8°N 63.2°E",
    type: "nav",
  },
  {
    t: "Nov 14 · 08:22",
    e: "Oil spill detected by Sentinel-1A SAR",
    type: "alert",
  },
];

export default function VesselDetails({
  navigate,
}: VesselDetailsProps) {
  return (
    <div
      className="fade-in"
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 20 }}>🚢</span>

            <h1
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              MV OCEAN STAR
            </h1>

            <span className="badge badge-critical">
              Rank #1
            </span>

            <span
              style={{
                padding: "3px 10px",
                borderRadius: 99,
                background: "var(--red-light)",
                color: "var(--red)",
                fontSize: 11,
                fontWeight: 700,
                border:
                  "1px solid color-mix(in srgb, var(--red) 25%, transparent)",
              }}
            >
              Under Investigation
            </span>
          </div>

          <div
            style={{
              color: "var(--text-3)",
              fontSize: 13,
            }}
          >
            MMSI 477123456 · IMO 9472831 · Panama · Crude Oil Tanker ·
            82,540 GT · 243m
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => navigate("replay")}
          >
            Replay →
          </button>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate("report")}
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* MAP + ASSOCIATION SCORE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 16,
        }}
      >
        {/* MAP CARD */}
        <div
          className="card"
          style={{
            overflow: "hidden",
          }}
        >
          {/* MAP HEADER */}
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              AIS Trajectory · Nov 12–14, 2024
            </div>

            <div
              style={{
                display: "flex",
                gap: 6,
                fontSize: 11,
              }}
            >
              <span style={{ color: "var(--cyan)" }}>
                ━━ AIS track
              </span>

              <span style={{ color: "var(--amber)" }}>
                ⚠ AIS gap
              </span>
            </div>
          </div>

          {/* MAP VIEWPORT */}
          <div
            style={{
              height: 500,
              minHeight: 500,
              width: "100%",
              overflow: "auto",
              position: "relative",
            }}
          >
            <OceanMap
              height={500}
              showSpills
              showTrack
              showOrigin
            />
          </div>

          {/* AIS WARNING */}
          <div
            style={{
              padding: "10px 16px",
              background: "var(--amber-light)",
              borderTop:
                "1px solid color-mix(in srgb, var(--amber) 20%, transparent)",
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "var(--amber)",
                fontWeight: 600,
              }}
            >
              ⚠ AIS Gap: 4h 22min (13:42–18:04 UTC) during release window —
              significant anomaly
            </span>
          </div>
        </div>

        {/* ASSOCIATION SCORE */}
        <div
          className="card"
          style={{
            padding: 18,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginBottom: 4,
            }}
          >
            Association Score
          </div>

          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "var(--red)",
              lineHeight: 1.1,
            }}
          >
            91%
          </div>

          <div
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              marginBottom: 16,
            }}
          >
            Investigation Priority: Immediate
          </div>

          {aiReasons.map((r) => (
            <div
              key={r.factor}
              style={{
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-2)",
                    fontWeight: 500,
                  }}
                >
                  {r.factor}
                </span>

                <span
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                  }}
                >
                  ×{r.weight}%
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  className="progress-bar"
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    className="progress-fill"
                    style={{
                      width: `${r.score}%`,
                      background: r.color,
                    }}
                  />
                </div>

                <span
                  style={{
                    fontSize: 12,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 600,
                    color: r.color,
                    width: 32,
                  }}
                >
                  {r.score}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPLAINABLE AI */}
      <div
        className="card"
        style={{
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--blue), var(--cyan))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
            }}
          >
            ⚡
          </div>

          <div
            style={{
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Explainable AI — Why This Vessel Ranked First
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {aiReasons.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                padding: 14,
                background: "var(--surface-2)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: r.color,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                {r.score}
              </div>

              <div
                style={{
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 13,
                    marginBottom: 4,
                    color: r.color,
                  }}
                >
                  {r.factor}
                </div>

                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--text-3)",
                    lineHeight: 1.55,
                  }}
                >
                  {r.evidence}
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                Weight: {r.weight}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AIS EVENT TIMELINE */}
      <div
        className="card"
        style={{
          padding: 20,
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 14,
            marginBottom: 16,
          }}
        >
          AIS Event Timeline
        </div>

        <div
          style={{
            position: "relative",
            paddingLeft: 24,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 5,
              top: 8,
              bottom: 8,
              width: 1,
              background: "var(--border)",
            }}
          />

          {timeline.map((item, i) => {
            const color =
              item.type === "alert" || item.type === "gap"
                ? "var(--red)"
                : item.type === "port"
                ? "var(--teal)"
                : "var(--blue)";

            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -23,
                    top: 3,
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: color,
                    border: "2px solid var(--surface)",
                  }}
                />

                <div
                  style={{
                    fontSize: 10,
                    fontFamily: "JetBrains Mono, monospace",
                    color: "var(--text-muted)",
                  }}
                >
                  {item.t}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text-2)",
                    marginTop: 2,
                  }}
                >
                  {item.e}
                </div>

                {item.type === "gap" && (
                  <span
                    className="badge badge-critical"
                    style={{
                      marginTop: 4,
                    }}
                  >
                    AIS Anomaly
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}