import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import CallToAction from './CallToAction';


export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // List of FAQs
  const faqData = [
    {
      question: "What types of security services do you offer?",
      answer: "Our services typically include security guard services, CCTV installation and monitoring, alarm systems, access control, and key holding and more."
    },
    {
      question: "How do you ensure the reliability of your security staff?",
      answer: "We rigorously screen and train our security guards. They undergo background checks, security training, and regular performance evaluations."
    },
    {
      question: "Can you provide security for special events?",
      answer: "Yes, we offer specialized security services for events such as concerts, conferences, and sporting events."
    },
    {
      question: "How do you respond to security incidents?",
      answer: "We have a rapid response team that is trained to handle various security incidents, including theft, vandalism, and intrusion."
    },
    {
      question: "How much do your security services cost?",
      answer: "Our rates vary depending on the specific services required and the level of security needed. Please contact us for a customized quote."
    }
  ];

  return (
    <>
    <Header />
    <section id="faq-1193">
      <div className="cs-container">
        {/* Image Section */}
        <div className="cs-image-group">
          <picture className="cs-picture cs-picture1">
            <source media="(max-width: 600px)" srcSet="./assets/question-mark-2.jpg" />
            <source media="(min-width: 601px)" srcSet="./assets/question-mark-2.jpg" />
            <img loading="lazy" decoding="async" src="./assets/question-mark-2.jpg" alt="question mark" width="522" height="609" aria-hidden="true" />
          </picture>
        </div>
        
        {/* FAQ Content */}
        <div className="cs-content">
          <span className="cs-topper">Asked questions</span>
          <h2 className="cs-title">Frequently Asked Questions</h2>
          <ul className="cs-faq-group">
            {faqData.map((faq, index) => (
              <li className={`cs-faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                <button className="cs-button" onClick={() => toggleFAQ(index)}>
                  <span className="cs-button-text">{faq.question}</span>
                </button>
                {activeIndex === index && <p className="cs-item-p">{faq.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <CallToAction />
    <Footer />
    </>
  );
}

 