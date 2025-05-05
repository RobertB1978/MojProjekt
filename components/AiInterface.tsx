"use client";

import { useState } from "react";
import { askGPT } from "@/lib/aiclients";
import ModelSelector from "./ModelSelector";

export default function AiInterface() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("gpt-4o");

  const handleAsk = async () => {
    setLoading(true);
    const answer = await askGPT(prompt, model);
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <ModelSelector onSelect={setModel} />

      <textarea
        placeholder="Zadaj pytanie..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        rows={4}
      />

      <button
        onClick={handleAsk}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Czekaj..." : "Wyślij"}
      </button>

      <div className="border p-2 rounded bg-gray-100 mt-4">
        {response}
      </div>
    </div>
  );
}

