import { create } from 'zustand'

type AIModel = 'gpt-4o' | 'gpt-3.5-turbo' | 'claude-3-haiku' | 'perplexity' | 'mistral'

interface AIStore {
  model: AIModel
  setModel: (model: AIModel) => void
}

export const useAIStore = create<AIStore>((set) => ({
  model: 'gpt-4o',
  setModel: (model) => set({ model }),
}))

