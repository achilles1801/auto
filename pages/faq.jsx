import React, { useState } from 'react';

const faqs = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 3',
    answer: 'Answer 3',
  },
  {
    question: 'Question 4',
    answer: 'jkgewgeroijgreojbgpijreqbgjobreodgjbrejg er gjerblgjnre g regnv erljn vrejng jenr qgjnr egn erljgnrelgbekrjlg refgn',
  },
  {
    question: 'Question 5',
    answer: 'Answer 5',
  },
  {
    question: 'Question 6',
    answer: 'Answer 6',
  }

  // Add more FAQs as needed
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
<div className="bg-gray-100 min-h-screen p-8" style={{ fontFamily: "'Bebas Neue', cursive" }}>
  <section className="mb-8 relative">
  <div className="flex items-center justify-center mb-4">
  <div className="w-24 h-1 bg-red-600"></div>
  <span className="bg-gray-100 px-4 text-md mx-2">Questions</span>
  <div className="w-24 h-1 bg-red-600"></div>
</div>
    
    <h2 className="text-3xl font-semibold text-center mb-4 relative pt-2">
      <span className="bg-gray-100 px-4 text-[#AF1414] text-4xl">FAQs</span>
    </h2>

    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-xl ">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 rounded-md border border-gray-300">
            <div onClick={() => handleClick(index)} className="cursor-pointer flex justify-between items-center">
              <span>{faq.question}</span>
              <span className="text-gray-700">
                {/* Chevron icon, replace with actual icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeIndex === index ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </span>
            </div>
            {activeIndex === index && <div className="mt-2 text-gray-600">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  </section>
</div>


  );
}

export default FAQ;