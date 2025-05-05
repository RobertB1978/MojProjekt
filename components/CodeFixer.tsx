"use client";

import { useState } from "react";
import { askGPT } from "@/lib/aiclients";

export function CodeFixer() {
  const [codeInput, setCodeInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("gpt-4o");

  async function handleFixCode() {
    setLoading(true);
    const prompt = `Napraw i zoptymalizuj poniższy kod:\n\n${codeInput}`;
    const fixedCode = await askGPT(prompt, model);
    setResponse(fixedCode);
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Code Fixer – Napraw kod AI</h2>

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Wklej kod do naprawy..."
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        rows={8}
      />

      <select
        className="border p-2 rounded"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        <option value="gpt-4o">GPT-4o</option>
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
      </select>

      <button
        onClick={handleFixCode}
        className="bg-green-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Naprawiam..." : "Napraw kod"}
      </button>

      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
        {response}
      </pre>
    </div>
  );
}

