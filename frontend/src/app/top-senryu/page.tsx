"use client";
import { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";
import { abi, contractAddress } from "../constants/contract";

export default function TopSenryu() {
  const [topSenryus, setTopSenryus] = useState<
    { id: number; content: string; voteCount: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchTopSenryus = async () => {
      setLoading(true);
      if (!window.ethereum) {
        alert("MetaMask is not installed!");
        setLoading(false);
        return;
      }

      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(contractAddress, abi, signer);
        const senryuList = await contract.getTopSenryus(page, pageSize);

        const formattedSenryus = senryuList.map((senryu: any) => ({
          id: senryu.id,
          content: senryu.content,
          voteCount: senryu.voteCount,
        }));

        console.log("Formatted senryus:", formattedSenryus);

        setTopSenryus(formattedSenryus);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top senryus:", error);
        alert("Failed to fetch top senryus");
        setLoading(false);
      }
    };

    fetchTopSenryus();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (topSenryus.length === pageSize) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container mx-auto p-4 dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Top Senryus</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {topSenryus
            .filter((senryu) => senryu.content) // 空のコンテンツを除外
            .map((senryu) => (
              <li key={senryu.id.toString()} className="mb-2">
                <strong>Content:</strong> {senryu.content || "No Content"}{" "}
                {/* デフォルトの表示 */}
                <br />
                <strong>Votes:</strong> {senryu.voteCount.toString()}
              </li>
            ))}
        </ul>
      )}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePreviousPage}
          className="bg-gray-500 text-white px-4 py-2 rounded-md dark-mode-button"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-gray-500 text-white px-4 py-2 rounded-md dark-mode-button"
        >
          Next
        </button>
      </div>
      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md dark-mode-button"
      >
        Back
      </button>
    </div>
  );
}
