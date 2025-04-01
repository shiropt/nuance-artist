"use client"

import { Textarea } from "@/components/ui/textarea"

interface TextInputProps {
  value: string
  onChange: (value: string) => void
}

export function TextInput({ value, onChange }: TextInputProps) {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="変換したい日本語の文章を入力してください..."
      className="w-full p-4 h-32 text-lg border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-black focus:border-transparent"
    />
  )
}

