import { useState, useRef, useEffect } from "react";
import { aiMessages } from "../data/mockData";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const suggestions = [
  "Why was this vessel ranked first?",
  "What is the probable origin?",
  "Show supporting evidence",
  "Explain the AIS gap significance",
  "What is the release window confidence?",
];

function renderText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} style={{ margin: "2px 0", lineHeight: 1.55 }}>
        {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
      </p>
    );
  });
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "I'm the OILTRACE AI Investigation Assistant. Ask me anything about this incident, origin reconstruction, vessel ranking, or supporting evidence." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    setMessages(m => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      const match = aiMessages.find(m => m.q.toLowerCase().includes(text.split(" ")[1]?.toLowerCase() ?? ""));
      const reply = match?.a ?? "Based on the available satellite and AIS evidence, my analysis indicates the probability of a deliberate discharge event is high. The convergence of origin proximity, AIS anomaly, and drift consistency scores places MV OCEAN STAR as the primary investigation candidate. Further corroboration via LRIT records and port authority data is recommended.";
      setMessages(m => [...m, { role: "assistant", text: reply }]);
      setLoading(false);
    }, 1200);
  }

  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", display: "flex", flexDirection: "column", height: 440, overflow: "hidden" }}>
      {/* Header */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue), var(--cyan))", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 15 }}>⚡</span>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>AI Investigation Assistant</div>
          <div style={{ fontSize: 11, color: "var(--teal)", fontFamily: "JetBrains Mono, monospace" }}>● Online · Incident OT-2024-0891</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", gap: 8, justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            {m.role === "assistant" && (
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue), var(--cyan))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11 }}>⚡</div>
            )}
            <div style={{
              maxWidth: "82%",
              background: m.role === "user" ? "var(--blue)" : "var(--surface-2)",
              color: m.role === "user" ? "#fff" : "var(--text)",
              padding: "9px 13px",
              borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
              fontSize: 13,
              border: m.role === "assistant" ? "1px solid var(--border)" : "none",
            }}>
              {renderText(m.text)}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue), var(--cyan))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>⚡</div>
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", padding: "9px 14px", borderRadius: "12px 12px 12px 2px", display: "flex", gap: 4 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", display: "inline-block", animation: "blink 1.2s ease infinite", animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick suggestions */}
      {messages.length <= 1 && (
        <div style={{ padding: "0 16px 10px", display: "flex", flexWrap: "wrap", gap: 6 }}>
          {suggestions.slice(0, 3).map(s => (
            <button key={s} className="btn btn-secondary btn-sm" onClick={() => sendMessage(s)} style={{ fontSize: 11 }}>
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding: "10px 16px", borderTop: "1px solid var(--border)", display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage(input)}
          placeholder="Ask about evidence, vessels, origin…"
          style={{
            flex: 1, background: "var(--surface-3)", border: "1px solid var(--border)",
            borderRadius: "var(--radius)", padding: "8px 12px", fontSize: 13,
            color: "var(--text)", outline: "none", fontFamily: "Outfit, sans-serif",
          }}
        />
        <button className="btn btn-primary btn-sm" onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
}