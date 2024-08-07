"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4 dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Welcome to Senryu Game</h1>
      <div className="space-x-4">
        <Link
          href="/submit-senryu"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md dark-mode-button"
        >
          Submit Senryu
        </Link>
        <Link
          href="/senryus"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md dark-mode-button"
        >
          View Senryus
        </Link>
        <Link
          href="/top-senryu"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md dark-mode-button"
        >
          View Top Senryu
        </Link>
      </div>
    </div>
  );
}
