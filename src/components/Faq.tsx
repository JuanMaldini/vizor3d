import React, { useState } from 'react';
import '../styles/Faq.css';

const faqData = [
  {
    question: 'What visualization tools does Vizor3D include?',
    answer: 'Vizor3D includes augmented reality (AR), 360° virtual tours, a 3D model viewer, and modeling/rendering services. Each tool adapts to different types of projects and needs.'
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
    question: 'Can I upload my own models?',
    answer: 'Currently, we only showcase selected models, but we’ll soon enable uploading custom models. In the meantime, you can send us your model and we’ll publish it for you.'
  },
  {
    question: 'Which devices are compatible with Vizor3D?',
    answer: 'Vizor3D works on modern computers, tablets, and smartphones with updated browsers. It’s also compatible with iOS, Android, Chrome, and Safari.'
  },
  {
    question: 'Do you offer 3D modeling and rendering services?',
    answer: 'Yes. We can take care of the modeling, design, and rendering of your spaces.'
  },
  {
    question: 'Do virtual tours work offline?',
    answer: 'Not yet. Both virtual tours and 3D viewers require an internet connection, as the files are loaded from the cloud.'
  },
  {
    question: 'What information do you need to create a virtual tour from scratch?',
    answer: 'We need floor plans, space specifications, and any other relevant technical details. The more information we receive, the better the tour experience will be.'
  },
  {
    question: 'What if I don’t have technical knowledge to implement the viewer or virtual tour?',
    answer: 'No worries. We provide everything ready to use and assist you during the integration process if needed.'
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
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
