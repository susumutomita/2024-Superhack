"use client";

import { useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { abi, contractAddress } from "../constants/contract";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function SubmitSenryu() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      await contract.submitSenryu(content);
      alert("Senryu submitted successfully!");
      setLoading(false);
      setContent(""); // フォームをクリア
    } catch (error: any) {
      console.error("Error submitting senryu:", error);
      if (error.code === 4001) {
        alert("MetaMask access denied");
      } else {
        alert("Failed to submit senryu");
      }
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Submit a Senryu</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium dark-mode-label">
            Senryu Content:
          </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 border rounded-md shadow-sm w-full dark-mode-input"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md dark-mode-button"
          disabled={loading}
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md dark-mode-button"
      >
        Back
      </button>
    </div>
  );
}
