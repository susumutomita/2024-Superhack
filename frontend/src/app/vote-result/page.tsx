"use client";
import { useState, useEffect } from "react";

export default function VoteResult() {
  const [topSenryus, setTopSenryus] = useState<
    { id: number; content: string; voteCount: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchTopSenryus = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/get-senryu-results?page=${page}&pageSize=${pageSize}`,
        );
        const data = await response.json();

        setTopSenryus(data.topSenryus);
      } catch (error) {
        console.error("Error fetching top senryus:", error);
        alert("Failed to fetch top senryus");
      } finally {
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
      <h1 className="text-2xl font-bold mb-4">Vote Result</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {topSenryus
            .filter((senryu) => senryu.content) // 空のコンテンツを除外
            .map((senryu) => (
              <li key={senryu.id.toString()} className="mb-2">
                <strong>Content:</strong> {senryu.content || "No Content"}{" "}
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
