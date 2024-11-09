// pages/WL-Checker.js
import { useState } from 'react';

export default function WLChecker() {
  const [wallet, setWallet] = useState('');
  const [message, setMessage] = useState('');

  const checkWhitelist = () => {
    const eligible = wallet === 'eligible-wallet-address'; // Replace with actual logic
    setMessage(eligible ? 'Congratulations, your wallet is Eligible in the WL.' : 'Sorry, you are not eligible for WL. Contact us on Twitter.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full p-6  text-white">
      <h1 className="text-7xl font-bold mb-4">Whitelist Checker</h1>
      <input
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        placeholder="Enter Wallet Address"
        className="p-2 border rounded mb-4 w-full text-black"
      />
      <button onClick={checkWhitelist} className="bg-blue-500 text-white px-4 py-2 rounded">
        Check Eligibility
      </button>
      {message && (
        <p className={`mt-4 ${message.includes('Congratulations') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
