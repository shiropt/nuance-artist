import { Sparkles, MessageSquare, Zap } from "lucide-react"

export function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 p-3 rounded-full mb-4">
          <Sparkles className="h-6 w-6" />
        </div>
        <h3 className="font-medium mb-2">多彩なスタイル</h3>
        <p className="text-sm text-gray-500">敬語、フランク、ビジネス、関西弁、ギャル言葉など様々な話し方に対応</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 p-3 rounded-full mb-4">
          <MessageSquare className="h-6 w-6" />
        </div>
        <h3 className="font-medium mb-2">自然な変換</h3>
        <p className="text-sm text-gray-500">AIが文脈を理解し、自然な言い回しに変換</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 p-3 rounded-full mb-4">
          <Zap className="h-6 w-6" />
        </div>
        <h3 className="font-medium mb-2">カスタマイズ</h3>
        <p className="text-sm text-gray-500">自由に指定したスタイルでも変換可能</p>
      </div>
    </div>
  )
}

