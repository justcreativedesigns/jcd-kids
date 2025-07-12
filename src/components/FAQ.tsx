import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What age groups do you design kids' rooms for?",
      answer: "We design rooms for all age groups - from nurseries for newborns to teenage bedrooms. Our designs evolve with your child, including convertible furniture and adaptable themes that can grow from toddler (0-3 years), to kids (4-12 years), to teenagers (13+ years)."
    },
    {
      question: "How much does a kids' room interior cost in Bangalore?",
      answer: "Kids' room interiors typically range from ₹80,000 to ₹3 lakhs depending on size and requirements. This includes study tables, wardrobes, beds with storage, wall designs, and safety features. We offer budget-friendly packages starting at ₹80,000 for basic setups."
    },
    {
      question: "Do you use child-safe materials and paints?",
      answer: "Yes, child safety is our top priority! We use only non-toxic, lead-free paints, rounded edge furniture, anti-slip materials, and child-safe locks. All materials are certified eco-friendly and meet international safety standards for children's furniture."
    },
    {
      question: "Can you create themed kids' rooms?",
      answer: "Absolutely! We specialize in themed rooms including space, princess, jungle, superhero, sports, and educational themes. We create immersive environments with custom wall art, themed furniture, and coordinated accessories that spark imagination and creativity."
    },
    {
      question: "How do you maximize storage in small kids' rooms?",
      answer: "We excel at space optimization with solutions like bunk beds with built-in storage, wall-mounted study tables, under-bed drawers, vertical wardrobes, and multipurpose furniture. Every inch is utilized efficiently while maintaining play space."
    },
    {
      question: "Do you provide study area designs for kids?",
      answer: "Yes! We create ergonomic study spaces with height-adjustable desks, proper lighting, organized storage for books and stationery, pin-up boards, and comfortable seating. Our designs promote good posture and create a conducive learning environment."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;