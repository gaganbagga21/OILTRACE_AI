import React from "react";

interface HeaderProps {
  currentPage: string;
  navigate: (page: string) => void;
  onLogout: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({
  currentPage,
  navigate,
  onLogout,
  theme,
  toggleTheme,
}: HeaderProps) {
  const isDark = theme === "dark";

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "incident-details", label: "Incident" },
    { id: "spill-analysis", label: "Spill" },
    { id: "origin-reconstruction", label: "Origin" },
    { id: "vessel-intelligence", label: "Vessels" },
    { id: "vessel-details", label: "Vessel Details" },
    { id: "incident-replay", label: "Replay" },
    { id: "evidence-graph", label: "Evidence" },
    { id: "what-if", label: "What-If" },
    { id: "report", label: "Report" },
  ];

  return (
    <header
      style={{
        height: 52,
        width: "100%",
        background: "var(--surface, #ffffff)",
        borderBottom: "1px solid var(--border, #e2e8f0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        boxSizing: "border-box",
      }}
    >
      {/* Left Branding */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          flexShrink: 0,
        }}
        onClick={() => navigate("dashboard")}
      >
        <span style={{ fontSize: 18 }}>🛡️</span>
        <span
          style={{
            fontWeight: 800,
            fontSize: 14,
            color: "var(--text, #0f172a)",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
          }}
        >
          OILTRACE AI
        </span>
      </div>

      {/* Middle Navigation - Evenly Distributed Across Entire Bar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flex: 1,
          margin: "0 24px",
        }}
      >
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                appearance: "none",
                WebkitAppearance: "none",
                outline: "none",
                background: isActive
                  ? "var(--blue-light, #e0f2fe)"
                  : "transparent",
                color: isActive
                  ? "var(--blue, #0284c7)"
                  : "var(--text-3, #64748b)",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: isActive ? 700 : 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Right Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexShrink: 0,
        }}
      >
        {/* Theme Toggle */}
        <div
          onClick={toggleTheme}
          role="button"
          tabIndex={0}
          style={{
            position: "relative",
            width: 42,
            height: 22,
            borderRadius: 16,
            background: isDark ? "#334155" : "#e2e8f0",
            border: "1px solid var(--border, #cbd5e1)",
            cursor: "pointer",
            padding: 2,
            display: "flex",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              transform: isDark ? "translateX(20px)" : "translateX(0px)",
              transition: "transform 0.2s ease",
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </div>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={onLogout}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            outline: "none",
            background: "var(--surface-2, #f8fafc)",
            color: "var(--text-2, #334155)",
            border: "1px solid var(--border, #cbd5e1)",
            borderRadius: 6,
            padding: "5px 12px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}