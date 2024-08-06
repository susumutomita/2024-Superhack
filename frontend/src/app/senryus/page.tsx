'use client';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { abi, contractAddress } from '../constants/contract';

export default function ViewSenryus() {
  const [senryus, setSenryus] = useState<{ id: number, content: string, voteCount: number }[]>([]);

  useEffect(() => {
    const fetchSenryus = async () => {
      if (!window.ethereum) {
        alert('MetaMask is not installed!');
        return;
      }

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const senryuList = await contract.getSenryus();

        setSenryus(senryuList);
      } catch (error) {
        console.error('Error fetching senryus:', error);
        alert('Failed to fetch senryus');
      }
    };

    fetchSenryus();
  }, []);

  const vote = async (senryuId: number) => {
    if (!window.ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      await contract.vote(senryuId);
      const senryuList = await contract.getSenryus();
      setSenryus(senryuList);
    } catch (error: any) {
      console.error('Error voting for senryu:', error);
      if (error.code === 4001) {
        alert('MetaMask access denied');
      } else {
        alert('Failed to vote for senryu');
      }
    }
  };

  return (
    <div className="container mx-auto p-4 dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Senryus</h1>
      <ul>
        {senryus.map((senryu, index) => (
          <li key={index} className="mb-2">
            <strong>Content:</strong> {senryu.content}<br />
            <strong>Votes:</strong> {senryu.voteCount}
            <button onClick={() => vote(senryu.id)} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md dark-mode-button">
              Vote
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => window.history.back()} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md dark-mode-button">
        Back
      </button>
    </div>
  );
}
