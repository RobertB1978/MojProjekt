// aibrain-router.ts
import { sendToGPT } from "@/lib/openai";
import { sendToClaude } from "@/lib/claude";
import { sendToPerplexity } from "@/lib/perplexity";

type Model = "gpt" | "claude" | "perplexity";
type Strategy = "auto" | "team";

export async function routePrompt(prompt: string, strategy: Strategy = "auto") {
  const lower = prompt.toLowerCase();

  if (strategy === "team") {
    const [gpt, claude, perplexity] = await Promise.all([
      sendToGPT(prompt),
      sendToClaude(prompt),
      sendToPerplexity(prompt)
    ]);
    return {
      mode: "team",
      responses: { gpt, claude, perplexity }
    };
  }

  let selected: Model = "gpt";

  if (lower.includes("analyze") || lower.includes("explain")) selected = "claude";
  if (lower.includes("search") || lower.includes("data from web")) selected = "perplexity";
  if (lower.includes("code") || lower.includes("typescript") || lower.includes("fix bug")) selected = "gpt";

  switch (selected) {
    case "gpt":
      return { model: "gpt", response: await sendToGPT(prompt) };
    case "claude":
      return { model: "claude", response: await sendToClaude(prompt) };
    case "perplexity":
      return { model: "perplexity", response: await sendToPerplexity(prompt) };
  }
}

