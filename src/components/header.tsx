import { Languages } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-gray-100 py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2">
          <Languages className="h-6 w-6" />
          <span className="font-bold text-xl">ニュアンス職人</span>
        </div>
      </div>
    </header>
  )
}

