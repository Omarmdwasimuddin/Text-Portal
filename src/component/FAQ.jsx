'use client'
import { useState } from 'react';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugit.",
  },
  {
    question: "How do you make holy water?",
    answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipiscing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipiscing elit. Culpa, voluptas ipsa qui excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugit.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugit ullam magnam suscip deserunt illum natus facilis atque vero consequuntur. Quisquam, debitis error.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipiscing elit. Eveniet perspiciatis officis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
  },
];

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full text-left py-4 text-white hover:text-gray-300 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-gray-400 text-xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-400 text-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}