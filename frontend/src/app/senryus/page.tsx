'use client';
import { useState, useEffect } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { abi, contractAddress } from '../constants/contract';

export default function ViewSenryus() {
  const [senryus, setSenryus] = useState<{ id: number, content: string, voteCount: number }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSenryus = async () => {
      setLoading(true);
      if (!window.ethereum) {
        alert('MetaMask is not installed!');
        setLoading(false);
        return;
      }

      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(contractAddress, abi, signer);
        const senryuList = await contract.getSenryus();

        const formattedSenryus = senryuList.map((senryu: any, index: number) => ({
          id: index,
          content: senryu.content,
          voteCount: senryu.voteCount,
        }));

        setSenryus(formattedSenryus);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching senryus:', error);
        alert('Failed to fetch senryus');
        setLoading(false);
      }
    };

    fetchSenryus();
  }, []);

  const vote = async (senryuId: number) => {
    setLoading(true);
    if (!window.ethereum) {
      alert('MetaMask is not installed!');
      setLoading(false);
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);

      await contract.vote(senryuId);
      const senryuList = await contract.getSenryus();

      const formattedSenryus = senryuList.map((senryu: any, index: number) => ({
        id: index,
        content: senryu.content,
        voteCount: senryu.voteCount,
      }));

      setSenryus(formattedSenryus);
      setLoading(false);
    } catch (error: any) {
      console.error('Error voting for senryu:', error);
      if (error.code === 4001) {
        alert('MetaMask access denied');
      } else {
        alert('Failed to vote for senryu');
      }
      setLoading(false);
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
