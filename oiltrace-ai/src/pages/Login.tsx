import React, { useState } from "react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("analyst@maritime-intel.gov");
  const [password, setPassword] = useState("••••••••••••");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--text)",
      }}
    >
      {/* Header without theme toggle */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>🛡️</span>
          <span style={{ fontWeight: 900, color: "var(--text)", fontSize: 18 }}>
            OILTRACE AI
          </span>
        </div>
      </header>

      {/* Main Container */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          maxWidth: 1180,
          width: "100%",
          margin: "0 auto",
          padding: "40px 24px",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 800, color: "var(--blue)", textTransform: "uppercase" }}>
              Next-Gen Maritime Reconnaissance
            </span>
            <h1 style={{ fontSize: 34, fontWeight: 900, color: "var(--text)", lineHeight: 1.2, marginTop: 8 }}>
              AI-Powered Marine Oil-Spill Detection & Dark Fleet Intelligence
            </h1>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginTop: 12, lineHeight: 1.6 }}>
              Automated SAR satellite segmentation, backward hydrodynamic drift modeling, and real-time AIS vessel trajectory correlation for maritime security agencies.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            <div className="card" style={{ padding: 14 }}>
              <div style={{ fontSize: 10, color: "var(--text-3)", fontWeight: 700 }}>ACTIVE SATELLITES</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "var(--teal)", marginTop: 4 }}>14 SAR Orbiters</div>
            </div>
            <div className="card" style={{ padding: 14 }}>
              <div style={{ fontSize: 10, color: "var(--text-3)", fontWeight: 700 }}>TRACKED VESSELS</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "var(--blue)", marginTop: 4 }}>12,840 Active</div>
            </div>
            <div className="card" style={{ padding: 14 }}>
              <div style={{ fontSize: 10, color: "var(--text-3)", fontWeight: 700 }}>DRIFT PRECISION</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "var(--amber)", marginTop: 4 }}>94.2% Match</div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="card" style={{ padding: 32 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)" }}>Analyst Clearance Sign-In</h2>
            <p style={{ fontSize: 12, color: "var(--text-3)", marginTop: 4 }}>
              Enter authorized security credentials to proceed to portal.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--text-2)", marginBottom: 6 }}>
                Security Identification (Email)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 6,
                  border: "1px solid var(--border)",
                  background: "var(--surface-2)",
                  color: "var(--text)",
                  fontSize: 13,
                  outline: "none",
                }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--text-2)", marginBottom: 6 }}>
                Clearance Passcode
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 6,
                  border: "1px solid var(--border)",
                  background: "var(--surface-2)",
                  color: "var(--text)",
                  fontSize: 13,
                  outline: "none",
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", padding: 12, marginTop: 8, cursor: "pointer", justifyContent: "center" }}
            >
              Authenticate Clearance →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}