"use client";

import { useState } from "react";
import { routePrompt } from "@/lib/aibrain-router";

export default function AIInterface() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [strategy, setStrategy] = useState<"auto" | "team">("auto");

  const handleSend = async () => {
    if (!prompt) return;

    setResult("Processing...");

    const response = await routePrompt(prompt, strategy);

    if (strategy === "team") {
      const all = response.responses;
      setResult(
        `GPT:\n${all.gpt}\n\nClaude:\n${all.claude}\n\nPerplexity:\n${all.perplexity}`
      );
    } else {
      setResult(response.response);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">AI Brain Interface</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Wpisz prompt..."
        className="w-full p-2 border rounded mb-2"
        rows={4}
      />

      <div className="flex items-center mb-2 gap-4">
        <label>
          <input
            type="radio"
            name="mode"
            value="auto"
            checked={strategy === "auto"}
            onChange={() => setStrategy("auto")}
          />{" "}
          Auto
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="team"
            checked={strategy === "team"}
            onChange={() => setStrategy("team")}
          />{" "}
          Team (wszyscy naraz)
        </label>
      </div>

      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Wyślij
      </button>

      <pre className="mt-4 p-2 bg-gray-100 border rounded whitespace-pre-wrap">{result}</pre>
    </div>
  );
}

