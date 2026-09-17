import React from "react";

interface OceanMapProps {
  navigate?: (page: string) => void;
  height?: number;
  showSpills?: boolean;
  showTrack?: boolean;
  showOrigin?: boolean;
}

export default function OceanMap({
  navigate,
  height = 500,
  showSpills = true,
  showTrack = true,
  showOrigin = true,
}: OceanMapProps) {
  /*
   * EMBEDDED MAP
   * Used inside VesselDetails and other cards.
   */
  if (!navigate) {
    return (
      <div
        style={{
          width: "100%",
          height: `${height}px`,
          minHeight: `${height}px`,
          position: "relative",
          overflow: "hidden",
          background: "var(--surface)",
        }}
      >
        <div
          className="ocean-map"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: "block",
            }}
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            {/* Grid Lines */}
            <line
              x1="0"
              y1="100"
              x2="1000"
              y2="100"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="200"
              x2="1000"
              y2="200"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="300"
              x2="1000"
              y2="300"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="400"
              x2="1000"
              y2="400"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="500"
              x2="1000"
              y2="500"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="200"
              y1="0"
              x2="200"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="400"
              y1="0"
              x2="400"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="600"
              y1="0"
              x2="600"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="800"
              y1="0"
              x2="800"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            {/* Slick Detection Polygon */}
            {showSpills && (
              <path
                d="M 350 220 Q 420 180 500 240 T 380 310 Z"
                fill="rgba(2, 132, 199, 0.35)"
                stroke="var(--cyan)"
                strokeWidth="2"
              />
            )}

            {/* AIS Track */}
            {showTrack && (
              <>
                {/* Pre-gap AIS track */}
                <path
                  d="M 120 430 L 200 390 L 280 365 L 360 340 L 430 355"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* AIS gap */}
                <path
                  d="M 430 355 L 510 405"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="5"
                  strokeDasharray="10 10"
                  strokeLinecap="round"
                />

                {/* Post-gap AIS track */}
                <path
                  d="M 510 405 L 590 360 L 670 315 L 750 275 L 850 230"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Track points */}
                <circle
                  cx="120"
                  cy="430"
                  r="7"
                  fill="var(--cyan)"
                />

                <circle
                  cx="200"
                  cy="390"
                  r="7"
                  fill="var(--cyan)"
                />

                <circle
                  cx="280"
                  cy="365"
                  r="7"
                  fill="var(--cyan)"
                />

                <circle
                  cx="360"
                  cy="340"
                  r="7"
                  fill="var(--cyan)"
                />

                <circle
                  cx="430"
                  cy="355"
                  r="8"
                  fill="var(--amber)"
                />

                <circle
                  cx="510"
                  cy="405"
                  r="8"
                  fill="var(--amber)"
                />

                <circle
                  cx="590"
                  cy="360"
                  r="7"
                  fill="var(--cyan)"
                />

                <circle
                  cx="670"
                  cy="315"
                  r="7"
                  fill="var(--cyan)"
                />

                <circle
                  cx="750"
                  cy="275"
                  r="7"
                  fill="var(--cyan)"
                />

                <circle
                  cx="850"
                  cy="230"
                  r="7"
                  fill="var(--cyan)"
                />
              </>
            )}

            {/* Origin */}
            {showOrigin && (
              <>
                <circle
                  cx="430"
                  cy="355"
                  r="65"
                  fill="rgba(255,193,7,0.06)"
                  stroke="rgba(255,193,7,0.30)"
                  strokeWidth="2"
                />

                <circle
                  cx="430"
                  cy="355"
                  r="42"
                  fill="rgba(255,193,7,0.10)"
                  stroke="rgba(255,193,7,0.45)"
                  strokeWidth="2"
                />

                <circle
                  cx="430"
                  cy="355"
                  r="20"
                  fill="rgba(255,193,7,0.18)"
                  stroke="var(--amber)"
                  strokeWidth="2"
                />

                <circle
                  cx="430"
                  cy="355"
                  r="7"
                  fill="var(--amber)"
                />
              </>
            )}
          </svg>

          {/* Origin label */}
          {showOrigin && (
            <div
              style={{
                position: "absolute",
                left: "43%",
                top: "59%",
                transform: "translate(-50%, -50%)",
                color: "var(--amber)",
                fontSize: 12,
                fontWeight: 800,
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              ORIGIN 87%
            </div>
          )}

          {/* Vessel label */}
          {showTrack && (
            <div
              style={{
                position: "absolute",
                right: "9%",
                top: "34%",
                padding: "6px 10px",
                borderRadius: 6,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--cyan)",
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
                pointerEvents: "none",
              }}
            >
              🚢 MV OCEAN STAR
            </div>
          )}

          {/* AIS Gap label */}
          {showTrack && (
            <div
              style={{
                position: "absolute",
                left: "43%",
                bottom: 18,
                transform: "translateX(-50%)",
                padding: "6px 10px",
                borderRadius: 6,
                background: "var(--surface)",
                border:
                  "1px solid color-mix(in srgb, var(--amber) 30%, transparent)",
                color: "var(--amber)",
                fontSize: 11,
                fontWeight: 600,
                whiteSpace: "nowrap",
                pointerEvents: "none",
              }}
            >
              ⚠ AIS GAP · 4h 22min
            </div>
          )}

          {/* Map information */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 11,
              color: "var(--text-2)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <div>
              <strong>Resolution:</strong> 10m Ground Pixel
            </div>

            <div>
              <strong>Sensor Band:</strong> C-Band VV Synthetic Aperture Radar
            </div>
          </div>
        </div>
      </div>
    );
  }

  /*
   * STANDALONE OCEAN MAP PAGE
   * Used when OceanMap is opened directly from navigation.
   */
  return (
    <div
      className="fade-in"
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minHeight: "calc(100vh - 60px)",
        boxSizing: "border-box",
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 19,
              fontWeight: 800,
            }}
          >
            Maritime Satellite Ocean Map
          </h1>

          <p
            style={{
              margin: "2px 0 0",
              color: "var(--text-3)",
              fontSize: 12.5,
            }}
          >
            Copernicus Sentinel-1A SAR & Live AIS Track Overlay
          </p>
        </div>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => navigate("origin-reconstruction")}
        >
          Origin Drift Model →
        </button>
      </div>

      {/* Full-Height Ocean Canvas Box */}
      <div
        className="card"
        style={{
          flex: 1,
          minHeight: 500,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Map Header */}
        <div
          style={{
            padding: "10px 16px",
            background: "var(--surface-2)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <div>
            <strong>Active Region:</strong> Arabian Sea Central Sector
            (19.5°N, 62.7°E)
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            <span
              style={{
                color: "var(--cyan)",
                fontWeight: 600,
              }}
            >
              ● SAR Slick Overlay
            </span>

            <span
              style={{
                color: "var(--amber)",
                fontWeight: 600,
              }}
            >
              ▲ MV OCEAN STAR AIS
            </span>
          </div>
        </div>

        {/* Map Canvas Background */}
        <div
          className="ocean-map"
          style={{
            flex: 1,
            minHeight: 500,
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: "block",
            }}
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            {/* Grid Lines */}
            <line
              x1="0"
              y1="100"
              x2="1000"
              y2="100"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="200"
              x2="1000"
              y2="200"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="300"
              x2="1000"
              y2="300"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="400"
              x2="1000"
              y2="400"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="0"
              y1="500"
              x2="1000"
              y2="500"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="200"
              y1="0"
              x2="200"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="400"
              y1="0"
              x2="400"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="600"
              y1="0"
              x2="600"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            <line
              x1="800"
              y1="0"
              x2="800"
              y2="600"
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />

            {/* Slick Detection Polygon */}
            <path
              d="M 350 220 Q 420 180 500 240 T 380 310 Z"
              fill="rgba(2, 132, 199, 0.35)"
              stroke="var(--cyan)"
              strokeWidth="2"
            />
          </svg>

          {/* Map Information */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 11,
              color: "var(--text-2)",
            }}
          >
            <div>
              <strong>Resolution:</strong> 10m Ground Pixel
            </div>

            <div>
              <strong>Sensor Band:</strong> C-Band VV Synthetic Aperture Radar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}