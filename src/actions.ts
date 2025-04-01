"use server";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getAiResponse = async (contents: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents,
  });
  //   for await (const chunk of response) {
  //     console.log(chunk.text);
  //   } //

  return response.text;
};

const styleDescriptions = {
  keigo: "敬語（丁寧で礼儀正しい表現）",
  frank: "フランクな話し方（友達同士の砕けた会話のような表現）",
  business: "ビジネス表現（仕事や会議での専門的かつ効率的な表現）",
  kansai: "関西弁（大阪弁を中心とした関西地方の方言）",
  gyaru: "ギャル言葉（若者言葉やギャル特有のスラングや表現）",
};

export const convertText = async (
  text: string,
  style: string
): Promise<string | undefined> => {
  try {
    // 定義済みスタイルの場合は説明を使用、それ以外はそのまま使用
    const styleDescription =
      styleDescriptions[style as keyof typeof styleDescriptions] || style;

    const prompt = `
以下の日本語の文章を「${styleDescription}」に変換してください。
元の文章のニュアンスや意味をできるだけ保ちながら、自然な表現に変換してください。
変換前後で段落構造は維持してください。
余計な説明は不要です。変換後の文章だけを返してください。

入力文:
${text}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Text conversion error:", error);
    throw new Error("文章の変換中にエラーが発生しました");
  }
};
