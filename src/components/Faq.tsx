import React, { useState } from 'react';
import '../styles/Faq.css';

const faqData = [
  {
    question: 'What visualization tools does Vizor3D include?',
    answer: 'Vizor3D includes a 3D model viewer, augmented reality (AR), 360° virtual tours and modeling/rendering services. Each tool adapts to different types of projects and needs.'
  },
  {
    question: 'How can I use the virtual tour for my project?',
    answer: 'We use 360° images to build the virtual tour. We can work with the images you provide, or handle the entire process including modeling, rendering, and publishing.'
  },
  {
    question: 'How can I view a 3D model in Vizor3D?',
    answer: 'Vizor3D allows you to view 3D models in .glb and .gltf formats directly in the browser. You just need to send us the file in one of those formats.'
  },
  {
    question: 'Which devices are compatible with Vizor3D?',
    answer: 'Vizor3D works on modern computers, tablets, and smartphones with updated browsers. It’s also compatible with iOS, Android, Chrome, and Safari.'
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Faq's
</h2>
      <ul className="faq-list">
        {faqData.map((item, idx) => (
          <li key={idx} className={`faq-item${openIndex === idx ? ' open' : ''}`}>
            <button className="faq-question" onClick={() => toggle(idx)}>
              {item.question}
              <span className="faq-arrow">{openIndex === idx ? '▲' : '▼'}</span>
            </button>
            <div className="faq-answer" style={{ maxHeight: openIndex === idx ? '200px' : '0' }}>
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
