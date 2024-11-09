// components/SectionFAQ.js
import { useState } from 'react';

const faqs = [
  { question: 'Where will the minting take place?', answer: 'Magic Eden' },
  { question: 'What is the mint price?', answer: 'WL for 3 APE, Public for 5 APE' },
  { question: 'When is the mint date?', answer: 'TBA' },
  { question: 'What is the total supply?', answer: '3333' },
  { question: 'When will D00dle Apes be revealed?', answer: 'Instant after sold out' },
  { question: 'What about Top Holders?', answer: 'Top 3 holders will receive Ape coins.' }
];

export default function SectionFAQ() {
  const [open, setOpen] = useState(null);
  
  return (
    <section id="faq" className=" text-white py-20">
      <h2 className="text-7xl font-bold w-full text-center">F.A.Q</h2>
      <div className="mt-6 space-y-8   w-2/3 mx-auto ">
        {faqs.map((faq, index) => (
          <div key={index} className='border-b'>
            <button onClick={() => setOpen(open === index ? null : index)} className="w-full text-left text-2xl">
              {faq.question}
            </button>
            {open === index && <p className="mt-2 text-xl text-white/70">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
