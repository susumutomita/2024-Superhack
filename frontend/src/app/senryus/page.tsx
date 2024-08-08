"use client";
import { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";
import { abi, contractAddress } from "../constants/contract";

interface Senryu {
  id: number;
  content: string;
  voteCount: number;
}

export default function ViewSenryus() {
  const [senryus, setSenryus] = useState<Senryu[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10; // 一度に取得するSenryuの数

  useEffect(() => {
    const fetchSenryus = async () => {
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
        const formattedSenryus = await fetchSenryusData(
          page,
          pageSize,
          contract,
        );

        setSenryus(formattedSenryus);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching senryus:", error);
        alert("Failed to fetch senryus");
        setLoading(false);
      }
    };

    fetchSenryus();
  }, [page]);

  const vote = async (senryuId: number) => {
    setLoading(true);
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      setLoading(false);
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);

      await contract.vote(senryuId);
      const formattedSenryus = await fetchSenryusData(page, pageSize, contract);
      setSenryus(formattedSenryus);
      setLoading(false);
    } catch (error: any) {
      console.error("Error voting for senryu:", error);
      if (error.code === 4001) {
        alert("MetaMask access denied");
      } else {
        alert("Failed to vote for senryu");
      }
      setLoading(false);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (senryus.length === pageSize) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container mx-auto p-4 dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Senryus</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {senryus.map((senryu) => (
            <li key={senryu.id} className="mb-2">
              <strong>Content:</strong> {senryu.content}
              <br />
              <strong>Votes:</strong> {senryu.voteCount}
              <button
                onClick={() => vote(senryu.id)}
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md dark-mode-button"
              >
                Vote
              </button>
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

const fetchSenryusData = async (
  page: number,
  pageSize: number,
  contract: Contract,
) => {
  const senryuList = await contract.getSenryus(page, pageSize);
  return senryuList.map((senryu: Senryu) => ({
    id: senryu.id,
    content: senryu.content,
    voteCount: senryu.voteCount,
  }));
};
