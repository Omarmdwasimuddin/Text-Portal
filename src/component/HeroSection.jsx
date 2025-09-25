'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiArrowDown, FiBell } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import Calculator from './Calculator'

const calculators = [
  {
    title: "VAT",
    component: (
      <Calculator 
        description="Calculate VAT quickly and accurately for any transaction." 
        primaryField="Amount" 
        defaultRate={15} 
        rateLabel="VAT Rate (%)" 
        calcType="vat" 
      />
    )
  },
  {
    title: "Income Tax",
    component: (
      <Calculator 
        description="Compute your yearly or monthly income tax easily." 
        primaryField="Income" 
        defaultRate={10} 
        rateLabel="Tax Rate (%)" 
        calcType="income" 
      />
    )
  },
  {
    title: "Customs",
    component: (
      <Calculator 
        description="Estimate customs duty for imported goods." 
        primaryField="Item Value" 
        defaultRate={25} 
        rateLabel="Duty Rate (%)" 
        calcType="customs" 
      />
    )
  },
]

export default function HeroSection() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [isFocused, setIsFocused] = useState(false)
  const [activeTab, setActiveTab] = useState(calculators[0].title)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching:', search, 'Filter:', filter)
  }

  const activeCalc = calculators.find(calc => calc.title === activeTab)

  return (
    <section className="relative bg-[url('/Img/law.jpg')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-12 min-h-screen">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 items-start">
          
          {/* 1st Grid (80%) - Fixed height container */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-8">
              {/* Search Section */}
              <motion.form
                onSubmit={handleSearch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-3xl mx-auto" // Changed max-w-3xl to max-w-5xl
              >
                <div className="relative w-full md:w-2/3"> {/* Increased width to 2/3 */}
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
                        left: '3rem', // Increased left spacing
                        right: '1rem', // Added right spacing
                        transform: 'translateY(-50%)',
                        color: '#00ccff',
                        fontSize: '1rem',
                        textShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                        pointerEvents: 'none',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
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

              {/* Heading Section */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-extrabold text-white leading-snug text-center"
              >
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  বাংলাদেশের ট্যাক্স, ভ্যাট, কাস্টমস আইন
                </span>{' '}
                — এক প্ল্যাটফর্মে
              </motion.h1>

              {/* Subscription Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md max-w-md mx-auto"
              >
                <p className="text-gray-700 text-justify mb-4">
                  বার্ষিক সাবস্ক্রিপশনে আনলক করুন সব VAT, কাস্টমস, বন্ড ও পরীক্ষার সহায়িকা বইয়ের সফটকপি। 
                  যেকোনো সময় অনলাইনে পড়ুন এবং এক বছরের জন্য আপডেটেড কনটেন্ট উপভোগ করুন।
                </p>
                <div className="flex justify-center">
                <a
                  href="/subscribe"
                  className="w-48 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white font-medium shadow-lg text-center hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <FiBell size={16} />
                  Subscribe
                </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2nd Grid (20%) - Calculator with independent scroll */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-1 bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl flex flex-col max-h-[600px] lg:max-h-[800px] overflow-hidden border border-gray-200"
          >
            {/* Tab Buttons */}
            <div className="flex flex-row flex-wrap gap-2 mb-4 flex-shrink-0">
              {calculators.map((calc) => (
                <button
                  key={calc.title}
                  onClick={() => setActiveTab(calc.title)}
                  className={`px-4 py-2 rounded text-sm font-medium text-left ${
                    activeTab === calc.title
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {calc.title}
                </button>
              ))}
            </div>

            {/* Active Tab Calculator with scroll */}
            <div className="flex-1 overflow-y-auto">
              {activeCalc && (
                <div className="min-h-0">
                  {activeCalc.component}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}