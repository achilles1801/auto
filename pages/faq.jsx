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
  // Add more FAQs here
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2 onClick={() => handleClick(index)}>{faq.question}</h2>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;