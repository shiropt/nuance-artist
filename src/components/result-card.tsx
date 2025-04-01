import { Card } from "@/components/ui/card"

interface ResultCardProps {
  result: string
}

export function ResultCard({ result }: ResultCardProps) {
  if (!result) return null

  return (
    <Card className="p-6 border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-sm font-medium text-gray-500 mb-2">変換結果</h2>
      <p className="text-lg whitespace-pre-wrap">{result}</p>
    </Card>
  )
}

