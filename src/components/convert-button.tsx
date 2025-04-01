"use client"

import { Button } from "@/components/ui/button"
import { Loader2, ArrowRight } from "lucide-react"

interface ConvertButtonProps {
  onClick: () => void
  isLoading: boolean
  disabled: boolean
}

export function ConvertButton({ onClick, isLoading, disabled }: ConvertButtonProps) {
  return (
    <Button onClick={onClick} disabled={disabled} className="bg-black hover:bg-gray-800 text-white">
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
    </Button>
  )
}

