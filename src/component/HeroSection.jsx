'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiArrowDown, FiBell } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'   

const calculators = [
  {
    title: "VAT Calculator",
    description: "Calculate VAT quickly and accurately for any transaction.",
    buttonText: "Try Now",
    link: "/calculator/vat",
    bgColor: "bg-indigo-600",
    icon: "/Calculator/vat.png"  
  },
  {
    title: "Income Tax Calculator",
    description: "Compute your yearly or monthly income tax easily.",
    buttonText: "Try Now",
    link: "/calculator/tax",
    bgColor: "bg-green-600",
    icon: "/Calculator/tax.png" 
  },
  {
    title: "Customs Duty Calculator",
    description: "Estimate customs duty for imported goods.",
    buttonText: "Try Now",
    link: "/calculator/customs",
    bgColor: "bg-yellow-600",
    icon: "/Calculator/customs.png" 
  },
]

export default function HeroSection() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching:', search, 'Filter:', filter)
    // 👉 Connect your search API or routing here
  }

  return (
    <section className="relative bg-[url('/Img/law.jpg')] bg-cover bg-center bg-no-repeat py-20 px-6 lg:px-12 text-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-3xl mx-auto mb-12"
        >
          <div className="relative w-full md:flex-1">
            <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-900" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full pl-12 pr-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${search !== '' ? 'text-gray-300' : 'text-black'}`}
            />

            {/* Animation placeholder */}
            {search === '' && !isFocused && (
              <TypeAnimation
                sequence={[
                  'Search by law, section, year, or keyword...',
                  1000,
                  'Search by law, section, year...',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '2rem',
                  transform: 'translateY(-50%)',
                  color: '#00ccff',
                  fontSize: '1rem',
                  textShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                  pointerEvents: 'none',
                }}
                repeat={Infinity}
              />
            )}
          </div>

          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-5 py-3 pr-10 rounded-full text-gray-400 bg-white/10 backdrop-blur-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="all">All Laws</option>
              <option value="vat">VAT</option>
              <option value="customs">Customs</option>
              <option value="income-tax">Income Tax</option>
            </select>
            <FiArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white font-medium shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FiSearch size={18} />
            Search
          </button>
        </motion.form>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-12 leading-snug"
        >
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            বাংলাদেশের ট্যাক্স, ভ্যাট, কাস্টমস আইন
          </span>{' '}
          — এক প্ল্যাটফর্মে
        </motion.h1>

        {/* Two Sidebars */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/3 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <p className="text-gray-700 text-justify mb-4">
              বার্ষিক সাবস্ক্রিপশনে আনলক করুন সব VAT, কাস্টমস, বন্ড ও পরীক্ষার সহায়িকা বইয়ের সফটকপি। যেকোনো সময় অনলাইনে পড়ুন এবং এক বছরের জন্য আপডেটেড কনটেন্ট উপভোগ করুন।
            </p>
            <a
              href="/subscribe"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium shadow-lg text-center hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <FiBell />
              Subscribe
            </a>
          </motion.div>

          {/* Right Sidebar - Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-2/3 grid gap-6 md:grid-cols-3"
          >
            {calculators.map((calc, idx) => (
              <div key={idx} className="bg-white p-4 md:p-5 flex flex-col justify-between shadow-md hover:shadow-lg transition dual-border rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`rounded-full p-2 md:p-3 flex items-center justify-center ${calc.bgColor}`}>
                    <Image
                      src={calc.icon}
                      alt={calc.title}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
