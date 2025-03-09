"use client";

import { useState } from "react";

export default function LLMChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await res.json();
      if (data.message) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      }
    } catch (error) {
      console.error("Error enviando mensaje:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
          💬 Chatea conmigo
        </h2>

        <div className="card-base overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-4 rounded-2xl shadow-md max-w-[70%] ${msg.role === "user" ? "bg-gray-500 text-white" : "bg-gray-300 text-gray-800"}`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-center">
                <p className="text-text-secondary animate-pulse">Escribiendo...</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border-color bg-background-card">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="input-base flex-1"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="button-base"
              >
                <span className="text-xl">➤</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
