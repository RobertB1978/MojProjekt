import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "sk-admin-YKpIRuH2b7PSvEYRPd55edi249U8dEnUIBD", // Twój klucz
  dangerouslyAllowBrowser: true,
});

export async function askGPT(prompt: string, model: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0]?.message?.content || "Brak odpowiedzi.";
  } catch (err: any) {
    console.error("Błąd AI:", err.message);
    return "Wystąpił błąd AI.";
  }
}

