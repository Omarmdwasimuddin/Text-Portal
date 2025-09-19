'use client'

import React from 'react'

const calculators = [
  {
    title: "VAT Calculator",
    description: "Calculate VAT quickly and accurately for any transaction.",
    buttonText: "Try Now",
    link: "/calculator/vat",
    bgColor: "bg-indigo-600",
    icon: "💰"
  },
  {
    title: "Income Tax Calculator",
    description: "Compute your yearly or monthly income tax easily.",
    buttonText: "Try Now",
    link: "/calculator/tax",
    bgColor: "bg-green-600",
    icon: "📊"
  },
  {
    title: "Customs Duty Calculator",
    description: "Estimate customs duty for imported goods.",
    buttonText: "Try Now",
    link: "/calculator/customs",
    bgColor: "bg-yellow-600",
    icon: "🛃"
  },
]

export default function FeaturedCalculators() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Tools & Calculators</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {calculators.map((calc, idx) => (
            <div key={idx} className="bg-white p-4 md:p-5 flex flex-col justify-between shadow-md hover:shadow-lg transition dual-border rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`text-2xl md:text-3xl rounded-full p-2 md:p-3 text-white ${calc.bgColor}`}>
                  {calc.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{calc.title}</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-4">{calc.description}</p>
              <a 
                href={calc.link} 
                className={`inline-block text-white font-medium px-4 md:px-6 py-2 rounded ${calc.bgColor} hover:opacity-90 transition text-center text-sm md:text-base`}
              >
                {calc.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
