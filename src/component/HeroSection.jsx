'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiArrowDown, FiBell, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import Calculator from './Calculator'
import Image from "next/image"
import { FaStar, FaCartPlus, FaBookOpen, FaInfoCircle, FaHeart, FaShare } from 'react-icons/fa'

// Product Card Component
const ProductCard = ({ book, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleAddToCart = (e) => {
    e.stopPropagation()
    console.log('Added to cart:', book.name)
  }

  const handleLike = (e) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <motion.div
      className={`relative cursor-pointer ${
        isActive 
          ? 'w-64 h-80 z-10' 
          : 'w-48 h-64 opacity-80 scale-90'
      } transition-all duration-500 ease-in-out`}
      onClick={onClick}
      whileHover={{ scale: isActive ? 1.05 : 0.95 }}
    >
      <div
        className={`group relative bg-gray-800/80 backdrop-blur-sm border ${
          isActive ? 'border-red-500' : 'border-gray-600'
        } rounded-2xl shadow-2xl overflow-hidden h-full transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Book Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={book.image}
            alt={book.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:opacity-100" />
          
          {/* Quick Actions */}
          <div className="absolute flex flex-col gap-2 transition-all duration-300 delay-200 opacity-0 top-3 right-3 group-hover:opacity-100">
            <button
              onClick={handleLike}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-900/80 text-gray-300 hover:bg-red-500 hover:text-white'
              }`}
            >
              <FaHeart className={`text-sm ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
              {book.category}
            </span>
          </div>
        </div>

        {/* Book Details */}
        <div className="p-4">
          <h3 className={`font-bold text-white ${
            isActive ? 'text-xl' : 'text-lg'
          } mb-2 line-clamp-2 leading-tight`}>
            {book.name}
          </h3>
          
          <p className="mb-2 text-sm text-gray-400">By {book.writer}</p>
          
          <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-yellow-400" />
            <span className="font-medium text-gray-300">{book.rating}</span>
            <span className="text-sm text-gray-500">/5</span>
          </div>

          <div className="text-right">
          <p className={`font-bold text-red-400 ${isActive ? 'text-2xl' : 'text-md'}`}>
            {book.price.toLocaleString('bn-BD')}৳
          </p>
        </div>

        </div>


        </div>

        {/* Hover Actions - Only show for active card */}
        {isActive && (
          <div className={`px-4 pb-4 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center flex-1 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 transform bg-red-500 rounded-lg hover:bg-red-600 hover:scale-105"
              >
                <FaCartPlus className="mr-2" />
                Add to Cart
              </button>
              
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center px-3 py-2 text-sm font-semibold text-white transition-all duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
              >
                <FaBookOpen className="text-sm" />
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const calculators = [
  {
    title: "VAT",
    component: (
      <Calculator 
        description="যেকোনো লেনদেনের জন্য দ্রুত এবং নির্ভুলভাবে ভ্যাট গণনা করুন।" 
        primaryField="Amount" 
        defaultRate={15} 
        rateLabel="ভ্যাট হার (%)" 
        calcType="vat" 
      />
    )
  },
  {
    title: "Income Tax",
    component: (
      <Calculator 
        description="বার্ষিক বা মাসিক আয়কর সহজে হিসাব করুন।" 
        primaryField="Income" 
        defaultRate={10} 
        rateLabel="কর হার (%)" 
        calcType="income" 
      />
    )
  },
  {
    title: "Customs",
    component: (
      <Calculator 
        description="আমদানিকৃত পণ্যের জন্য কাস্টমস শুল্ক অনুমান করুন।" 
        primaryField="Item Value" 
        defaultRate={25} 
        rateLabel="শুল্ক হার (%)" 
        calcType="customs" 
      />
    )
  },
]


// Mock product data
const products = [
  {
    id: '1',
    name: 'ভ্যাট গাইড 2024',
    writer: 'John Doe',
    image: '/Books/vatguide.jpeg',
    price: 350,
    rating: 4.5,
    description: 'Complete guide to Value Added Tax with latest updates',
    category: 'VAT'
  },
  {
    id: '2',
    name: 'কাস্টম গাইড',
    writer: 'Abu Sufian',
    image: '/Books/customguide.jpeg',
    price: 270,
    rating: 4.7,
    description: 'Comprehensive customs regulations and procedures guide',
    category: 'Customs'
  },
  {
    id: '3',
    name: 'পরীক্ষা সহায়িকা',
    writer: 'Abu Sufian',
    image: '/Books/porikkhasohayika.jpeg',
    price: 300,
    rating: 4.8,
    description: 'Master taxation principles and practices',
    category: 'Tax'
  },
  {
    id: '4',
    name: 'বন্ড গাইড',
    writer: 'Abu Sufian',
    image: '/Books/nan.jpeg',
    price: 220,
    rating: 4.3,
    description: 'Complete bond management and compliance guide',
    category: 'Finance'
  },
  {
    id: '5',
    name: 'ভ্যাট গাইড',
    writer: 'Abu Sufian',
    image: '/Books/vatguide.jpeg',
    price: 230,
    rating: 4.6,
    description: 'Essential legal handbook for professionals',
    category: 'Law'
  },
]

export default function HeroSection() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [isFocused, setIsFocused] = useState(false)
  const [activeTab, setActiveTab] = useState(calculators[0].title)
  const [activeProductIndex, setActiveProductIndex] = useState(1) // Start with middle card

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductIndex((prev) => (prev + 1) % products.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching:', search, 'Filter:', filter)
  }

  const handlePrevProduct = () => {
    setActiveProductIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleNextProduct = () => {
    setActiveProductIndex((prev) => (prev + 1) % products.length)
  }

  const getVisibleProducts = useCallback(() => {
    const result = []
    const totalProducts = products.length
    
    for (let i = -1; i <= 1; i++) {
      const index = (activeProductIndex + i + totalProducts) % totalProducts
      result.push(products[index])
    }
    
    return result
  }, [activeProductIndex])

  const visibleProducts = getVisibleProducts()

  const activeCalc = calculators.find(calc => calc.title === activeTab)

  return (
    <section className="relative bg-[url('/Img/law.jpg')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-12 min-h-screen">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Grid Container */}
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* 1st Grid (80%) - Fixed height container */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-8">
              {/* Search Section */}
              <motion.form
                onSubmit={handleSearch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center w-full max-w-3xl gap-3 mx-auto md:flex-row"
              >
                <div className="relative w-full md:w-2/3">
                  <FiSearch className="absolute text-gray-900 transform -translate-y-1/2 left-5 top-1/2" />
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
                        left: '3rem',
                        right: '1rem',
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
                    className="px-5 py-3 pr-10 text-gray-400 border border-gray-300 rounded-full shadow-md appearance-none bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Laws</option>
                    <option value="vat">VAT</option>
                    <option value="customs">Customs</option>
                    <option value="income-tax">Income Tax</option>
                  </select>
                  <FiArrowDown className="absolute text-gray-400 transform -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 font-medium text-white transition-transform rounded-full shadow-lg bg-gradient-to-r from-green-600 to-green-800 hover:scale-105"
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
                className="mb-2 text-2xl font-bold leading-snug text-center text-white md:text-2xl"
              >
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
                  বাংলাদেশের ট্যাক্স, ভ্যাট, কাস্টমস আইন
                </span>{' '}
                — এক প্ল্যাটফর্মে
              </motion.h1>

              {/* Product Card Slider Section */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mt-0"
              >
                {/* Section Title */}
                <div className="mb-10 text-center">
                  <h2 className="mb-2 text-xl font-bold text-white md:text-xl myFont">
                    <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">
                      জনপ্রিয় বইসমূহ
                    </span>
                  </h2>
                  <p className="text-gray-300 text-md">আমাদের সেরা বিক্রিত বইগুলি দেখুন</p>
                </div>

                {/* Slider Container */}
                <div className="relative flex items-center justify-center">
                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrevProduct}
                    className="absolute z-20 p-3 text-white transition-all duration-300 rounded-full left-4 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-110"
                  >
                    <FiChevronLeft size={24} />
                  </button>

                  <button
                    onClick={handleNextProduct}
                    className="absolute z-20 p-3 text-white transition-all duration-300 rounded-full right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-110"
                  >
                    <FiChevronRight size={24} />
                  </button>

                  {/* Products Slider */}
                  <div className="flex items-center justify-center h-64 gap-4 px-12">
                    {visibleProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        book={product}
                        isActive={index === 1} // Middle card is active
                        onClick={() => {
                          const productIndex = products.findIndex(p => p.id === product.id)
                          setActiveProductIndex(productIndex)
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-12">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProductIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeProductIndex
                          ? 'bg-red-500 scale-125'
                          : 'bg-white/100 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2nd Grid (20%) - Calculator with independent scroll */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-1 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl flex flex-col max-h-[600px] lg:max-h-[800px] overflow-hidden border border-gray-200"
          >
            {/* Tab Buttons */}
            <div className="flex flex-row flex-wrap flex-shrink-0 gap-2 mb-4">
              {calculators.map((calc) => (
                <button
                  key={calc.title}
                  onClick={() => setActiveTab(calc.title)}
                  className={`px-4 py-2 rounded text-sm font-medium text-left ${
                    activeTab === calc.title
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-950 hover:bg-gray-200'
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