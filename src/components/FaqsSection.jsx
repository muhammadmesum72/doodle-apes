// components/SectionFAQ.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientHeading from "./GradientHeading";

const faqs = [
  { question: "Where will the minting take place?", answer: "Magic Eden" },
  { question: "What is the mint price?", answer: "WL for 3 APE, Public for 5 APE" },
  { question: "When is the mint date?", answer: "TBA" },
  { question: "What is the total supply?", answer: "3333" },
  { question: "When will D00dle Apes be revealed?", answer: "Instant after sold out" },
  { question: "What about Top Holders?", answer: "Top 3 holders will receive Ape coins." },
];

export default function SectionFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="text-white py-10 sm:py-12 md:py-20">
      <div className="text-center mb-8">
        <GradientHeading>F.A.Q</GradientHeading>
      </div>
      <div className="mt-6 space-y-6 sm:space-y-8 w-11/12 sm:w-3/4 md:w-2/3 mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="btn-gradient-1 rounded-xl overflow-hidden">
            <div className="text-white rounded-lg p-4">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left text-[18px] sm:text-[20px] md:text-[22px] flex items-center justify-between"
              >
                <div>{faq.question}</div>
                <motion.div
                  animate={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="19"
                    height="9"
                    viewBox="0 0 19 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.453857 9.6L1.95386 11L9.45386 3.6L16.9539 11L18.4539 9.6L9.45386 0.6L0.453857 9.6Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-[16px] sm:text-[18px] md:text-[20px] text-white/70 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
