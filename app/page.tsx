import AIInterface from "@/components/AIInterface";

export default function Home() {
  return (
    <main className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">CodeFusion AI</h1>
      <p className="mb-6 text-gray-600">
        Twój osobisty asystent AI do tworzenia stron, sklepów i aplikacji.
      </p>

      <AIInterface />
    </main>
  );
}

