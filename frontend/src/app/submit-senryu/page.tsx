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
  const [generatedSenryu, setGeneratedSenryu] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const generateSenryu = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/generate-senryu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: content }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedSenryu(data.senryu);
      } else {
        alert("Failed to generate senryu: " + data.error);
      }
    } catch (error) {
      console.error("Error generating senryu:", error);
      alert("Error generating senryu");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!generatedSenryu.trim()) {
      alert("Generated Senryu cannot be empty!");
      return;
    }

    setSubmitting(true);

    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      setSubmitting(false);
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);
      await contract.submitSenryu(generatedSenryu); // 川柳のみをブロックチェーンに書き込む
      alert("Senryu submitted successfully!");
      setGeneratedSenryu(""); // フォームをクリア
    } catch (error: any) {
      console.error("Error submitting senryu:", error);
      if (error.code === 4001) {
        alert("MetaMask access denied");
      } else {
        alert("Failed to submit senryu");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Submit a Senryu</h1>

      {/* 川柳の説明を追加 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What is a Senryu?</h2>
        <p>
          A <strong>Senryu</strong> (川柳) is a form of Japanese short poetry
          similar to haiku in construction: three lines with a total of 17
          syllables, arranged in a 5-7-5 pattern. However, unlike haiku, which
          often deals with nature and the changing seasons, Senryu is more
          focused on human nature, humor, and satire.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium dark-mode-label">
            What would you like to say? (in English):
          </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 border rounded-md shadow-sm w-full dark-mode-input"
          />
        </div>
        <button
          type="button"
          onClick={generateSenryu}
          className="bg-blue-500 text-white px-4 py-2 rounded-md dark-mode-button"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Senryu"}
        </button>

        {/* 生成された川柳を表示 */}
        {generatedSenryu && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Generated Senryu:</h2>
            <p className="mt-2">{generatedSenryu}</p>
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md dark-mode-button"
          disabled={submitting || !generatedSenryu}
        >
          {submitting ? "Submitting..." : "Submit Senryu"}
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
