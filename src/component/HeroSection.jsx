'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiBook, FiFileText, FiDollarSign, FiArrowDown, FiBookOpen, FiBell } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', search, 'Filter:', filter);
    // 👉 এখানে তোমার search API বা routing connect করতে পারবে
  };

  return (
    <section
      className="relative bg-[url('/Img/law.jpg')] bg-cover bg-center bg-no-repeat py-20 px-6 lg:px-12 text-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-snug"
        >
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            বাংলাদেশের ট্যাক্স, ভ্যাট, কাস্টমস আইন
          </span>{' '}
          — এক প্ল্যাটফর্মে
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
        >
          আপডেটেড আইন, বিধি, এসআরও, ব্যাখাপত্র ও তফসিল সহজে খুঁজুন, পড়ুন ও বিশ্লেষণ করুন।
        </motion.p>

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-3xl mx-auto mb-12"
        >
          <div className="relative w-full md:flex-1">
            <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
                color: '##00ccff',
                fontSize: '1rem',
                textShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                pointerEvents: 'none',
              }}
              repeat={Infinity}
            />
          </div>

          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-5 py-3 pr-10 rounded-full bg-white/80 backdrop-blur-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
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
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FiSearch size={18} />
            Search
          </button>
        </motion.form>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href="/acts/vat-2012"
            className="px-5 py-3 bg-white/90 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FiFileText className="text-blue-600" />
            VAT Act 2012
          </a>
          <a
            href="/acts/customs-2023"
            className="px-5 py-3 bg-white/90 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FiBook className="text-green-600" />
            Customs Act 2023
          </a>
          <a
            href="/acts/income-tax-2023"
            className="px-5 py-3 bg-white/90 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FiDollarSign className="text-yellow-600" />
            Income Tax Act 2023
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <a
            href="/acts"
            className="px-8 py-3 rounded-full border border-gray-200 bg-white/80 font-medium hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <FiBookOpen />
            Browse All Acts
          </a>
          <a
            href="/subscribe"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <FiBell />
            Subscribe Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}