"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { TextInput } from "@/components/text-input";
import { StyleSelector } from "@/components/style-selector";
import { ConvertButton } from "@/components/convert-button";
import { ExampleButtons } from "@/components/example-buttons";
import { ResultCard } from "@/components/result-card";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { convertText } from "@/actions";

// スタイルと例文の定義
const predefinedStyles = [
  { value: "keigo", label: "敬語", description: "丁寧で礼儀正しい表現" },
  { value: "frank", label: "フランク", description: "友達同士の砕けた話し方" },
  {
    value: "business",
    label: "ビジネス",
    description: "仕事や会議での専門的な表現",
  },
  {
    value: "kansai",
    label: "関西弁",
    description: "大阪弁を中心とした関西地方の方言",
  },
  {
    value: "gyaru",
    label: "ギャル",
    description: "ギャル特有の言葉遣いやスラング",
  },
  {
    value: "custom",
    label: "カスタム",
    description: "自分で指定する変換スタイル",
  },
];

const examples = [
  { text: "今日はいい天気ですね", style: "frank" },
  { text: "これからご飯を食べるよ", style: "keigo" },
  { text: "明日会社に行きます", style: "kansai" },
];

export const Main = () => {
  const [inputText, setInputText] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("keigo");
  const [customStyle, setCustomStyle] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 実際に使用するスタイル（選択されたスタイルがカスタムの場合はカスタム入力を使用）
  const actualStyle = selectedStyle === "custom" ? customStyle : selectedStyle;

  const handleConvert = async () => {
    if (!inputText.trim()) return;
    if (selectedStyle === "custom" && !customStyle.trim()) return;

    setIsLoading(true);
    try {
      const response = await convertText(inputText, actualStyle);

      setResult(response || "変換に失敗しました");
    } catch (error) {
      console.error("変換エラー:", error);
      setResult("変換中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: (typeof examples)[0]) => {
    setInputText(example.text);
    setSelectedStyle(example.style);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">
          どのように話したいですか？
        </h1>

        {/* Input Area */}
        <div className="relative mb-8">
          <TextInput value={inputText} onChange={setInputText} />
          <div className="absolute right-4 bottom-4 flex space-x-2">
            <StyleSelector
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              customStyle={customStyle}
              setCustomStyle={setCustomStyle}
              predefinedStyles={predefinedStyles}
            />
            <ConvertButton
              onClick={handleConvert}
              isLoading={isLoading}
              disabled={
                isLoading ||
                !inputText.trim() ||
                (selectedStyle === "custom" && !customStyle.trim())
              }
            />
          </div>
        </div>

        <ExampleButtons
          examples={examples}
          predefinedStyles={predefinedStyles}
          onExampleClick={handleExampleClick}
        />

        <ResultCard result={result} />

        <FeatureSection />
      </main>

      <Footer />
    </div>
  );
};
