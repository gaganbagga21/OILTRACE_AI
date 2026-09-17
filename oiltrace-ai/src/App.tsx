import React, { useState } from "react";
import Login from "./pages/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import IncidentDetails from "./pages/IncidentDetails";
import SpillAnalysis from "./pages/SpillAnalysis";
import OriginReconstruction from "./pages/OriginReconstruction";
import VesselIntelligence from "./pages/VesselIntelligence";
import VesselDetails from "./pages/VesselDetails";
import IncidentReplay from "./pages/IncidentReplay";
import EvidenceGraph from "./pages/EvidenceGraph";
import WhatIfSimulation from "./pages/WhatIfSimulation";
import InvestigationReport from "./pages/InvestigationReport";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("dashboard");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className={`app-container ${theme}-theme`}>
      <Header
        currentPage={currentPage}
        navigate={(page) => setCurrentPage(page)}
        onLogout={() => setIsAuthenticated(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main style={{ padding: "20px 32px" }}>
        {currentPage === "dashboard" && <Dashboard navigate={setCurrentPage} />}
        {currentPage === "incident-details" && <IncidentDetails navigate={setCurrentPage} />}
        {currentPage === "spill-analysis" && <SpillAnalysis navigate={setCurrentPage} />}
        {currentPage === "origin-reconstruction" && <OriginReconstruction navigate={setCurrentPage} />}
        {currentPage === "vessel-intelligence" && <VesselIntelligence navigate={setCurrentPage} />}
        {currentPage === "vessel-details" && <VesselDetails navigate={setCurrentPage} />}
        {currentPage === "incident-replay" && <IncidentReplay navigate={setCurrentPage} />}
        {currentPage === "evidence-graph" && <EvidenceGraph navigate={setCurrentPage} />}
        {currentPage === "what-if" && <WhatIfSimulation navigate={setCurrentPage} />}
        {currentPage === "report" && <InvestigationReport navigate={setCurrentPage} />}
      </main>
    </div>
  );
}