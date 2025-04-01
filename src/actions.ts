"use server";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getAiResponse = async (contents: string) => {
  const response = await ai.models.generateContentStream({
    model: "gemini-2.0-flash",
    contents,
  });

  return response;
};
