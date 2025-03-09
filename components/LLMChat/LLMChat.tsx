"use client";

import { useState, useEffect } from "react";

export default function LLMChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [fullResponse, setFullResponse] = useState("");

  useEffect(() => {
    if (isTyping && fullResponse) {
      const timeout = setTimeout(() => {
        setTypingText(fullResponse.substring(0, typingText.length + 1));
        
        if (typingText.length >= fullResponse.length) {
          setIsTyping(false);

          setMessages(prev => {
            const filteredMessages = prev.filter(msg => msg.role !== "typing");
            return [...filteredMessages, { role: "assistant", content: fullResponse }];
          });
          setFullResponse("");
        }
      }, 5);
      
      return () => clearTimeout(timeout);
    }
  }, [isTyping, typingText, fullResponse]);

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
        setFullResponse(data.message);
        setTypingText("");
        setIsTyping(true);
        
        setMessages(prev => [...prev, { role: "typing", content: "" }]);
      }
    } catch (error) {
      console.error("Error enviando mensaje:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
          💬 Chatea con Héctor
        </h2>

        <div className="bg-white overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-4 rounded-2xl shadow-md max-w-[70%] ${
                    msg.role === "user" 
                      ? "bg-green-100 text-gray-600 font-semibold"
                      : msg.role === "typing" 
                        ? "bg-blue-100 text-gray-600 font-semibold" 
                        : "bg-blue-100 text-gray-600 font-semibold"
                  }`}
                >
                  {msg.role === "typing" ? typingText : msg.content}
                  {msg.role === "typing" && (
                    <span className="inline-block ml-1 animate-pulse">▌</span>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-center">
                <p className="text-text-secondary animate-pulse">Escribiendo...</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 bg-background-card">
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
