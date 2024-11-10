import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientHeading from "./GradientHeading";
import { whitelistedAddresses } from "../data";

function MessageModal({ message, onClose }) {
  const isEligible = message.includes("Congratulations");

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="rounded-lg z-40 max-w-md w-full text-center bg-gradient-to-r from-[#1E58FC] via-[#D914E4] to-[#F10419] p-px"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black p-6 rounded-lg">
              <div className="w-fit mx-auto mb-4">
                {isEligible ? (
                  <svg width="80" height="80" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 40C0 29.4 4.2 19.2 11.7 11.7 19.2 4.2 29.4 0 40 0c10.6 0 20.8 4.2 28.3 11.7 7.5 7.5 11.7 17.9 11.7 28.3s-4.2 20.8-11.7 28.3c-7.5 7.5-17.9 11.7-28.3 11.7S19.2 75.8 11.7 68.3C4.2 60.8 0 50.6 0 40ZM37.7 57.1l23-28.8-4.2-3.3L36.9 49.5 23 38 19.6 42 37.7 57.1z"
                      fill="#42E46A"
                    />
                  </svg>
                ) : (
                  <svg width="68" height="68" fill="none">
                    <path
                      d="M57.7 10.3C44.7-2.7 23.3-2.7 10.3 10.3S-2.7 44.7 10.3 57.7c13 13 34.3 13 47.3 0 13-13 13.3-34.3 0-47.4zM43.3 48L34 38.7 24.7 48 20 43.3l9.3-9.3L20 24.7 24.7 20 34 29.3 43.3 20l4.7 4.7-9.3 9.3L48 43.3 43.3 48z"
                      fill="#F82929"
                    />
                  </svg>
                )}
              </div>
              <p
                className={`${
                  isEligible ? "text-green-500" : "text-red-500"
                } text-lg font-bold`}
              >
                {message}
              </p>
              {isEligible ? (
                <div className="mt-5 w-fit mx-auto cursor-pointer bg-gradient-to-tr from-[#1E58FC] via-[#D914E4] to-[#F10419] min-w-[200px] rounded-[50px] min-h-[40px] text-[16px] font-bold text-white flex items-center justify-center">
                  Mint Now
                </div>
              ) : (
                <a target="_blank" href="https://x.com/D00leApes">
                  <div className="mt-5 w-fit mx-auto cursor-pointer bg-gradient-to-tr from-[#1E58FC] via-[#D914E4] to-[#F10419] min-w-[200px] rounded-[50px] min-h-[40px] text-[16px] font-bold text-white flex items-center justify-center">
                    Contact Us
                  </div>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function WLChecker() {
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkWhitelist = () => {
    setLoading(true);
    setTimeout(() => {
      setMessage(
        whitelistedAddresses.includes(wallet)
          ? "Congratulations, your wallet is Eligible in the WL."
          : "Sorry, you are not eligible for WL. Contact us on Twitter."
      );
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const input = e.target.value.trim();
    setWallet(input);
    setError(
      !input
        ? "Please enter your wallet address."
        : input.length < 28
        ? "Wallet address must be at least 28 characters."
        : ""
    );
  };

  return (
    <div className="min-h-screen z-20 flex flex-col items-center justify-center w-full p-6 text-white">
      <div className="mb-5">
        <GradientHeading>Whitelist Checker</GradientHeading>
      </div>
      <input
        value={wallet}
        onChange={handleChange}
        placeholder="Enter Wallet Address"
        className="p-2 bg-transparent text-white border-none outline-none btn-gradient-1 rounded mb-4 w-full max-w-2xl z-20"
      />
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 mb-4 text-sm"
        >
          {error}
        </motion.p>
      )}
      <motion.div
        onClick={!loading && wallet.length >= 28 ? checkWhitelist : null}
        whileHover={{ scale: !loading && wallet.length >= 28 ? 1.05 : 1 }}
        whileTap={{ scale: !loading && wallet.length >= 28 ? 0.95 : 1 }}
        className={`${
          loading || wallet.length < 28
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        } bg-gradient-to-tr from-[#1E58FC] z-20 via-[#D914E4] to-[#F10419] min-w-[200px] rounded-[50px] min-h-[40px] text-[16px] font-bold text-white flex items-center justify-center`}
      >
        {loading ? "Loading..." : "Check Now"}
      </motion.div>
      {message && (
        <MessageModal message={message} onClose={() => setMessage("")} />
      )}
    </div>
  );
}
