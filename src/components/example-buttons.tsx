"use client"

import { Button } from "@/components/ui/button"

interface Example {
  text: string
  style: string
}

interface StyleOption {
  value: string
  label: string
  description: string
}

interface ExampleButtonsProps {
  examples: Example[]
  predefinedStyles: StyleOption[]
  onExampleClick: (example: Example) => void
}

export function ExampleButtons({ examples, predefinedStyles, onExampleClick }: ExampleButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {examples.map((example, index) => (
        <Button key={index} variant="outline" size="sm" className="text-xs" onClick={() => onExampleClick(example)}>
          {example.text} → {predefinedStyles.find((s) => s.value === example.style)?.label}
        </Button>
      ))}
    </div>
  )
}

