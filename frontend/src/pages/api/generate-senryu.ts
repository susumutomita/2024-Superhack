// src/pages/api/generate-senryu.ts

import type { NextApiRequest, NextApiResponse } from "next";
import Groq from "groq-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { prompt } = req.body;
  const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });

  try {
    const response = await groqClient.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Based on the following topic, generate a Senryu (川柳).
      A Senryu is a type of Japanese short poetry similar to Haiku but focuses on human nature and is often humorous or satirical.
      Please return the Senryu in this format:

      Senryu:
      [Generated Senryu Here]

      ${prompt}`,
        },
      ],
      model: "llama3-8b-8192",
    });

    const fullResponse = response.choices[0]?.message?.content || "";

    // 川柳と解説を分ける（レスポンス形式に合わせて調整）
    const senryuMatch = fullResponse.match(/Here it is:\s*(.*)/i);
    const senryu = senryuMatch ? senryuMatch[1] : fullResponse;

    res.status(200).json({ senryu: senryu.trim() });
  } catch (error) {
    console.error("Failed to generate senryu:", error);
    res.status(500).json({ error: "Failed to generate senryu" });
  }
}
