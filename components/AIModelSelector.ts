'use client'

import { useState } from 'react'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'

type ModelOption = 'gpt-4o' | 'gpt-4' | 'gpt-3.5-turbo'

interface Props {
  value: ModelOption
  onChange: (value: ModelOption) => void
}

export const AIModelSelector = ({ value, onChange }: Props) => {
  return (
    <div className="w-full max-w-xs">
      <label className="mb-2 block text-sm font-medium">Wybierz model AI</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Wybierz model" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="gpt-4o">GPT-4o</SelectItem>
          <SelectItem value="gpt-4">GPT-4</SelectItem>
          <SelectItem value="gpt-3.5-turbo">GPT-3.5</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

