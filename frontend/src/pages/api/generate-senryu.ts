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
          content: `Generate a Senryu (川柳) based on the following topic.
The Senryu should follow a 5-7-5 syllable pattern in Japanese. Please format the output as follows:

Senryu:
[Generated Senryu Here]

English:
[English Translation Here]

English explanation:
[Brief Explanation of the Senryu Here]

Example:
Senryu:
スポーツジム 車で行って チャリをこぐ

English:
Drive to the gym, then pedal a bike.

English explanation:
This Senryu humorously highlights the irony of driving a car to the gym only to ride a stationary bike once there. It captures the contradictions we often find in modern life, where convenience and exercise intersect in amusing ways.

Now, based on the following topic, generate a Senryu in the same format:

Topic: ${prompt}`,
        },
      ],
      model: "llama3-8b-8192",
    });

    const fullResponse = response.choices[0]?.message?.content || "";

    res.status(200).json({ senryu: fullResponse.trim() });
  } catch (error) {
    console.error("Failed to generate senryu:", error);
    res.status(500).json({ error: "Failed to generate senryu" });
  }
}
