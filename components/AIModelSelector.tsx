'use client'

import { useState } from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { useAIStore } from '@/store/aiStore'

export const AIModelSelector = () => {
  const { model, setModel } = useAIStore()
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full max-w-sm">
      <label className="text-sm font-medium">Wybierz model AI:</label>
      <Select value={model} onValueChange={setModel} open={open} onOpenChange={setOpen}>
        <SelectTrigger className="mt-1 w-full">
          <SelectValue placeholder="Wybierz model..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="gpt-4o">GPT-4o (OpenAI)</SelectItem>
          <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
          <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
          <SelectItem value="perplexity">Perplexity (placeholder)</SelectItem>
          <SelectItem value="mistral">Mistral (placeholder)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

