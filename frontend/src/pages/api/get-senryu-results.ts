import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { page = 1, pageSize = 10 } = req.query;

  try {
    const response = await fetch(
      "https://api.goldsky.com/api/public/project_clzjz50lmpswm01uq8oa85ws8/subgraphs/onchain-senryu/1.0.0/gn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          {
            senryus(first: ${pageSize}, skip: ${(Number(page) - 1) * Number(pageSize)}, orderBy: voteCount, orderDirection: desc) {
              id
              content
              voteCount
            }
          }
        `,
        }),
      },
    );

    const result = await response.json();

    const formattedSenryus = result.data.senryus.map((senryu: any) => ({
      id: senryu.id,
      content: senryu.content,
      voteCount: senryu.voteCount,
    }));

    res.status(200).json({ topSenryus: formattedSenryus });
  } catch (error) {
    console.error("Error fetching top senryus:", error);
    res.status(500).json({ error: "Failed to fetch top senryus" });
  }
}
