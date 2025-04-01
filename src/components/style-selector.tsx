"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StyleOption {
  value: string;
  label: string;
  description: string;
}

interface StyleSelectorProps {
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  customStyle: string;
  setCustomStyle: (style: string) => void;
  predefinedStyles: StyleOption[];
}

export function StyleSelector({
  selectedStyle,
  setSelectedStyle,
  customStyle,
  setCustomStyle,
  predefinedStyles,
}: StyleSelectorProps) {
  return (
    <div className="flex space-x-2 items-center">
      <Select value={selectedStyle} onValueChange={setSelectedStyle}>
        <SelectTrigger className="w-60 border-none bg-gray-100 text-sm">
          <SelectValue placeholder="変換スタイル" />
        </SelectTrigger>
        <SelectContent>
          {predefinedStyles.map((s) => (
            <SelectItem key={s.value} value={s.value} className="py-2">
              <div>
                <div className="font-medium">{s.label}</div>
                <div className="text-xs text-gray-500">{s.description}</div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedStyle === "custom" && (
        <Input
          value={customStyle}
          onChange={(e) => setCustomStyle(e.target.value)}
          placeholder="スタイルを入力..."
          className="w-40 h-9 text-sm border-none bg-gray-100"
        />
      )}
    </div>
  );
}
