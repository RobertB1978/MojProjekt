'use client'

import { useAIStore } from '../store/aiStore'

export default function ModelSelector() {
  const { model, setModel } = useAIStore()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(e.target.value as any)
  }

  return (
    <div className="mb-4">
      <label htmlFor="model" className="block font-semibold mb-1">
        Wybierz model AI:
      </label>
      <select
        id="model"
        value={model}
        onChange={handleChange}
        className="p-2 border rounded w-full"
      >
        <option value="gpt-4o">GPT-4o</option>
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="claude-3-haiku">Claude 3 Haiku</option>
      </select>
    </div>
  )
}

